import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SectionOneComponent } from './products-page/component/section-one/section-one.component';
import { SectionTwoComponent } from './products-page/component/section-two/section-two.component';
import { ComponentModule } from '@src/app/component/component.module';


@NgModule({
  declarations: [
    ProductsPageComponent,
    SectionOneComponent,
    SectionTwoComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentModule
  ]
})
export class ProductsModule { }