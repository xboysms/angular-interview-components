import { Component, Input } from '@angular/core';
import { User } from '../users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.scss']
})
export class InactiveUserComponent {
  @Input() users: User[] = [];

  constructor(public userService: UsersService) {}
}
