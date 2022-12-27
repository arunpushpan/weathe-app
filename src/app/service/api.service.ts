import { Injectable } from '@angular/core';
import {HttpClient}  from  '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // place:string='kakkanad'
  //  baseUrl:string=`https://api.openweathermap.org/data/2.5/weather?q=${this.place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`
  constructor(private http: HttpClient) { }


  viewDetails(place:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
  
   
}
}
