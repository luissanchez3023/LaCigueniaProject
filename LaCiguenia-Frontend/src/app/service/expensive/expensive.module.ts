import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ExpensiveRepository } from "@repository/expensive/ExpensiveRepository";
import { CreateExpensiveUseCase } from "@repository/expensive/case/CreateExpensiveUseCase";
import { ExpensiveService } from "./implement/ExpensiveService";
import { ReadLastExpensiveUseCase } from "@repository/expensive/case/ReadLastExpensiveForDayUseCase";
import { UpdateExpensiveUseCase } from "@repository/expensive/case/UpdateExpensiveUseCase";
import { DeleteExpensiveUseCase } from "@repository/expensive/case/DeleteExpensiveUseCase";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";


const createExpensiveUseCaseFactory = (expensiveRepository: ExpensiveRepository) => new CreateExpensiveUseCase(expensiveRepository);
export const createExpensiveUseCaseProvider = {
    provide: CreateExpensiveUseCase,
    useFactory: createExpensiveUseCaseFactory,
    deps: [ExpensiveRepository],
};

const readLastExpensiveUseCaseFactory = (expensiveRepository: ExpensiveRepository) => new ReadLastExpensiveUseCase(expensiveRepository);
export const readLastExpensiveUseCaseProvider = {
    provide: ReadLastExpensiveUseCase,
    useFactory: readLastExpensiveUseCaseFactory,
    deps: [ExpensiveRepository],
};

const updateExpensiveUseCaseFactory = (expensiveRepository: ExpensiveRepository) => new UpdateExpensiveUseCase(expensiveRepository);
export const updateExpensiveUseCaseProvider = {
    provide: UpdateExpensiveUseCase,
    useFactory: updateExpensiveUseCaseFactory,
    deps: [ExpensiveRepository],
};

const deleteProductUseCaseFactory = (expensiveRepository: ExpensiveRepository) => new DeleteExpensiveUseCase(expensiveRepository);
export const deleteExpensiveUseCaseProvider = {
    provide: DeleteExpensiveUseCase,
    useFactory: deleteProductUseCaseFactory,
    deps: [ExpensiveRepository],
};

@NgModule({
  providers: [
    createExpensiveUseCaseProvider,
    readLastExpensiveUseCaseProvider,
    updateExpensiveUseCaseProvider,
    deleteExpensiveUseCaseProvider,
    {provide: ExpensiveRepository, useClass: ExpensiveService}
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ExpensivesModule { }