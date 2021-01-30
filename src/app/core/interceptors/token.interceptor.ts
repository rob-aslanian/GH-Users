import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig, API_CONFIG } from '../injectors/api.injector';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(@Inject(API_CONFIG) private readonly apiConfig: ApiConfig) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let cloneReq = request.clone({
      setHeaders: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (this.apiConfig.token) {
      cloneReq = cloneReq.clone({
        setHeaders: {
          Authorization: `token ${this.apiConfig.token}`,
        },
      });
    }

    console.log(cloneReq.headers);

    return next.handle(cloneReq);
  }
}
