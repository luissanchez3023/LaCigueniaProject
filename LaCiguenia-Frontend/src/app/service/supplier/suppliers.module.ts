import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SupplierRepository } from "@repository/supplier/SupplierRepository";
import { CreateSupplierUseCase } from "@repository/supplier/case/CreateSupplierUseCase";
import { DeleteSupplierUseCase } from "@repository/supplier/case/DeleteSupplierUseCase";
import { ReadLastSupplierUseCase } from "@repository/supplier/case/ReadLastSupplierUseCase";
import { UpdateSupplierUseCase } from "@repository/supplier/case/UpdateSupplierUseCase";
import { SupplierService } from "./implement/SupplierService";


const createSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new CreateSupplierUseCase(supplierRepository);
export const createSupplierUseCaseProvider = {
    provide: CreateSupplierUseCase,
    useFactory: createSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

const readLastSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new ReadLastSupplierUseCase(supplierRepository);
export const readLastSupplierUseCaseProvider = {
    provide: ReadLastSupplierUseCase,
    useFactory: readLastSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

const updateSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new UpdateSupplierUseCase(supplierRepository);
export const updateSupplierUseCaseProvider = {
    provide: UpdateSupplierUseCase,
    useFactory: updateSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

const deleteSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new DeleteSupplierUseCase(supplierRepository);
export const deleteSupplierUseCaseProvider = {
    provide: DeleteSupplierUseCase,
    useFactory: deleteSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

@NgModule({
  providers: [
    createSupplierUseCaseProvider,
    readLastSupplierUseCaseProvider,
    updateSupplierUseCaseProvider,
    deleteSupplierUseCaseProvider,
    {provide: SupplierRepository, useClass: SupplierService}
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SuppliersModule { }