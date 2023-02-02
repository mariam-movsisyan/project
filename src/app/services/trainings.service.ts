import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TrainingsService {

    projects: any;
    headers: any
    constructor(private http: HttpClient) {
        this.headers = this.getHeader();
    }
    addTraining(project: any) {
        return this.http.post<any>('https://api.dev.padcllc.com/trainings', project, { headers: this.headers });
    }
    getAllTraining() {
        return this.http.get<any>('https://api.dev.padcllc.com/trainings');
    }
    getHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        });
    }
    delete(id: number) {
        return this.http.delete<any>(`https://api.dev.padcllc.com/trainings/${id}`, { headers: this.headers });
    }
    getTriningById(id: number) {
        return this.http.get<any>(`https://api.dev.padcllc.com/trainings/${id}`, { headers: this.headers });
    }
    updateTrinings(id: number, project: any) {
        return this.http.put<any>(`https://api.dev.padcllc.com/trainings/${id}`, project, { headers: this.headers });
    }

}
