import { Injectable } from '@angular/core';
import { User } from '../components/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  changeState(item: User) {
    item.isActive = !item.isActive;
  }
}
