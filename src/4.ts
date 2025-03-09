import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[];

  constructor(private userService: UserService) {}

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
