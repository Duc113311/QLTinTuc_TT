import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from './model/tintuc';

@Injectable({
  providedIn: 'root'
})
export class ApiserveService {

  readonly URLAPI="https://localhost:44315/api/Category/list_category";
  readonly URLPost="https://localhost:44315/api/Posts/add_posts";
  constructor(private http:HttpClient) { }

  getCategory_TT():Observable<category[]>
  {
    return this.http.get<category[]>(this.URLAPI);
  }







}
