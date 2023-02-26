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
import { FormsModule } from '@angular/forms';
import { AdminloginService } from './adminlogin/service/adminlogin.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './adminlogin/dashboard/dashboard.component';
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
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AdminloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
