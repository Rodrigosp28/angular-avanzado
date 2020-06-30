import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/seguridad/login.service';
import { Login } from '../models/seguridad/login.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Login;
  forma: FormGroup;
  constructor(private _login: LoginService,
              private router: Router) {
    this.usuario = new Login();
    this.formulario();
   }

  ngOnInit() {
  }

  formulario(){
    this.forma = new FormGroup({
      'fusuario': new FormControl('',Validators.required),
      'fpassword': new FormControl('',Validators.required),
    });
  }

  login(form: NgForm){
    if(form.invalid){
       Swal.fire({
         title: '¡Error!',
         text: 'Capturar Todos Los Campos',
         icon: 'error'
       });
       return;
     }
     Swal.fire({
        title: 'Espere',
        text: 'Iniciando Sesion',
        icon: 'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this._login.login(this.usuario).subscribe((data: any) => {
        if(data.success){
          Swal.fire({
            title: 'Correcto!',
            text: 'Inicio de sesion Correcto',
            icon: 'success'
        });
        Swal.close();
        this.router.navigate(['/dashboard']);
        return;

        }else{
          Swal.fire({
            title: 'Error!',
            text: data.messages,
            icon: 'error'
        });
        return;
        }
      },
      (err)=>{
        Swal.fire({
          title: 'Error!',
          text: err.error.messages,
          icon: 'error'
      });
      console.log(err);
      return;
      })

    }

}
