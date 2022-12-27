import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather:string=''
  location:string=''
  temperature:string=''
  icon:string=''
  // q:string=''
constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){

  this.router.routeReuseStrategy.shouldReuseRoute = () => false;


}

ngOnInit(): void {}

 
  search(event: any) {
    this.location = event.target.value;
    this.viewDetails();
    
  }
   
  // this.api.viewDetails(this.place).subscribe((data:any)=>{

  //    console.log(data);}
    
  

  viewDetails() {
    this.api.viewDetails(this.location).subscribe((data: any) => {
      this.weather = data.weather[0].main
      this.icon = data.weather[0].icon
      this.temperature = (data.main.temp - 273.15).toFixed(2) + '°C'
        })
}
// submit(value: string) {
//   this.router.navigate( ['.'],  { queryParams: { query: value } })
//     .then(_ => this.search(this.q));
// }

//  } 

}
// function search(event: Event | undefined, any: any) {
  // throw new Error('Function not implemented.');
// }

