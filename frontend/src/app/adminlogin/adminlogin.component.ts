import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminloginService } from './service/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private adminLoginService:AdminloginService,private router:Router) { }
  loginObj:any={
    mobileNumber:'',
    password:''
  }

  ngOnInit() {
  }
  login(){
    this.adminLoginService.login(this.loginObj).subscribe((data:any)=>{
      console.log("login with login",data);
      this.router.navigate(['/dashboard']);

    },(err:any)=>{
     console.log("login Err",err);
    })
  }
}
