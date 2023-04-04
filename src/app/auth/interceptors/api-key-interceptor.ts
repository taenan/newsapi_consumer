import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const apiKey = environment.API_KEY
    const modifiedRequest = request.clone({
      params: request.params.set('apiKey', apiKey)
    });

    return next.handle(modifiedRequest);
  }
}
