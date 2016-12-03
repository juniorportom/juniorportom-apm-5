import { Component } from '@angular/core';
import { User } from '../../model/user';
import {UserService} from "../../providers/user-service";
import { Users } from '../users/users';
import { AlertController } from 'ionic-angular';
import { NavController, ModalController, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
  providers: [UserService]
})
export class UserDetail {
	//@Input()
    user: User;

  constructor(public navCtrl: NavController, private userService: UserService, private param: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello UserDetailPage Page');

    let email = this.param.get('email');
            this.userService.getUser(email).subscribe(user=>this.user=user),
                error => {
                console.log(error);
  		}
	}

    
    save(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirm Update',
      message: "Do you want to update de data of this user?",
     // inputs: [
     //   {
     //     name: 'title',
     //     placeholder: 'Title'
     //   },
     // ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accept',
          handler: data => {

            this.userService.update(this.user)
            .subscribe(
                response => {console.log(response);
                  //this.viewCtrl.dismiss(); 
                  this.navCtrl.push(Users);
                  
                },
                err => { console.log(err)});
            console.log('Accept clicked');
            //this.viewCtrl.dismiss(); 
          }

        }

      ]
    });
    prompt.present();        

    }

   delete(): void {
      let prompt = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: "Do you want to delete this user?",
     // inputs: [
     //   {
     //     name: 'title',
     //     placeholder: 'Title'
     //   },
     // ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Accept',
          handler: data => {

            this.userService.delete(this.user)
            .subscribe(
                response => {console.log(response); 
                  //this.viewCtrl.dismiss();
                  this.navCtrl.push(Users);  
                                  
                },
                err => { console.log(err)});
            console.log('Accept clicked');
          }
        }
      ]
    });
    prompt.present();

    }

    dismiss() {
    this.viewCtrl.dismiss();
  }

}

