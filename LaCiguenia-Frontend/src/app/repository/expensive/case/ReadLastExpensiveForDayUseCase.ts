import { ExpensiveModel } from "@commons/domains/expensive/ExpensiveModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ExpensiveRepository } from "../ExpensiveRepository";
import { Observable } from "rxjs";

export class ReadLastExpensiveUseCase implements UseCase<number, GenericResponse>{

    constructor(private expensiveRepository: ExpensiveRepository){}

    execute(expensiveId: number) : Observable<GenericResponse>{
        return this.expensiveRepository.readLastExpensiveForDay(expensiveId);
    }
}