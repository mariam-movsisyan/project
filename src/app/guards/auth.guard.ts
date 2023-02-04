import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { catchError, map, Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
        private userService: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // const user = localStorage.getItem('accessToken');
        return this.userService.getUser().pipe(map((user) => {
            if (user) {
                return true;
            } else {
                catchError(() => {
                    throw false
                })
                return false
            }
        }))
    }
}