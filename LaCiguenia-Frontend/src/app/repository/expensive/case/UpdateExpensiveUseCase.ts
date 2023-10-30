import { ExpensiveModel } from "@commons/domains/expensive/ExpensiveModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ExpensiveRepository } from "../ExpensiveRepository";
import { Observable } from "rxjs";

export class UpdateExpensiveUseCase implements UseCase<ExpensiveModel, GenericResponse>{

    constructor(private expensiveRepository: ExpensiveRepository){}

    execute(expensiveModel: ExpensiveModel) : Observable<GenericResponse>{
        return this.expensiveRepository.updateExpensive(expensiveModel);
    }
}