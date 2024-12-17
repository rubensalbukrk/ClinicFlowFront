import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  AppointmentModel,
  ChangeSet,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  ConfirmationDialog,
  Toolbar,
  AllDayPanel,
  ViewSwitcher,
  DragDropProvider,
  MonthView,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { TextField } from "@mui/material";
import AppointmentService from "src/services/http/HttpAppointment";
import { CustomAppointmentComponent } from "./components/AppointmentComponent";
import { CustomToolTipHeader } from "./components/CustomToolTipHeader";
import { CustomFormHeaderButtomLayout } from "./components/CustomFormHeaderButtonLayout";

const appointmentService = new AppointmentService();

const appointments: Array<AppointmentModel> = await appointmentService.GET();

const date = new Date();
const formattedDate = date.toISOString().split("T")[0];


class FormAppointments extends React.PureComponent {
  state: {
    data: AppointmentModel[];
    addedAppointment: any;
    appointmentChanges: any;
    editingAppointment: any;
  };

  constructor(props: AppointmentModel) {
    super(props);
    this.state = {
      data: appointments,
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: {},
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }
  changeAddedAppointment(addedAppointment: any) {
    this.setState({ addedAppointment });
  }
  changeAppointmentChanges(appointmentChanges: any) {
    this.setState({ appointmentChanges });
  }
  changeEditingAppointment(editingAppointment: any) {
    this.setState({ editingAppointment });
  }
  commitChanges({ added, changed, deleted }: ChangeSet) {
    this.setState((state: AppointmentModel) => {
      let { data }: AppointmentModel = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment: AppointmentModel) =>
          changed[appointment.id ? appointment.id : 0]
            ? {
                ...appointment,
                ...changed[appointment.id ? appointment.id : 0],
              }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter(
          (appointment: AppointmentModel) => appointment?.id !== deleted
        );
      }
      return { data };
    });
  }

  CustomTextEditComponent = ({ appointmentData, type, ...restProps }: any) => {
    if (type === "multilineTextEditor") {
      return (
        <TextField
          label="Observações"
          multiline
          rows={10}
          fullWidth
          value={appointmentData?.notes || ""}
          onChange={(value) => this.changeEditingAppointment({...this.state.editingAppointment, notes: value.target.value})}
          variant="filled"
          {...restProps}
        />
      );
    }
  
    return <AppointmentForm.TextEditor {...restProps} />
  };

  render() {
    const { data, addedAppointment, appointmentChanges, editingAppointment } =
      this.state;

    return (
      <Paper>
        <Scheduler locale="pt-BR" data={data}>
          <ViewState defaultCurrentDate={formattedDate} />

          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <WeekView startDayHour={8} endDayHour={17} />
          <MonthView />
          <AllDayPanel />

          <IntegratedEditing />

          <EditRecurrenceMenu
            messages={{
              menuEditingTitle: "Editar Recorrência",
              menuDeletingTitle:
                "Você tem certeza que deseja excluir este agendamento?",
              current: "Este agendamento",
              currentAndFollowing: "Este e seguintes agendamentos",
              all: "Todos os agendamentos",
              commitButton: "Salvar",
              cancelButton: "Cancelar",
            }}
          />

          <ConfirmationDialog
            messages={{
              confirmDeleteMessage:
                "Você tem certeza que deseja deletar o agendamento?",
              confirmCancelMessage: "Você tem certeza que deseja descartar?",
              discardButton: "Descartar",
              deleteButton: "Deletar",
              cancelButton: "Cancelar",
            }}
          />

          <Appointments appointmentComponent={CustomAppointmentComponent} />
          <AppointmentTooltip
            showOpenButton
            showDeleteButton
            showCloseButton
            headerComponent={(props) => <CustomToolTipHeader {...props} />}
          />
          <AppointmentForm
            appointmentData={this.state.editingAppointment}
            commandLayoutComponent={(props: any) => (
              <CustomFormHeaderButtomLayout {...props} state={this.state} />
            )}
            textEditorComponent={this.CustomTextEditComponent}
            messages={{
              titleLabel: "Ex. Limpeza",
              detailsLabel: "Detalhes de agendamento",
              allDayLabel: "Todos os dias",
              repeatLabel: "Repetir",
              moreInformationLabel: "Informações adicionais",
              notesLabel: "",

              daily: "Dias",
              weekly: "Semanas",
              monthly: "Mêses",
              yearly: "Anos",

              commitCommand: "SALVAR",
              repeatEveryLabel: "Repetir cada",
              daysLabel: "dia(s)",
              endRepeatLabel: "terminar de repetir",
              never: "Nunca",
              onLabel: "Em",
              occurrencesLabel: "ocorrência(s)",
              afterLabel: "Após",

              firstLabel: "Primeiro",
              secondLabel: "Segundo",
              thirdLabel: "Terceiro",
              fourthLabel: "Quarto",
              lastLabel: "Último",

              weeksOnLabel: "semana(s) em",
              monthsLabel: "mês(es)",
              ofEveryMonthLabel: "de cada mês",
              theLabel: "De",
              everyLabel: "Toda",
              yearsLabel: "Ano(s)",
            }}
          />

          <Toolbar />
          <ViewSwitcher
            switcherComponent={(props) => (
              <ViewSwitcher.Switcher
                {...props}
                availableViews={props.availableViews.map((view) => ({
                  ...view,
                  displayName:
                    view.name === "Week"
                      ? "Semana"
                      : view.name === "Month"
                      ? "Mês"
                      : view.displayName,
                }))}
              />
            )}
          />
          <DateNavigator />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}

export { FormAppointments };
