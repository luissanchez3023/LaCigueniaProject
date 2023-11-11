import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DONE, TITTLE } from './constants/modal-one';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent {

  @Input() modalOne!: boolean;
  @Output() modalActivate = new EventEmitter<boolean>();

  textTitle = TITTLE;
  textDone = DONE;

  modalEvent() {
    this.modalActivate.emit(false);
  }

}