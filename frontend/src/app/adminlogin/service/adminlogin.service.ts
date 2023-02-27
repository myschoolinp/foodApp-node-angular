import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

constructor(private http:HttpClient) { }

login(loginData:any){
return this.http.post('http://localhost:3000/login/user',loginData);
}

addProduct(data:any){
  return this.http.post('http://localhost:3000/login/addproduct',data);
}

}
