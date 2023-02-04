import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";

export const IS_AUTH_NEEDED = new HttpContextToken<boolean>(() => true);

@Injectable({
    providedIn: 'root'
})
export class MainInterceptor implements HttpInterceptor {
    private readonly baseURL = 'https://api.dev.padcllc.com';

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = req.headers;
        if (req.context.get(IS_AUTH_NEEDED) === true) {
            headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
        }
        const clonedReq = req.clone({
            url: `${this.baseURL}${req.url}`,
            headers: headers
        });

        return next.handle(clonedReq)
            .pipe(
                map((res) => {
                    const { body } = res as HttpResponse<any>;
                    if (body?.success === false) {
                        throw body;
                    }
                    return res;
                }),
                catchError((err) => {
                    console.log('err', err);
                    throw err;
                })
            )

    }
}