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
    const cloneReq = request.clone({
      setHeaders: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `token ${this.apiConfig.token}`,
      },
    });

    return next.handle(cloneReq);
  }
}
