import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiserveService } from './apiserve.service';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./main/main.module').then((m)=>m.MainModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    ApiserveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
