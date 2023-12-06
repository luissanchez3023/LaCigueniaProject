import { Injectable } from "@angular/core";
import { ClosingHistoryModel } from "@commons/domains/closinghistory/ClosingHistoryModel";

@Injectable({
    providedIn: 'root'
})

export class SendClosingService {

    closingModel!: ClosingHistoryModel;

    getClosingModel() {
        return this.closingModel;
    }

    updateClosingModel(closingModel: ClosingHistoryModel) {
        this.closingModel = closingModel;
    }
}
