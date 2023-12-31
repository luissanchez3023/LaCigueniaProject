import { UseCase } from "@commons/helpers/UserCase";
import { CustomerRepository } from "@repository/customer/CustomerRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class CustomerDeleteUseCase implements UseCase<number, GenericResponse>{

    constructor(private customerRepository: CustomerRepository){}

    execute(customerId: number) : Observable<GenericResponse>{
        return this.customerRepository.deleteCustomer(customerId);
    }
}