import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class StorageService {

  getIdUsuario():number{
    let id = Number(localStorage.getItem('idUsuario'));
    return id;
  }

  getIdEmpresa():number{
    let id = Number(localStorage.getItem('idEmpresa'));
    return id;
  }

  getIdRol():number{
    let id = Number(localStorage.getItem('idRol'));
    return id;
  }

  getToken():number{
    let id = Number(localStorage.getItem('token'));
    return id;
  }
}