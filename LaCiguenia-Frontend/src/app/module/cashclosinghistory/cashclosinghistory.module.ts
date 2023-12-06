import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashclosinghistoryRoutingModule } from './cashclosinghistory-routing.module';
import { CashclosinghistoryPageComponent } from './cashclosinghistory-page/cashclosinghistory-page.component';
import { SectionOneComponent } from './cashclosinghistory-page/section-one/section-one.component';
import { ModalOneComponent } from './cashclosinghistory-page/modal-one/modal-one.component';
import { ComponentModule } from '@component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CloseModuleModule } from '@service/closinghistory/close-module.module';



@NgModule({
  declarations: [
    CashclosinghistoryPageComponent,
    SectionOneComponent,
    ModalOneComponent
  ],
  imports: [
    CommonModule,
    CashclosinghistoryRoutingModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CloseModuleModule
  ]
})
export class CashclosinghistoryModule { }
