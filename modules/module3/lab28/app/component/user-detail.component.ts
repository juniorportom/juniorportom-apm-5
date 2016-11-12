
import {Component, OnInit} from '@angular/core';
//import { Component, Input } from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Router} from "@angular/router";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/templates/user-detail.html',
    providers: [UserService]
})

export class UserDetailComponent implements OnInit{
    //@Input()
    user: User;

    constructor(private router: Router, private userService: UserService,
        private route: ActivatedRoute){
        

    }

     ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let email = params['email'];
            this.userService.getUser(email).subscribe(user=>this.user=user),
                error => {
                console.log(error);
            }
        });
    }


    save(): void {
        this.userService.update(this.user)
            .subscribe(
                response => {console.log(response); this.router.navigate(['user/'])},
                err => { console.log(err)});
    }

    delete(): void {
        this.userService.delete(this.user)
        .subscribe(
                response => {console.log(response); this.router.navigate(['user/'])},
                err => { console.log(err)});           
    }
}



