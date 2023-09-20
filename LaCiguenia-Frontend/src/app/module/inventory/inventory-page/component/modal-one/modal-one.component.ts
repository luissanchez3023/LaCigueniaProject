import { Component, Input, EventEmitter, Output, OnInit, NgModule } from '@angular/core';
import { AMOUNT, DATE, EDIT, FAIL, NAME_PRODUCT, TITLE } from './constants/modal-one';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendOpeningService } from '@service/opening/implement/SendOpeningService';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '@commons/domains/product/ProductModel';
import { InventoryModel } from '@commons/domains/inventory/InventoryModel';
import { UpdateInventoryUseCase } from '@repository/inventory/case/UpdateInventoryUseCase';
import { GenericResponse } from '@commons/response/GenericResponse';
import { InvoiceModel } from '@commons/domains/invoice/InvoiceModel';
import { InvoiceUpdateUseCase } from '@repository/invoice/case/InvoiceUpdateUseCase';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss']
})
export class ModalOneComponent implements OnInit {

  @Output() modalActivateOne = new EventEmitter<boolean>();
  @Input() inventoryModel!: InventoryModel;
  @Input() invoiceModel!: InvoiceModel;
  


  textTitle = TITLE;
  textDate = DATE;
  textNameProduct = NAME_PRODUCT;
  textAmount = AMOUNT;
  textFail = FAIL;
  textEdit = EDIT;


  inventoryForm!: FormGroup;
  currentDate: string;
  productModel!: ProductModel;
  
 


    constructor(private InvoiceUpdateUseCase: InvoiceUpdateUseCase, private updateInventoryUseCase: UpdateInventoryUseCase, public formulary: FormBuilder, sendOpeningService: SendOpeningService, private fb: FormBuilder){
      this.inventoryForm = formulary.group({
        nameProduct: ['', [Validators.required]],
        amountProduct: ['', [Validators.required]],
        currentDate: ['', [Validators.required]],
       
      });       
      const today = new Date();
      this.currentDate = today.toISOString().slice(0, 10);
    }

    ngOnInit(): void {

      console.log("Prueba Datos: " + this.inventoryModel.productEntity.productName);
      const dateInput = document.getElementById("dateInput") as HTMLInputElement;
      dateInput.value = this.currentDate;
    
        this.inventoryForm = this.fb.group({
        nameProduct: ['', Validators.required],
        amountProduct: [0, Validators.min(0)],
      });
    }

  modalEvent() {
    this.modalActivateOne.emit(false);
  }

 
  updateInventory(){
    this.inventoryModel = {
      inventoryId: this.inventoryModel.productEntity.productId,
      productEntity: this.inventoryForm.controls['nameProduct'].value != ''
        ? this.inventoryForm.controls['nameProduct'].value
        : this.inventoryModel.productEntity.productName,
      inventoryAmount: this.inventoryForm.controls['amountProduct'].value != ''
        ? this.inventoryForm.controls['amountProduct'].value
        : this.inventoryModel.inventoryAmount,
         inventoryEntryDate: this.currentDate,  
    }


    this.InvoiceUpdateUseCase.execute(this.invoiceModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.modalEvent();
          if(res.statusCode == 200){
            window.location.reload();
          }
        } else {
          alert("Producto NO Existe");
          this.inventoryForm.reset();
        }
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
        this.inventoryForm.reset();
    });
    this.modalActivateOne.emit(false);
  }
}
