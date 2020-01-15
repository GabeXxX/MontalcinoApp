import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {CalendarEvents} from './calendar-events.model';
import {HttpClient} from '@angular/common/http';
import {LOCAL_SERVER} from './global';

@Injectable({
    providedIn: 'root'
})
export class CalendarEventsService {

    constructor(private httpClient: HttpClient) {
    }

    private _events = new BehaviorSubject<CalendarEvents[]>([]);


    get events() {
        return this._events.asObservable();

    }

    fetchEvents() {
        return this.httpClient.get<CalendarEvents[]>(`${LOCAL_SERVER.URL}/manager/events`).pipe(
            map((resData) => {
                const events = [];
                resData.forEach((event) => {
                    events.push(new CalendarEvents(event.id, event.name, event.start, event.end));
                });
                return events;
            }),
            tap((events) => {
                return this._events.next(events);
            })
        );
    }


    getEvent(eventId: string) {
        return this.httpClient.get(`${LOCAL_SERVER.URL}/manager/events/${eventId}/`).pipe(
            map((event: CalendarEvents) => {
                return {
                    id: event.id,
                    name: event.name,
                    start: event.start,
                    end: event.end
                };
            }));

    }

    createEvent(id: string, name: string, start: string, end: string) {

        const newEvent = new CalendarEvents(
            id,
            name,
            start,
            end,
        );


        return this.httpClient.post(`${LOCAL_SERVER.URL}/manager/events`, {...newEvent})
            .pipe(
                switchMap((resData) => {
                    return this.events;
                }),

                take(1),
                tap((events) => {
                    this._events.next((events.concat(newEvent)));
                })
            );

    }


    removeEvent(eventId: string) {
        return this.httpClient.delete(`${LOCAL_SERVER.URL}/manager/events/${eventId}/`).pipe(
            switchMap(() => {
                return this.events;
            }),
            take(1),
            tap((events) => {
                this._events.next(events.filter(event => event.id !== eventId));
            })
        );

    }

    updateEvent(id: string,
                name: string,
                start: string,
                end: string,
    ) {
        let updateEvent: CalendarEvents[];

        return this.events.pipe(
            take(1),
            switchMap((events) => {
                if (events === undefined || events.length <= 0) {
                    return this.fetchEvents();
                } else {
                    return of(events);
                }
            }),
            switchMap((events) => {
                const updateEventIndex = events.findIndex((event) => event.id === id);
                updateEvent = [...events];
                const oldEvent = updateEvent[updateEventIndex];
                updateEvent[updateEventIndex] = new CalendarEvents(
                    oldEvent.id,
                    name,
                    start,
                    end
                );

                console.log(updateEvent[updateEventIndex]);
                // option+9 for `literal concatenation operator
                return this.httpClient.put(`${LOCAL_SERVER.URL}/manager/events/${id}/`,
                    {...updateEvent[updateEventIndex]});
            }),
            tap(() => {
                this._events.next(updateEvent);
            })
        );
    }
}
