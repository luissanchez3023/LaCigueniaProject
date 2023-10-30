import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ExpensiveModel } from "@commons/domains/expensive/ExpensiveModel";
import { BASE_URL_EXPENSIVE, CREATE_EXPENSIVE, DELETE_EXPENSIVE, READ_LAST_EXPENSIVE, UPDATE_EXPENSIVE } from "@commons/endpoint/expensive/ExpensivendPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ExpensiveRepository } from "@repository/expensive/ExpensiveRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExpensiveService extends ExpensiveRepository {
    override createExpensive(expensiveModel: ExpensiveModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_EXPENSIVE + CREATE_EXPENSIVE, expensiveModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override readLastExpensiveForDay(expensiveId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_EXPENSIVE + READ_LAST_EXPENSIVE)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override updateExpensive(expensiveModel: ExpensiveModel): Observable<GenericResponse> {
        return this.http
        .put<GenericResponse>(BASE_URL_EXPENSIVE + UPDATE_EXPENSIVE, expensiveModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override DeleteExpensive(expensiveId: number): Observable<GenericResponse> {
        return this.http
        .delete<GenericResponse>(BASE_URL_EXPENSIVE + DELETE_EXPENSIVE + expensiveId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    constructor(private http: HttpClient){
        super();
    }

}