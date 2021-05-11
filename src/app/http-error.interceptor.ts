import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {   catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('req', req);

        return next.handle(req)
        .pipe(
          catchError((res: HttpErrorResponse) => {
            let errorMessage = '';
            if (res.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${res}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${res.status}\nMessage: ${res.message}`;
            }
            window.alert(errorMessage);
            return throwError(errorMessage);
          })
        );
    }
}
