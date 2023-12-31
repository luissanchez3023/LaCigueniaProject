import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningPageComponent } from '@module/opening/opening-page/opening-page.component';
import { OpeningValidateTokenService } from '@service/opening/implement/OpeningValidateTokenService';

const routes: Routes = [
  {path:'', component: OpeningPageComponent},
  {path:'invoicing-page-principal', canActivate: [OpeningValidateTokenService], loadChildren: () => import('@module/invoicing/invoicing.module').then(m => m.InvoicingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpeningRoutingModule { }
