import { Component } from '@angular/core';
import { Ride } from './model/ride';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html'
})
export class AppComponent {

	title = "Ride Taxi";
	selected: string = "";
    total:number = 0;
	ride: Ride = RIDE;

    onKey(value:number)
    {
        this.ride.units = value;
        this.sum();
    }

	onSelect(value: number) {
		if(value===1) {
            this.ride.festive = true;
        }
        if(value===2) {
            this.ride.airport = true;
        }
        if(value===3) {
            this.ride.app = true;
        }
        if(value===4) {
            this.ride.pip = true;
        }

        this.sum();
	}

    sum () 
    {
        this.total = 0;
        if(this.ride.units > 50) {
            this.total = (4100*this.ride.units)/50;
        }
        else{
            this.total = 4100;
        }
        if(this.ride.festive){
            this.total = this.total + 1900;
        }
        if(this.ride.airport){
            this.total = this.total + 3900;
        }
        if(this.ride.app){
            this.total = this.total + 700;
        }
        if(this.ride.pip){
            this.total = this.total + 700;
        }
    }
}

const RIDE: Ride =    
    {
        units: 50,
        festive: false,
        airport: false,
        app: false,
        pip: false,
        default: false
    }
;