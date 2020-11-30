import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {MustMatch} from "src/app/help/must-match.validator"
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  ImageUrl:string="/assets/default_img.png";
  fileToUpload: File=null;

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
        title: ['', Validators.required],
        tieude: ['', Validators.required],
        menu: ['', Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ])],
        page: ['', Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ])],
        sidebar: ['', Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ])],
        footer: ['',Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ])],
        Image:[''],
    });
  }
  get f(){return this.registerForm.controls;}
  onSubmit()
  {
    debugger
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.registerForm.value);

    // // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
    onReset() {
      this.submitted = false;
      this.registerForm.reset();
    }
    InputFile(file:FileList)
    {
      this.fileToUpload=file.item(0);

      //show image
      var render=new FileReader();
      render.onload=(even:any)=>{
        this.ImageUrl=even.target.result;
      }
      render.readAsDataURL(this.fileToUpload);

    }







}
