import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuth: boolean = false;

    edit() {
        this.isAuth = true
    }
    save() {
        this.isAuth = false
    }

    isEdit(){
        if(this.isAuth){
            return true
        }else{
            return false
        }
    }
}