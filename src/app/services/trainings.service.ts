import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TrainingsService {

    projects: any;
    constructor(private http: HttpClient) {
    }
    addTraining(project: any) {
        return this.http.post<any>('/trainings', project);
    }
    getAllTraining() {
        return this.http.get<any>('/trainings');
    }
    delete(id: number) {
        return this.http.delete<any>(`/trainings/${id}`);
    }
    getTriningById(id: number) {
        return this.http.get<any>(`/trainings/${id}`);
    }
    updateTrinings(id: number, project: any) {
        return this.http.put<any>(`/trainings/${id}`, project);
    }

}
