import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

constructor(private auth: AuthService,
            private router: Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.auth.currentUser?.accessToken;
        const isRefresh = this.auth.isRefresh;
        const currentTime = new Date().getTime() / 1000;

        if (!isRefresh && accessToken){

            if (currentTime > this.auth.currentUser.data?.exp) {
                // return this.auth.refreshToken().pipe(
                //     switchMap((res) => {
                //         const clone = req.clone({
                //             headers: req.headers.set('x-auth-token', res.accessToken)
                //         });
                //         return next.handle(clone);
                //     })
                // );
            } else {
                const clone = req.clone({
                    headers: req.headers.set('x-auth-token', accessToken)
                });
                return next.handle(clone);
            }

        }

        return next.handle(req);
    }

}
