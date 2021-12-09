/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'
import { FullCalendarModule, CalendarOptions } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptLocale from '@fullcalendar/core/locales/pt-br'
import listPlugin from '@fullcalendar/list'

FullCalendarModule.registerPlugins([
  timeGridPlugin,
  dayGridPlugin,
  interactionPlugin,
  listPlugin
])

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  public events: any[];
  public options: any;

  calendarOptions: CalendarOptions;

  constructor () {
    this.events = [
      {
        title: 'Gerson',
        start: '2021-12-05T09:30:00',
        end: '2021-12-05T10:30:00',
        extendedProps: {
          status: 'done'
        },
        backgroundColor: 'green',
        borderColor: 'green'
      },
      {
        title: 'Ana',
        start: '2021-12-05T11:30:00',
        end: '2021-12-05T12:30:00',
        extendedProps: {
          status: 'done'
        },
        backgroundColor: 'green',
        borderColor: 'green'
      }
    ]
  }

  ngOnInit (): void {
    this.calendarOptions = {
      initialView: 'dayGridDay',
      locale: ptLocale,
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
      },
      footerToolbar: {
        end: 'today prev,next'
      },
      buttonText: {
        today: 'data atual',
        month: 'do mês',
        week: 'da semana',
        day: 'do dia',
        list: 'em lista'
      },
      handleWindowResize: true,
      aspectRatio: 1.8,
      height: 400,
      dateClick: this.handleDateClick.bind(this),
      events: this.events
    }
  }

  handleDateClick (arg) {
    alert('data selecionada' + arg.dateStr)
  }
}
