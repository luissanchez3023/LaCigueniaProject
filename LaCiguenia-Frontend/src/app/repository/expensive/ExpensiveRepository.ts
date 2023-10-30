import { ExpensiveModel } from "@commons/domains/expensive/ExpensiveModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class ExpensiveRepository {
    abstract createExpensive(expensiveModel : ExpensiveModel): Observable<GenericResponse>;
    abstract readLastExpensiveForDay(expensiveId: number): Observable<GenericResponse>;
    abstract updateExpensive (expensiveModel : ExpensiveModel): Observable<GenericResponse>;
    abstract DeleteExpensive (expensiveId: number): Observable<GenericResponse>;
}