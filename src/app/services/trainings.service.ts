import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, pipe, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TrainingsService {

    trainings: Subject<any> = new Subject;
    constructor(private http: HttpClient) {
    }
    addTraining(project: any) {
        return this.http.post<any>('/trainings', project);
    }
    getAllTraining() {
        return this.http.get<any>('/trainings')
        .pipe(map(({ data }) => {
            console.log(data, 'data');
           return this.trainings.next(data)
        }));
    }

    getTriningById(id: number) {
        return this.http.get<any>(`/trainings/${id}`);
    }
    updateTrinings(id: number, training: any) {
        return this.http.put<any>(`/trainings/${id}`, training);
    }

    createData(form: FormGroup) {
        console.log(form.value);
        
        let formData = new FormData();
        formData.set('name', form.value.name);
        formData.set('description', form.value.description);
        formData.set('image', form.get('image')?.value);
        formData.set('date', form.value.date);
        formData.set('type', form.value.type);
        return formData
    }

}
