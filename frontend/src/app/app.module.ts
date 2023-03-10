import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BooktableComponent } from './booktable/booktable.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminloginService } from './adminlogin/service/adminlogin.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './adminlogin/dashboard/dashboard.component';
import { AdminloginGuard } from './adminlogin/service/adminlogin.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { AddproductComponent } from './adminlogin/dialog/addproduct/addproduct.component';
import { AuthInterceptor } from './intercepter/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
      AdminloginComponent,
      PagenotfoundComponent,
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      MenuComponent,
      AboutComponent,
      BooktableComponent,
      DashboardComponent,
      AddproductComponent
   ],
  imports: [
    MaterialExampleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [AdminloginService,AdminloginGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
