import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtTokenInterceptor } from './interceptor/jwt-token.interceptor';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FoldersComponent } from './folders/folders.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsComponent,
    ProductComponent,
    NavComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
