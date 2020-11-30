import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newdanhmuc',
  templateUrl: './newdanhmuc.component.html',
  styleUrls: ['./newdanhmuc.component.css']
})
export class NewdanhmucComponent implements OnInit {


  ImageUrl:string="/assets/default_img.png";
  fileToUpload: File=null;

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
        title: ['', Validators.required],
        tieude: ['', Validators.required],
        mota: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(10),
        ])],
        key: ['', Validators.required],
        description: ['', Validators.required],
        date: ['', Validators.required,],
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
