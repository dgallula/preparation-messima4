import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  /** GET cars from the server */
  URL = "http://127.0.0.1:3005/cars"

     /** GET cars from the server */
     getCars(): Observable<Car[]> {
      return this.http.get<Car[]>(this.URL)
  }

  /** GET car by id. Will 404 if id not found */
  getCar(id: string): Observable<Car> {
      return this.http.get<Car>(`${this.URL}/${id}`)
  }

   /** GET car by id. Will 404 if id not found */
   delCar(id: string): Observable<Car> {
      return this.http.delete<Car>(`${this.URL}/${id}`)
  }

   /** create a  car  */
   addCar(car: Car): Observable<any> {
       console.log('service add')
      return this.http.post<any>(`${this.URL}`,{'model':car.model,'color':car.color})
  }
}


