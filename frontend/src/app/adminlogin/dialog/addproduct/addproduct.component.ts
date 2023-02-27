import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productForm: any;
  constructor(  private fb: FormBuilder, public dialogRef: MatDialogRef<AddproductComponent>) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      desc: ['', Validators.required],
      price: ['', Validators.required]
    }
    );
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }

}
