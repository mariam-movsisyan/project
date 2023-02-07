export interface mediaFiles {
    name: string
    description: string;
    date: Date
    file: any
    type: string
}
export class Files implements mediaFiles{
    name: string;
    description: string;
    date: Date;
    file: any;
    type: string;
  
    constructor(form: mediaFiles){
        this.name = form.name
        this.description = form.description
        this.file = form.file
        this.date = form.date
        this.type = form.type
    }
}