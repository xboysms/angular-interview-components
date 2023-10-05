import { Component, Input } from '@angular/core';
import { User } from '../users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss']
})
export class ActiveUserComponent {
  @Input() users: User[] = [];

  constructor(public userService: UsersService) {}
}
