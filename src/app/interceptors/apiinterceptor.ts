import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + '512634623+46asd46f+5a6df+92a+w6e4f+64'),
    });
    return handler.handle(reqWithHeader);
  }
}
