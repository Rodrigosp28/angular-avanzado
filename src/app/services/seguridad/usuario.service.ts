import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn:'root'
})
export class UsuarioService {
  url =`${environment.APIEndpoint}/api/usuarios`;
  idUsuario: number;

  constructor(private storage: StorageService,
              private http: HttpClient){
    this.idUsuario = storage.getIdUsuario();
  }

  getUsuarioById(id: number){
    const uri =`${this.url}/${id}/ById`;

    return this.http.get(uri).pipe(map((resp: any) => {

      return resp;

    }),catchError( (err)=> {
      return throwError(err);
    }))
    
  }

}