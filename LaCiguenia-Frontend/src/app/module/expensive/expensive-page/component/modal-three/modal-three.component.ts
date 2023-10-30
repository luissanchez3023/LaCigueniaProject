import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { DeleteExpensiveUseCase } from '@repository/expensive/case/DeleteExpensiveUseCase';
import { TITLE } from '../modal-two/constants/modal-two';
import { DONE, FAIL, TITLE_DELETE } from './constants/modal-three';


@Component({
  selector: 'app-modal-three',
  templateUrl: './modal-three.component.html',
  styleUrls: ['./modal-three.component.scss']
})
export class ModalThreeComponent {
  @Output() modalActivateThree = new EventEmitter<boolean>();
  @Input() expensiveId!: number;

  textTitleDelete = TITLE_DELETE;
  textDone = DONE;
  textFail = FAIL;

  constructor(private deleteExpensiveUseCase: DeleteExpensiveUseCase){}

  modalEvent() {
    this.modalActivateThree.emit(false);
  }

  deleteExpensive() {
    this.deleteExpensiveUseCase.execute(this.expensiveId).subscribe(
      (res: GenericResponse) => {
        console.log("Gasto Eliminado Correctamente " + res.message)
      },
      (error) => {
        console.log("Error: " + error)
      }
    )
    this.modalActivateThree.emit(false);
  }
}

