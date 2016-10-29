import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'user-app',
  templateUrl: 'app/templates/user-list.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {

    constructor(private userService: UserService){}

    title: string = "Mis usuarios";
    selected: User;
    users: User[];

    ngOnInit(){
        this.userService.getUsers()
        .then(users => this.users = users)
        .catch(error => console.log(error));
    }

    onSelect(user: User) {
        this.selected = user;
    }
}