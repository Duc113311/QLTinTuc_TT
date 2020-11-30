import { Component, OnInit } from '@angular/core';
import { ApiserveService } from 'src/app/apiserve.service';
import { category } from 'src/app/model/tintuc';

@Component({
  selector: 'app-timkiem-tt',
  templateUrl: './timkiem-tt.component.html',
  styleUrls: ['./timkiem-tt.component.css']
})
export class TimkiemTtComponent implements OnInit {

  constructor(private appservice:ApiserveService) { }
  public categorys:category[];


  ngOnInit(): void {
    this.appservice.getCategory_TT().subscribe(data=>this.categorys= data);
  }



}
