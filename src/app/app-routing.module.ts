import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component'; 
import { AuthGaurdService } from './services/auth-guard.service';
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent,canActivate:[AuthGaurdService as any]},
  { path: "addProvider", component: AddProviderComponent,canActivate:[AuthGaurdService as any] },
  { path: "updateProvider/:id", component: UpdateProviderComponent ,canActivate:[AuthGaurdService as any] },
  { path: 'login', component: LoginComponent },
 { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService as any] },
//  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
