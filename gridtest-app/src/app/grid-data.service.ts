import { Injectable } from '@angular/core';
import {Http,  Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Griddata} from './griddata';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GridDataService {

  lastId: number = 0;
  dataRows: Griddata[] =[];
  dataFile: string = "assets/gridtest.json";

  constructor(private _http:Http) {

   }
   getAllData(): Observable<Griddata[]> {
   //Get the data with http call
    return  this._http.get(this.dataFile)
            .map((response: Response)=> <Griddata[]>response.json())
            .catch(this.handleError);

               


   }
   private handleError(error: Response) {
     console.error(error);
     return Observable.throw(error.json().error || 'ServerError');
   }



}
