import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TimkiemTtComponent } from './timkiem-tt.component';
import { HttpClient } from '@angular/common/http';

const routes:Routes=[
  {
    path:'',
    component:TimkiemTtComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TimkiemTtModule { }
