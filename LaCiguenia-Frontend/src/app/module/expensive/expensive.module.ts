import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensiveRoutingModule } from '@module/expensive/expensive-routing.module';
import { ExpensivePageComponent } from '@module/expensive/expensive-page/expensive-page.component';
import { SectionOneComponent } from '@module/expensive/expensive-page/component/section-one/section-one.component';
import { SectionTwoComponent } from '@module/expensive/expensive-page/component/section-two/section-two.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from '@component/component.module';
import { OpenModule } from '@service/opening/opening.module';
import { ExpensivesModule } from '@service/expensive/expensive.module';
import { ModalOneComponent } from './expensive-page/component/modal-one/modal-one.component';
import { ModalTwoComponent } from './expensive-page/component/modal-two/modal-two.component';
import { ModalThreeComponent } from './expensive-page/component/modal-three/modal-three.component';



@NgModule({
  declarations: [
    ExpensivePageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    ModalOneComponent,
    ModalTwoComponent,
    ModalThreeComponent,
    
  ],
  imports: [
    CommonModule,
    ExpensiveRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentModule,
    OpenModule,
    ExpensivesModule
  ]
})
export class ExpensiveModule { }