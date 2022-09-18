import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpDetailsService {

  constructor(private http:HttpClient) { }
  newDetails(details:any){
    return this.http.post("http://localhost:3000/insert",{employee:details})
    .subscribe(data=>{console.log(data);})
  }
}

