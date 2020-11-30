import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenutopComponent } from './menutop/menutop.component';
import { MenuleftComponent } from './menuleft/menuleft.component';
import { FooterComponent } from './footer/footer.component';

import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NewdanhmucComponent } from './newdanhmuc/newdanhmuc.component';
import { TimkiemTtComponent } from './timkiem-tt/timkiem-tt.component';
import { HttpClientModule } from '@angular/common/http';



const mainRouter: Routes=[
  {
    path:'', component:MainComponent,
    children: [

      {
        path:'',
        loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
      },
      {
        path:'create',
        loadChildren:()=>import('./create/create.module').then((m)=>m.CreateModule),
      },
      {
        path:'edit',
        loadChildren:()=>import('./edit/edit.module').then((m)=>m.EditModule),
      },
      {
        path:'newdanhmuc',
        loadChildren:()=>import('./newdanhmuc/newdanhmuc.module').then((m)=>m.NewdanhmucModule),
      },
      {
        path:'timkiem-tt',
        loadChildren:()=>import('./timkiem-tt/timkiem-tt.module').then((m)=>m.TimkiemTtModule),
      },
    ]

  },


];
@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    MenutopComponent,
    MenuleftComponent,
    CreateComponent,
    EditComponent,
    NewdanhmucComponent,
    TimkiemTtComponent,


],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(mainRouter)
  ],

})
export class MainModule { }
