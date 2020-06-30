import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  url= `${environment.APIEndpoint}/api/catalogos`;
  constructor(private http: HttpClient){

  }

  getMunicipio(){
    const uri = `${this.url}/municipios`;
    return this.http.get(uri).pipe(map((resp:any) => {

      return resp;
      
    }),catchError((err) => {
      return throwError(err);
    })
    );
  }
  
}