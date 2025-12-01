import { Injectable } from '@angular/core';
import { environement } from '../../environnement/environnement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Classeservice {
  constructor(private http:HttpClient){}
  apiUrl = environement.apiurl

  getallclasse(){
     return this.http.get(this.apiUrl + 'classe/allclasse')
  }
  
}
