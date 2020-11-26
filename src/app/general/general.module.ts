
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NvabarComponent } from './nvabar/nvabar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports:[

  ]
})
export class GeneralModule { }
