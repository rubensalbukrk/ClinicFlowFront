import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  AppointmentModel,
  ChangeSet
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
  ViewSwitcher,
  DragDropProvider,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";

const appointments: Array<AppointmentModel> = [
  {
    title: "Limpeza de canal",
    startDate: new Date(2024, 11, 7, 9, 35),
    endDate: new Date(2024, 11, 7, 11, 30),
    id: 0,
    rRule: "FREQ=DAILY;COUNT=1",
  },
  {
    title: "Clareamento",
    startDate: new Date(2024, 11, 5, 12, 11),
    endDate: new Date(2024, 11, 5, 13, 0),
    id: 1,
    rRule: "FREQ=DAILY;COUNT=1",
  },
  {
    title: "Remoção de caries",
    startDate: new Date(2024, 11, 3, 12, 0),
    endDate: new Date(2024, 11, 3, 13, 30),
    id: 2,
    rRule: "FREQ=DAILY;COUNT=1",
  },
  {
    title: "Remoção de caries",
    startDate: new Date(2024, 11, 2, 9, 30),
    endDate: new Date(2024, 11, 2, 10, 35),
    id: 3,
    rRule: "FREQ=DAILY;COUNT=1",
  },
  {
    title: "Remoção de caries",
    startDate: new Date(2024, 11, 9, 9, 30),
    endDate: new Date(2024, 11, 9, 10, 35),
    id: 4,
    rRule: "FREQ=DAILY;COUNT=1",
  },
];

const date = new Date();
const formattedDate = date.toISOString().split("T")[0];

class FormAppointments extends React.PureComponent {
  state: {
    data: AppointmentModel[];
    addedAppointment: any;
    appointmentChanges: any;
    editingAppointment: undefined;
  };

  constructor(props: AppointmentModel) {
    super(props);
    this.state = {
      data: appointments,
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
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
    return this;
  }

  changeEditingAppointment(editingAppointment: any) {
    this.setState({ editingAppointment });
    return this;
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
          changed[appointment?.id]
            ? { ...appointment, ...changed[appointment?.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter(
          (appointment: AppointmentModel) => appointment.id !== deleted
        );
      }
      return { data };
    });
  }

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

          <EditRecurrenceMenu
            messages={{
              menuEditingTitle: "Editar Recorrência",
              current: "Este agendamento",
              currentAndFollowing: "Este e seguintes agendamentos",
              all: "Todos os agendamentos",
              commitButton: "Salvar",
              cancelButton: "Cancelar",
              // Mais mensagens personalizadas, se necessário.
            }}
          />
          <ConfirmationDialog />
          <Appointments /> 
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
  
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

          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}

export { FormAppointments };
