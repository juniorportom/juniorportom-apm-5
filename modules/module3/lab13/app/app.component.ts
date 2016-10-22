import { Component } from '@angular/core';


export class User {
     id: number;
     name: string;
     address: string;
     phone: number//;     
     //hobbies: Array <string>;
 }


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user.html'
})
export class AppComponent {

	title = "Mis Usuarios";
	selected: User;
	users: User[] = USERS;

	onSelect(user: User) {
		this.selected = user;
	}
}

const USERS: User[] = [
    {
        id: 10,
        name: "Reinaldo Portocarrero",
        address: "cra 17 b 52 - 63",
        phone: 7456300
    },
    {
        id: 20,
        name: "Junior Portocarrero",
        address: "cra 17 b 52 - 63",
        phone: 7456301
    },
    {
        id: 30,
        name: "Jhon Portocarrero",
        address: "cra 17 b 52 - 63",
        phone: 7456302
    },
];