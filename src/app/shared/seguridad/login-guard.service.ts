import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../../services/seguridad/login.service';

 
 @Injectable()
 export class LoginGuard implements CanActivate{
   constructor(private router: Router,
               private _login: LoginService){
     
   }
   canActivate(): boolean {
     if(!this._login.logueado()){
      this.router.navigate(['login']);
      return false;
     }
     return true;
   }
 }