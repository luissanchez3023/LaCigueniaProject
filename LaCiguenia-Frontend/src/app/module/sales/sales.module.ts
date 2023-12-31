import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from '@module/sales/sales-routing.module';
import { SalesPageComponent } from '@module/sales/sales-page/sales-page.component';
import { SectionOneComponent } from '@module/sales/sales-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/sales/sales-page/component/section-two/section-two.component';
import { ComponentModule } from '@component/component.module';
import { InvoiceModule } from '@service/invoice/invoice.module';
import { ModalOneComponent } from '@module/sales/sales-page/component/modal-one/modal-one.component';
import { DetailModule } from '@service/detail/detail.module';
import { ModalTwoComponent } from '@module/sales/sales-page/component/modal-two/modal-two.component';
import { ExpensesModule } from '@service/expense/expenses.module';

@NgModule({
  declarations: [
    SalesPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent,
    ModalTwoComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ComponentModule,
    InvoiceModule,
    DetailModule,
    ExpensesModule
  ]
})
export class SalesModule { }
