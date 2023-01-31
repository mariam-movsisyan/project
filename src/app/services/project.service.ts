import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    projects: any;
    headers: any
    constructor(private http: HttpClient) {
        this.headers = this.getHeader();
        // console.log(this.headers);
    }
    addProject(project: any) {
        return this.http.post<any>('https://api.dev.padcllc.com/projects', project, { headers: this.headers });
    }
    getAllProjects() {
        return this.http.get<any>('https://api.dev.padcllc.com/projects/all');
    }
    getHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        });
    }
    delete(id: number) {
        return this.http.delete<any>(`https://api.dev.padcllc.com/projects/${id}`, { headers: this.headers });
    }
    getProjectById(id: number) {
        return this.http.get<any>(`https://api.dev.padcllc.com/projects/${id}`, { headers: this.headers });
    }
    updateProject(id: number, project: any) {
        return this.http.put<any>(`https://api.dev.padcllc.com/projects/${id}`, project, { headers: this.headers });
    }

}
