import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  getMessages(): Observable<string> {
    return new Observable((observer) => {
      observer.next('Message 1');
      observer.next('Message 2');

      setTimeout(() => {
        observer.next('Message 3 (after delay)');
        observer.complete();
      }, 2000);
    });
  }
}
