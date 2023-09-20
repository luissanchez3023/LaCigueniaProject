import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { TITLE, DONE, FAIL } from '@module/products/products-page/component/modal-two/constans/modal-two';
import { InvoiceDeleteUseCase } from '@repository/invoice/case/InvoiceDeleteUseCase';


@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() productId!: number;
  @Input() inventoryModel!: InventoryModel;

  textTitle = TITLE;
  textFail = FAIL;
  textDone = DONE;
  
 
  constructor(private InvoiceDeleteUseCase: InvoiceDeleteUseCase){}

  modalEvent() {
    this.modalActivateTwo.emit(false);
  }

  deleteProduct() {
    this.InvoiceDeleteUseCase.execute(this.inventoryModel.inventoryId).subscribe(
      (res: GenericResponse) => {
        console.log("Producto Eliminado Correctamente " + res.message)
      },
      (error) => {
        console.log("Error: " + error)
      }
    )
    this.modalActivateTwo.emit(false);
  }

} 
