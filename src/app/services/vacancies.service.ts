import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VacanciesService {
    private headers: any
    constructor(private http: HttpClient) { 
        this.headers = this.getHeader()
        // console.log(this.headers);
    }

    public getAllVacancies() {
        return this.http.get<any>('https://api.dev.padcllc.com/vacancies');
    }
    getHeader() {
        return new HttpHeaders({
            'Content1': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        });
    }
    public delete(id: number) {
        return this.http.delete<any>(`https://api.dev.padcllc.com/vacancies/${id}`, { headers: this.headers })
    }
    public addVacancy(vacancy: any){
        return this.http.post<any>('https://api.dev.padcllc.com/vacancies', vacancy, { headers: this.headers })
    }
    public getVacanciesById(id: number) {
        return this.http.get<any>(`https://api.dev.padcllc.com/vacancies/${id}`, { headers: this.headers });
    }
    public updateVacancy(id: number, project: any) {
        return this.http.put<any>(`https://api.dev.padcllc.com/vacancies/${id}`, project, { headers: this.headers });
    }


}
