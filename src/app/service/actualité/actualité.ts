import { Injectable } from '@angular/core';
import { environement } from '../../environnement/environnement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Actualité {
  constructor(private http:HttpClient){}
    apiUrl = environement.apiurl
   

    getallact(){
      return this.http.get(this.apiUrl + "activite/allactivite")
    }
  
}
