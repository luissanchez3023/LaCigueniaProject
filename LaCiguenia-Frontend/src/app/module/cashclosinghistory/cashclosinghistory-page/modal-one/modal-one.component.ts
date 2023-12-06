import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClosingHistoryModel } from '@commons/domains/closinghistory/ClosingHistoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { AMOUNT, CLOSING_BOX, DATE, DONE, METHOD_PAY, METHOD_PAY_SECOND, NUMBER, PLACE_SUPPLIER, STORAGE_NAME, TITLE, TOTAL, TOTAL_OPENING, TOTAL_SALES, VALUE } from './constants/modal-one';
import { CashClosureModel } from '@commons/domains/cashclosure/CashClosureModel';
import { ReadOneCloseUseCase } from '@repository/closinghistory/case/ReadOneCloseUseCase';
import { MethodPaymentSales } from '@commons/domains/payment/MethodPaymentSales';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Input() cashClosingId!: number;

  textTitle = TITLE;
  textNumber = NUMBER;
  textDate = DATE;
  textStorageName = STORAGE_NAME;
  textAmount = AMOUNT;
  textMethodPay = METHOD_PAY;
  textValue = VALUE;
  textPlaceSupplier = PLACE_SUPPLIER;
  textMethodPaySecond = METHOD_PAY_SECOND;
  textTotal = TOTAL;
  textTotalOpening = TOTAL_OPENING;
  textTotalSales = TOTAL_SALES;
  textClosingBox = CLOSING_BOX;
  textDone = DONE;

  detailClosingHistory: ClosingHistoryModel [] = [];
  cashClosure: CashClosureModel [] = [];
  methodPaymentSales: MethodPaymentSales [] = [];

  constructor(private readOneCloseUseCase: ReadOneCloseUseCase){}

  ngOnInit(): void {
    this.closeRead();
  }

  closeRead(){
    this.readOneCloseUseCase.execute(this.cashClosingId).subscribe(
      (res: GenericResponse) => {
        for (let cashClosingHistoryItem of res.objectResponse){
          this.detailClosingHistory.push(cashClosingHistoryItem);
        }
      }
    )
  }

  modalEvent(){
    this.modalActivateOne.emit(false);
  }
}
