import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

@Pipe({
  name: 'asyncState',
})
export class AsyncStatePipe implements PipeTransform {
  transform(value): Observable<{ loading: boolean; value: any; error: Error }> {
    return value.pipe(
      map((value: any) => ({ loading: false, value })),
      startWith({ loading: true }),
      catchError((error) => of({ loading: false, error }))
    );
  }
}
