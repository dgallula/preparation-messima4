import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
 
@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent  {
    myCars: Car[] = []
 
    constructor(private carSer: CarService) {
        this.getAllCars()    
    }
    addCar(frm:NgForm){
        console.log( frm.value.model)
        console.log(frm.value.color)
        let temp= new Car()
        temp.color=frm.value.color
        temp.model=frm.value.model
        this.carSer.addCar(temp).subscribe(msg => console.log(msg))
        this.getAllCars()
    }
 
    getAllCars(){
        this.carSer.getCars().subscribe(carAR => this.myCars=carAR)
    }
 
    delCar(carId:string){
        this.carSer.delCar(carId).subscribe(msg => console.log(msg))
        this.getAllCars()
    }
}
 
