import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL_CLOSING, READ_CLOSES, READ_ONE_CLOSE } from "@commons/endpoint/closinghistory/ClosingEndPoints";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ClosingRepository } from "@repository/closinghistory/CashClosingHistoryRepository";
import { Observable, catchError, throwError } from "rxjs";




@Injectable({
    providedIn: 'root'
})
export class ClosingService extends ClosingRepository {

    constructor(private http: HttpClient){
        super();
    }


    override readCloses(): Observable<GenericResponse> {
        return this.http.get<GenericResponse>(BASE_URL_CLOSING + READ_CLOSES)
    }

    override readOneClose(cashClosingId: number): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_CLOSING + READ_ONE_CLOSE + cashClosingId)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}