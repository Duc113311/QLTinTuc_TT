
import { Component, OnInit } from '@angular/core';
import { ApiserveService } from 'src/app/apiserve.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // this.appservice.getCategory().subscribe(data => this.danhmucs = data);
  }

}

