import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddproductComponent } from '../dialog/addproduct/addproduct.component';
import { AdminloginService } from '../service/adminlogin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog,private AdminloginService:AdminloginService) {}
  productList:any;
  ngOnInit() {
    this.AdminloginService.getProductList().subscribe((res:any)=>{
      this.productList=res.data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddproductComponent);
    dialogRef.afterClosed().subscribe((result) => {
       this.AdminloginService.addProduct(result).subscribe((data:any)=>{
        console.log(data);
       })
    });
  }
}
