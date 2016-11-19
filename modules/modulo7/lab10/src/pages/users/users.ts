import {Component, OnInit} from '@angular/core';
import { User } from '../../model/user';
import {UserService} from "../../providers/user-service";
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import {UserDetail} from '../user-detail/user-detail';


/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [UserService]
})
export class Users {
	title: string = "Modulo de usuario";

    selected: User;

    users: User[];

  constructor(public navCtrl: NavController, private userService: UserService, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello UsersPage Page');
  }

  getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getUsers();
    }

    onSelect(user: User){
        this.selected = user;
        this.navCtrl.push(UserDetail, {email: this.selected.email});
    }

    add(email: string): void {
        email = email.trim();
        if (!email) { return; }
        this.userService.create(email)
            .subscribe(user => {
                this.users.push(user);
                this.selected = null;
            });
    }

}



