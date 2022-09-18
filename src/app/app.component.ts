import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {EmpDetailsService } from "./emp-details.service";
import { EmployeeModel } from "./employee.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(private empDetailsService:EmpDetailsService, private router: Router) { }
  empDetails= {
      name :'',
      position:'',
      officeLocation:'',
      salary:'',
     }
   
  
  
    employee: EmployeeModel[] =[]; 
  
    AddDetails(){
      this.empDetailsService.newDetails(this.empDetails);
      console.log("Called");
      alert("New Employee added sucessfully");
      // this.router.navigate(['/']);
      
    }



}
