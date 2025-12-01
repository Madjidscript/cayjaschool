import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environnement/environnement';

@Injectable({
  providedIn: 'root'
})
export class Proffeseuservice {
  getalltotaux() {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient){

  }
  apiUrl = environement.apiurl


  allprofesseur(){
    return this.http.get(this.apiUrl+"professeur/allprofesseur")
  }
}
