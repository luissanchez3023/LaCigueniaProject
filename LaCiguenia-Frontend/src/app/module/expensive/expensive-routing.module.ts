import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensivePageComponent } from '@module/expensive/expensive-page/expensive-page.component';

const routes: Routes = [
  {path:'', component: ExpensivePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensiveRoutingModule { }
