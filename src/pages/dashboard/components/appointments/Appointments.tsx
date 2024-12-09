import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  AppointmentModel,
  ChangeSet,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  MonthView,
  Appointments,
  ViewSwitcher,
  Toolbar,
  DragDropProvider,
  EditRecurrenceMenu,
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
  state: { data: AppointmentModel[] };

  constructor(props: AppointmentModel) {
    super(props);
    this.state = {
      data: appointments,
    };

    this.commitChanges = this.commitChanges.bind(this);
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
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler data={data}>
          <ViewState defaultCurrentDate={formattedDate} />
          <EditingState onCommitChanges={this.commitChanges} />
          <WeekView startDayHour={8} endDayHour={17} />
          <MonthView />
          <Appointments />

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
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}

export { FormAppointments };
