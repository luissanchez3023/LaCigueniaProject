import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClosingRepository } from '@repository/closinghistory/CashClosingHistoryRepository';
import { ReadClosesUseCase } from '@repository/closinghistory/case/ReadClosesUseCase';
import { ClosingService } from './implement/CashClosingHistoryService';
import { HttpClientModule } from '@angular/common/http';
import { ReadOneCloseUseCase } from '@repository/closinghistory/case/ReadOneCloseUseCase';



const readClosesUseCaseFactory = (closingRepository: ClosingRepository) => new ReadClosesUseCase(closingRepository);
export const readClosesgUseCaseProvider = {
    provide: ReadClosesUseCase,
    useFactory: readClosesUseCaseFactory,
    deps: [ClosingRepository],
};
const readOneCloseUseCaseFactory = (closingRepository: ClosingRepository) => new ReadOneCloseUseCase(closingRepository);
export const readOneCloseUseCaseProvider = {
    provide: ReadOneCloseUseCase,
    useFactory: readOneCloseUseCaseFactory,
    deps: [ClosingRepository],
};

@NgModule({
  providers: [
    readClosesgUseCaseProvider,
    readOneCloseUseCaseProvider,
    {provide: ClosingRepository, useClass: ClosingService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CloseModuleModule {

 }
