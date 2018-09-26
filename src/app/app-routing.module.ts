import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ScopeComponent } from './scope/scope.component';
import { HoistingComponent } from './hoisting/hoisting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/scope',
    pathMatch: 'full'
  },
  {
    path: 'scope',
    component: ScopeComponent
  },
  {
    path: 'hoisting',
    component: HoistingComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
