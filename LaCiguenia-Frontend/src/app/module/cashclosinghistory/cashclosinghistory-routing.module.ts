import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashclosinghistoryPageComponent } from './cashclosinghistory-page/cashclosinghistory-page.component';

const routes: Routes = [
{path:'', component: CashclosinghistoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashclosinghistoryRoutingModule { }
