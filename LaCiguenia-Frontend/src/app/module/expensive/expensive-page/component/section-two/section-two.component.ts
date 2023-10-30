import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DATE, INVOICE, OPTION, PLACE, TITTLE, VALUE } from './constants/section-two';
import { ExpensiveModel } from '@commons/domains/expensive/ExpensiveModel';
import { ReadLastExpensiveUseCase } from '@repository/expensive/case/ReadLastExpensiveForDayUseCase';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() modalActivateThree = new EventEmitter<boolean>();

  textTitle = TITTLE;
  textInvoice = INVOICE;
  textDate = DATE;
  textPlace = PLACE;
  textValue = VALUE;
  textOption = OPTION;

  currentDate!: string;
  expensiveModel!: ExpensiveModel[];

  constructor( ){ 
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.currentDate = year + '-' + month + '-' + day;}

  modalEdit(_index: number) {
    this.modalActivateTwo.emit(true);
    console.log("Prueba editar");
  }

  modalDelete(_index: number) {
    this.modalActivateThree.emit(true);
    console.log("Prueba eliminar");
  }
}
