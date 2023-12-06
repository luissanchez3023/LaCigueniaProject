import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";
import { ClosingRepository } from "../CashClosingHistoryRepository";


export class ReadOneCloseUseCase implements UseCase<number, GenericResponse>{

    constructor(private cashClosingHistoryRepository: ClosingRepository){}

    execute(cashClosingId: number) : Observable<GenericResponse>{
        return this.cashClosingHistoryRepository.readOneClose(cashClosingId);
    }
}