import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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
