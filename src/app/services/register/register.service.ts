import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Usuario } from '../../models/reportes/usuario.model';
import { Empresa } from '../../models/reportes/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = `${environment.APIEndpoint}/api/register`
  constructor(private http: HttpClient){
    
  }

  register(user: Usuario, empresa:Empresa, file: File) { 
    const formData = new FormData();
    formData.append('file',file);
    formData.append('nombre',empresa.nombre);
    formData.append('direccion',empresa.direccion);
    formData.append('rfc',empresa.rfc);
    formData.append('encargado',empresa.encargado);
    formData.append('vision',empresa.vision);
    formData.append('mision',empresa.mision);
    formData.append('telefono',empresa.telefono);
    formData.append('usuario',user.usuario);
    formData.append('password',user.password);
    formData.append('idZona',user.idZona.toString());
    formData.append('idRol','2');
    formData.append('idTipoUsuario','1');
    formData.append('activo','false');
    formData.append('idRolEmpresa',empresa.idRolEmpresa.toString());

    return this.http.post(this.url,formData).pipe((map((resp: any) => {
      return resp;
    })),
    catchError((err) => {
      return throwError(err);
    }));

  }
}