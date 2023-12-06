import { ClosingHistoryModel } from "@commons/domains/closinghistory/ClosingHistoryModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";
import { ClosingRepository } from "../CashClosingHistoryRepository";


export class ReadClosesUseCase implements UseCase<ClosingHistoryModel, GenericResponse>{

    constructor(private closingRepository: ClosingRepository){}

    execute() : Observable<GenericResponse>{
        return this.closingRepository.readCloses();
    }
}