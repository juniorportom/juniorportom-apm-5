import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  //template: '<h1>My First Angular App</h1>'
  template: '<h1>{{hello}}</h1>'
})
export class AppComponent { 
hello: string = "My First Angular App Reinaldo";

}