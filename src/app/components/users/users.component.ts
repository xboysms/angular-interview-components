import { Component } from '@angular/core';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [
    {id: 1, username: 'Steve1', isActive: true},
    {id: 2, username: 'Steve2', isActive: true},
    {id: 3, username: 'Steve3', isActive: false},
    {id: 4, username: 'Steve4', isActive: false}
  ]

  get activeUsers():User[] {
    return this.users.filter(r => r.isActive);
  }
  get inActiveUsers():User[] {
    return this.users.filter(r => !r.isActive);
  }
}
