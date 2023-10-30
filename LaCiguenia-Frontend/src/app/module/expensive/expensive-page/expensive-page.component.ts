import { Component } from '@angular/core';

@Component({
  selector: 'app-expensive-page',
  templateUrl: './expensive-page.component.html',
  styleUrls: ['./expensive-page.component.scss']
})
export class ExpensivePageComponent {
  modal!: boolean;
  modalTwo!: boolean;
  modalThree!: boolean;

  modalActivate(datos: boolean){
    this.modal = datos;
    if(datos === false){
      window.location.reload();
    }
    
  }

  modalActivateOne(datos: boolean) {
    this.modalTwo = datos;
  }

  modalActivateThree(datos: boolean) {
    this.modalThree = datos;
    if(datos === false){
      window.location.reload();
    }
}
}
