import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  classDetailSource = new BehaviorSubject<boolean>(false);
  tapJoinSource = new BehaviorSubject<boolean>(true);
  tapAssignmentCreationSource = new BehaviorSubject<boolean>(true);
  tapAssignmentEditionSource = new BehaviorSubject<boolean>(true);



  currentClassDetail = this.classDetailSource.asObservable();
  currentTapJoin = this.tapJoinSource.asObservable();
  currentAssignmentCreation = this.tapAssignmentCreationSource.asObservable();
  currentAssignmentEdition = this.tapAssignmentEditionSource.asObservable();

  // có thể subcribe theo dõi thay đổi value của biến này thay cho messageSource

  constructor() { }

}

