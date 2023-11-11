import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";
import { SupplierRepository } from "../SupplierRepository";


export class ReadLastSupplierUseCase implements UseCase<number, GenericResponse>{

    constructor(private supplierRepository: SupplierRepository){}

    execute() : Observable<GenericResponse>{
        return this.supplierRepository.readLastSupplier();
    }
}