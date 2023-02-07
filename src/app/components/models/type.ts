// export enum Type {
//     free,
//     paid
// }
// export type training = {
//     name: string,
//     description: string,
//     mediaFiles: any,
//     date: Date,
//     type: 
// }
  // file: any
  // getFile(event: any) {
  //   this.file = event.target.files[0]
  //   console.log(this.file);
    
  // }
  // save() {
  //   let formData = new FormData();
  //   formData.set('name', this.form.value.name);
  //   formData.set('description', this.form.value.description);
  //   formData.set('mediaFiles', '/uploads' + this.file);
  //   formData.set('date', this.form.value.date);
  //   formData.set('type', this.form.value.type);
  //   // this.http.post('https://api.dev.padcllc.com/', formData).subscribe(
  //   //   (response) => { }
  //   // )
  //   this.trainingsService.addTraining(formData).subscribe(
  //     (response) => {
  //       console.log(response, 'resp');

  //     }
  //   )
  //   // console.log('aaa');
  //   // console.log(this.form.value);
  //   // if (this.form.valid) {
  //   //   const model = new Files(this.form.value)
  //   //   console.log(model);
  //   //   const user = this.trainingsService.addTraining(model);
  //   //   user.subscribe((data) => {
  //   //     // console.log(data);
  //   //     this.router.navigate(['main-layout/trainings'])
  //   //   },
  //   //     (error) => {
  //   //       console.log(error.error.message);
  //   //     })
  //   // }
  // }