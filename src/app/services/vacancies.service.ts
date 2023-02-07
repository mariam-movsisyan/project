import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VacanciesService {
    constructor(private http: HttpClient) {
    }

    public getAllVacancies() {
        return this.http.get<any>('/vacancies');
    }

    public delete(id: number) {
        return this.http.delete<any>(`/vacancies/${id}`)
    }
    public addVacancy(vacancy: any) {
        return this.http.post<any>('/vacancies', vacancy)
    }
    public getVacanciesById(id: number) {
        return this.http.get<any>(`/vacancies/${id}`);
    }
    public updateVacancy(id: number, project: any) {
        return this.http.put<any>(`/vacancies/${id}`, project);
    }


}
