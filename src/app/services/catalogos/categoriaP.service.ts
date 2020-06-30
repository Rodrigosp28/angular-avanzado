import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class CategoriaPService {
  private url = `${environment.APIEndpoint}/api/catalogos/categoria/producto`;
  constructor(private http: HttpClient){

  }

  getCategoriaP() {
    return this.http.get(this.url).pipe(map((resp: any) => {
      return resp;
    }),
    catchError((error) => {
      return throwError(error);
    }));
  }
}