import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Login } from '../../models/seguridad/login.model';


@Injectable({
  providedIn:'root'
})
export class LoginService{

  uri= `${environment.APIEndpoint}/api/auth/1`
  constructor(private http: HttpClient){
    
  }

  login(usuario:Login){

    const body = {
      Username: usuario.usuario,
      Password: usuario.password
    };

    return this.http.post(this.uri,body).pipe(map((resp: any) => {
      if(resp.success){
        localStorage.setItem('token',resp.token);
        localStorage.setItem('idUsuario',resp.user.idUsuario);
        localStorage.setItem('idEmpresa',resp.user.idEmpresa);
        localStorage.setItem('idRol',resp.user.idRol);
        return resp;
      }
      else{
        return resp;
      }
    }),catchError((err) => {
      return throwError(err);
    }));

  }

  logueado():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

}