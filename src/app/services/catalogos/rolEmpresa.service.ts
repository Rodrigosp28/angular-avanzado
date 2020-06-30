import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class RolEmpresaService {

  url=`${environment.APIEndpoint}/api/catalogos/rolempresa`
  constructor(private http: HttpClient){

  }

  obtenerRoles(){

    return this.http.get(this.url).pipe(map((resp: any)=> {
      return resp;
    }),
    catchError((err) => {
      return throwError(err)
    }));
  }
}