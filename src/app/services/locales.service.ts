import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  // public locales: any[] = [];
  public url: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  getLocales(){
    return this.http.get(`${this.url}/locales`)
            .pipe(
              map( resp =>{
                return resp['locales'];
              })
            )
  }

  rentarLocal(data: any){
    return this.http.post(`${this.url}/locales`, data);
  }
}
