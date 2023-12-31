import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserModel } from '@commons/domains/user/UserModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { ReadUsersUseCase } from '@repository/user/case/ReadUsersUseCase';
import { USER_DELETE, USER_NAME, USER_EMAIL, USER_OPTION } from '@module/setup/setup-page/component/section-seven/constans/section-seven';
import { UserSharedGetDataUseCase } from '@repository/user/case/UserSharedGetDataUseCase';

@Component({
  selector: 'app-section-seven',
  templateUrl: './section-seven.component.html',
  styleUrls: ['./section-seven.component.scss']
})
export class SectionSevenComponent implements OnInit{

  @Output() eventDeleteInformationUser = new EventEmitter<boolean>();
  @Output() modalActivate = new EventEmitter<boolean>();
  @Output() modalActivateTwo = new EventEmitter<boolean>();
  @Output() sendUserId = new EventEmitter<number>();

  textTitle = USER_DELETE;
  textName = USER_NAME;
  textEmail = USER_EMAIL;
  textOption = USER_OPTION;

  userArray: UserModel [] = [];

  constructor(private readUsersUseCase : ReadUsersUseCase, private userSharedGetDataUseCase: UserSharedGetDataUseCase){}

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(){
    this.readUsersUseCase.execute().subscribe(
      (res: GenericResponse) => {
        for(let item of res.objectResponse){
          this.userArray.push(item);
        }
      }
    );
  }

  modalEvent() {
    this.modalActivate.emit(true);
  }

  modalDelete(index: number) {
    const NUMBER = this.userSharedGetDataUseCase.execute();
    const USER_ID = this.userArray[index].userId;
    if(USER_ID != NUMBER){
      this.sendUserId.emit(this.userArray[index].userId);
      this.modalActivateTwo.emit(true);
    }
  }

  eventDeleteUser(){
    this.eventDeleteInformationUser.emit(false);
  }
}
