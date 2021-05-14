import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FoldersComponent } from './folders/folders.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: '', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'folder/:id', component: FoldersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
