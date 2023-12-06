import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class ClosingRepository {
    abstract readCloses(): Observable<GenericResponse>;
    abstract readOneClose(cashClosingId: number): Observable<GenericResponse>;
}