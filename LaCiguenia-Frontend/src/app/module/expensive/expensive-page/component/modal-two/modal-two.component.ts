import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DESCRIPTON, DONE, FAIL, NUMBER_INVOICE, PAY, PLACE, TITLE, VALUE } from './constants/modal-two';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ExpensiveModel } from '@commons/domains/expensive/ExpensiveModel';
import { UpdateExpensiveUseCase } from '@repository/expensive/case/UpdateExpensiveUseCase';
import { ReadLastExpensiveUseCase } from '@repository/expensive/case/ReadLastExpensiveForDayUseCase';
import { GenericResponse } from '@commons/response/GenericResponse';

@Component({
  selector: 'app-modal-two',
  templateUrl: './modal-two.component.html',
  styleUrls: ['./modal-two.component.scss']
})
export class ModalTwoComponent {

  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Input() expensiveModel!: ExpensiveModel;

  textTitle = TITLE;
  textNumberInvoice = NUMBER_INVOICE;
  textPay = PAY;
  textValue = VALUE;
  textPlace = PLACE; 
  textDescription = DESCRIPTON;
  textDone = DONE;
  textFail = FAIL;


  selectedPaymentMethod: string = '';
  expensiveForm!: FormGroup;
  

  metodosDePago = ['Efectivo', 'Tarjeta de Crédito', 'Tarjeta de Débito'];


  constructor(private readLastExpensiveUseCase: ReadLastExpensiveUseCase, public formulary: FormBuilder,
    private updateExpensiveUseCase: UpdateExpensiveUseCase){
      this.expensiveForm = formulary.group({
      noExpensive: ['', [Validators.required]],
      methodPayExpensive: ['', [Validators.required]],
      valueExpensive: ['', [Validators.required]],
      placeExpensive: ['', [Validators.required]],
      descriptionExpensive: ['', [Validators.required]],
    });
  }

  updateExpensive() {
    this.expensiveModel = {
      expensiveId: this.expensiveModel.expensiveId,
      expensiveNo: this.expensiveForm.get('noExpensive')?.value || this.expensiveModel.expensiveNo,
      expensiveMethodPay: this.expensiveForm.get('methodPayExpensive')?.value || this.expensiveModel.expensiveMethodPay,
      expensiveValue: this.expensiveForm.get('valueExpensive')?.value || this.expensiveModel.expensiveValue,
      expensivePlace: this.expensiveForm.get('placeExpensive')?.value || this.expensiveModel.expensivePlace,
      expensiveDescription: this.expensiveForm.get('descriptionExpensive')?.value || this.expensiveModel.expensiveDescription,

    };
    this.updateExpensiveUseCase.execute(this.expensiveModel).subscribe(
      (res: GenericResponse) => {
        if (res.statusCode == 200) {
          this.modalEventTwo();
          if(res.statusCode == 200){
            window.location.reload();
          }
        } else {
          alert("El Gasto NO Existe");
          this.expensiveForm.reset();
        }
      },
      (error) => {
        alert("Ocurrió un error al procesar la solicitud " + error);
        this.expensiveForm.reset();
    });
  }

  modalEventTwo() {
    this.modalActivateTwo.emit(false);
    
  }

}

