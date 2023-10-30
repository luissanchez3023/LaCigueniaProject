import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TITLE, DONE } from '@module/register/register-page/component/modal-one/constans/modal-one';
import { TITTLE } from './constants/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {
  @Input() modal!: boolean;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITTLE;
  textDone = DONE;

  modalEvent() {
    this.modalActivate.emit(false);
  }

}
