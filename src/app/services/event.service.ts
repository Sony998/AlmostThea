import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventSubject = new Subject<any>();

  emit(event: string, data?: any) {
    this.eventSubject.next({ event, data });
  }

  on(event: string): Observable<any> {
    return this.eventSubject.asObservable().pipe(
      filter((e) => e.event === event)
    );
  }
}