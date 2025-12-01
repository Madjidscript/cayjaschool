import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environnement/environnement';


@Injectable({
  providedIn: 'root'
})
export class Doc {
  apiUrl = environement.apiurl
  constructor(private http:HttpClient){}

  getalldoc(){
    return this.http.get(this.apiUrl + "document/getalldoc")
  }
  
}
