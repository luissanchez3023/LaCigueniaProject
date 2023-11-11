import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { SupplierPageComponent } from './supplier-page/supplier-page.component';
import { SectionOneComponent } from './supplier-page/component/section-one/section-one.component';
import { SectionTwoComponent } from './supplier-page/component/section-two/section-two.component';
import { ModalOneComponent } from './supplier-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './supplier-page/component/modal-two/modal-two.component';
import { ModalThreeComponent } from './supplier-page/component/modal-three/modal-three.component';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SuppliersModule } from '@service/supplier/suppliers.module';



@NgModule({
  declarations: [
    SupplierPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent,
    ModalTwoComponent,
    ModalThreeComponent

  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentModule,
    SuppliersModule
  ]
})
export class SupplierModule { }