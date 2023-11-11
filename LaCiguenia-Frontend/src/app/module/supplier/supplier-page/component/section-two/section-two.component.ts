import { Component, EventEmitter, Output } from '@angular/core';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadLastSupplierUseCase } from '@repository/supplier/case/ReadLastSupplierUseCase';
import { CITY, NAME_SUPPLIER, NIT_RUT, NUMBER_PHONE, OPTIONS, TITLE } from './constants/section-two';
import { SupplierModel } from '@commons/domains/supplier/SupplierModel';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() modalActivateThree = new EventEmitter<boolean>();
  @Output() SendSupplier = new EventEmitter<SupplierModel>();
  @Output() SendSupplierId = new EventEmitter<number>();

  textTitle = TITLE;
  textNameSupplier = NAME_SUPPLIER;
  textNit = NIT_RUT;
  textCity = CITY;
  textNumberPhone = NUMBER_PHONE;
  textOptions = OPTIONS;

  supplierModel!: SupplierModel [];


  constructor(private readLastSupplierUseCase: ReadLastSupplierUseCase){}

  modalEdit(index: number){
    this.SendSupplier.emit(this.supplierModel[index])
    this.modalActivateTwo.emit(true);
  }

  modalDelete(index: number){
    this.SendSupplierId.emit(this.supplierModel[index].supplierId);
    this.modalActivateTwo.emit(true);
  }

  ngOnInit(): void {
    this.readLastSupplier();
  }

  readLastSupplier(){
    this.readLastSupplierUseCase.execute().subscribe(
      (res: GenericResponse) => {
        this.supplierModel = res.objectResponse;
      },
      error => {
        console.error("Error en la solicitud: " + error);
      });
  }
}

