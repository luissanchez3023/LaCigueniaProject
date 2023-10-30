import { UseCase } from "@commons/helpers/UserCase";
import { ExpensiveRepository } from "../ExpensiveRepository";
import { ExpensiveModel } from "@commons/domains/expensive/ExpensiveModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export class CreateExpensiveUseCase implements UseCase<ExpensiveModel, GenericResponse>{

    constructor(private expensiveRepository: ExpensiveRepository){}

    execute(expensiveModel: ExpensiveModel) : Observable<GenericResponse>{
        return this.expensiveRepository.createExpensive(expensiveModel);
    }
}