import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { DESCRIPTION, INVOICE, METHOD_PAY, PLACE, SAVE, TITTLE, VALUE } from './constants/section-one';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ExpensiveModel } from '@commons/domains/expensive/ExpensiveModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { CreateExpensiveUseCase } from '@repository/expensive/case/CreateExpensiveUseCase';
import { ReadLastExpensiveUseCase } from '@repository/expensive/case/ReadLastExpensiveForDayUseCase';



@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent {

  @Output() modalActivate = new EventEmitter<boolean>();
  
  textTitle = TITTLE;
  textInvoice = INVOICE;
  textPlace = PLACE;
  textMethodPay = METHOD_PAY;
  textValue = VALUE;
  textDescription = DESCRIPTION;
  textSave = SAVE;

  selectedPaymentMethod: string = '';
  expensiveForm!: FormGroup;
  expensiveModel!: ExpensiveModel;

  metodosDePago = ['Efectivo', 'Tarjeta de Crédito', 'Tarjeta de Débito'];


  constructor(public formulary: FormBuilder, public router: Router, private createExpensiveUseCase: CreateExpensiveUseCase,
    private readLastExpensiveUseCase: ReadLastExpensiveUseCase){

this.expensiveForm = formulary.group({
noExpensive: ['', [Validators.required]],
placeExpensive: ['', [Validators.required]],
methodPayExpensive: ['', [Validators.required]],
valueExpensive: ['', [Validators.required]],
descriptionExpensive: ['', [Validators.required]],
});
}


  createExpenditure(){
    if (!this.expensiveForm.valid) {
      this.expensiveForm.markAllAsTouched();
      return
   }

   this.expensiveModel = {
    expensiveId: 0,
    expensiveNo: this.expensiveForm.controls['noExpensive'].value,
    expensivePlace: this.expensiveForm.controls['placeExpensive'].value,
    expensiveMethodPay: this.expensiveForm.controls['methodPayExpensive'].value,
    expensiveValue: this.expensiveForm.controls['valueExpensive'].value,
    expensiveDescription: this.expensiveForm.controls['descriptionExpensive'].value,
  }

  this.createExpensiveUseCase.execute(this.expensiveModel).subscribe(
    (res: GenericResponse) => {
      if (res.statusCode == 200) {
        this.expensiveModel.expensiveId = res.objectId;
        
        this.expensiveForm.reset();
        this.modalEvent();
      } else {
        alert("El Gasto Ya Existe");
        this.expensiveForm.reset();
        
      }
    },
    (error) => {
      alert("Ocurrió un error al procesar la solicitud " + error);
      this.expensiveForm.reset();
  });
} 
  modalEvent() {
    this.modalActivate.emit(true);
  }


}
