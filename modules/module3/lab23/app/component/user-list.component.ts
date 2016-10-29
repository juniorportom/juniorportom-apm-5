import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {USERS} from '../mock/user-mock';

@Component({
  selector: 'user-app',
  templateUrl: 'app/templates/user-list.html'
})
export class UserListComponent{
title: string = "Mis usuarios";
    selected: User;
    users: User[] = USERS;    

    onSelect(user: User) {
        this.selected = user;
    }
}