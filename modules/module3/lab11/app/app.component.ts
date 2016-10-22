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
	title: "Mi usuario"
	user: User = {
		id: 1033690221,
		name: "Reinaldo Portocarrero",
		address: "Cra 17 b bis # 65 - 42",
		phone: 790353//,
		//hobbies : ["Programar", "Jugar", "Dormir"]
	}
}
