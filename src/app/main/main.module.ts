import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiderbarComponent } from '../general/siderbar/siderbar.component';
import { NvabarComponent } from '../general/nvabar/nvabar.component';
import { FooterComponent } from '../general/footer/footer.component';



import { GeneralModule } from '../general/general.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';




const mainRouter: Routes=[
  {
    path:'', component:MainComponent,
    children: [

      {
        path:'',component:DashboardComponent
      },
      {
        path:'create',component:CreateComponent
      },
      {
        path:'edit',
        component: EditComponent
      },

    ]

  },


];
@NgModule({
  declarations: [
    MainComponent,
    SiderbarComponent,
    NvabarComponent,
    FooterComponent,
    CreateComponent,
    EditComponent,


],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(mainRouter)
  ],
  exports: [RouterModule]
})
export class MainModule { }
