import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClosingHistoryModel } from '@commons/domains/closinghistory/ClosingHistoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadClosesUseCase } from '@repository/closinghistory/case/ReadClosesUseCase';
import { DATE, NAME_STORAGE, NUMBER, OPTION, TITLE, TOTAL_VALUE } from './constants/section-one';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {
  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Output() sendClosingHistoryModel = new EventEmitter<number>();
  @Input() activeMessage!: boolean;
  @Input() closingId!: number;

  textTitle = TITLE;
  textNumber = NUMBER;
  textDate = DATE;
  textNameStorage = NAME_STORAGE;
  textTotalClosing = TOTAL_VALUE
  textOption = OPTION;

  closes!: ClosingHistoryModel;
  cashClosingHistoryModel: ClosingHistoryModel [] = [];
  message: boolean = true;

  constructor(private readClosesUseCase: ReadClosesUseCase){}

  ngOnInit(): void {
    this.getCloses();
  }

  getCloses() {
    this.readClosesUseCase.execute().subscribe(
      (res: GenericResponse) => {
        if (res.message !== "Operación fallida") {
          this.message = false;
        }
        
        
        this.cashClosingHistoryModel = [];
  
        
        for (let resItem of res.objectResponse) {
          this.closes = resItem;
          this.cashClosingHistoryModel.push(this.closes);
        }
      }
    );
  }
  modalEvent(index: number){
    this.sendClosingHistoryModel.emit(index + 1)
    this.modalActivateOne.emit(true);
  }
}
