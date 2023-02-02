export interface mediaFiles {
    name: string
    description: string;
    date: Date
    file: string
    type: string
}
export class Files implements mediaFiles{
    name: string;
    description: string;
    date: Date;
    file: string;
    type: string;
  
    constructor(form: mediaFiles){
        this.name = form.name
        this.description = form.description
        this.date = form.date
        this.file = form.file
        this.type = form.type
    }
}