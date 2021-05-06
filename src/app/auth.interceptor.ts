import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
constructor(private auth: AuthService,
            private router: Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.auth.currentUser?.accessToken;

        if (authToken){
            const authReq = req.clone({
                headers: req.headers.set('x-auth-token', authToken)
            });

            return next.handle(authReq);
        }
        return next.handle(req);
    }

}
