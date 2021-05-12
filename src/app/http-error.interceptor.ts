import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import {   catchError, map, retry, switchMap } from 'rxjs/operators';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

  constructor(private router: Router,
              private auth: AuthService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
        .pipe(
          catchError((res: HttpErrorResponse) => {
            let errorMessage = '';
            console.log(res);

            if (res.status === 401){
              errorMessage = `Error: ${res.statusText}`;
              const response = this.auth.refreshToken().pipe(
                switchMap(x => {
                  const clone = req.clone({
                    headers: req.headers.set('x-auth-token', x.accessToken)
                  });
                  return next.handle(clone);
                })
              );
              return response;
            }

            if (res.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${res}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${res.status}\nMessage: ${res.message}`;
              // this.router.navigate(['login']);
            }
            console.log(errorMessage);
            window.alert(errorMessage);
            return throwError(res);
          })
        );
    }
}
