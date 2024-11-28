import { Component } from '@angular/core';
import { FormGroup  , FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'addDeleteProject';
  form:FormGroup
  data: any[] = [];

  constructor(private fb:FormBuilder){}

  submit(){
    console.log(this.form.value);
    if(this.form.valid){
      this.data.push(this.form.value);
      console.log(this.data);
    }
  }

  ngOnInit(){
    this.formsection();
  }
  formsection(){
    this.form = this.fb.group({
    name:['',Validators.required],
    number:['',Validators.required],
    email:['',Validators.required],
    hobbies:['',Validators.required],
    description:['',Validators.required]
    })
  }
}
