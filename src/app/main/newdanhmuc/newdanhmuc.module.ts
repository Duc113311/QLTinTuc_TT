import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewdanhmucComponent } from './newdanhmuc.component';


const routes:Routes=[
  {
    path:'',
    component:NewdanhmucComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class NewdanhmucModule { }
