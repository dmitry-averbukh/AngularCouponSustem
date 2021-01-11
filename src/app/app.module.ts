import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './main-template/header/header.component';
import {FooterComponent} from './main-template/footer/footer.component';
import {LoginComponent} from './main-template/login/login.component';
import {MaitTemplateComponent} from './main-template/mait-template.component';
import {CustomerComponent} from './main-template/customer/customer.component';
import { CompanyComponent } from './main-template/company/company.component';
import { AdminComponent } from './main-template/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MaitTemplateComponent,
    CustomerComponent,
    CompanyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
