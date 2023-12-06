import { Component } from '@angular/core';

@Component({
  selector: 'app-cashclosinghistory-page',
  templateUrl: './cashclosinghistory-page.component.html',
  styleUrls: ['./cashclosinghistory-page.component.scss']
})
export class CashclosinghistoryPageComponent {
  modalOne!: boolean;
  activeMessage: boolean = false;

  modalActivateOne(datos: boolean){
    this.modalOne = datos;
  }
}
