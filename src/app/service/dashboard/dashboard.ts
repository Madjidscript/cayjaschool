import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environnement/environnement';


@Injectable({
  providedIn: 'root'
})
export class Dashboard {
  apiUrl = environement.apiurl
  constructor(private http:HttpClient){}

  getalltotaux(){
    return this.http.get(this.apiUrl + "totaux/gettotaux")
  }
  
}
