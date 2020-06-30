import { Component, OnInit } from '@angular/core';
import { MunicipioService } from '../services/catalogos/municipio.service';
import { Municipio } from '../models/catalogos/municipio.model';
import { Zona } from '../models/catalogos/Zona.model';
import { Usuario } from '../models/reportes/usuario.model';
import { Empresa } from '../models/reportes/empresa.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ZonaService } from '../services/catalogos/zona.service';
import { RegisterService } from '../services/register/register.service';
import { RolEmpresaService } from '../services/catalogos/rolEmpresa.service';
import { RolEmpresa } from '../models/catalogos/rolEmpresa.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  municipio: Municipio[] =[];
  zona: Zona[]=[];
  rolEmpresa: RolEmpresa[] =[];
  usuario: Usuario;
  empresa: Empresa;
  idMunicipio = 0;
  file:File;

  constructor(private _municipio: MunicipioService,
              private _zona: ZonaService,
              private _register: RegisterService,
              private _rolEmpresa: RolEmpresaService,
              private _router:Router) { 
    this.empresa = new Empresa();
    this.usuario = new Usuario();
    this.getMunicipio();
    this.formulario();
    this.getRolEmpresa();
  }

  ngOnInit() {
  }

  formulario(){
    this.forma = new FormGroup({
      'fnombre': new FormControl('',Validators.required),
      'frfc': new FormControl('',Validators.required),
      'fencargado': new FormControl('',Validators.required),
      'fdireccion': new FormControl('',Validators.required),
      'fvision': new FormControl('',Validators.required),
      'fmision': new FormControl('',Validators.required),
      'fusuario': new FormControl('',Validators.required),
      'fpassword': new FormControl('',Validators.required),
      'fmunicipio': new FormControl('',Validators.required),
      'fzona': new FormControl('',Validators.required),
      'ftelefono':new FormControl('',Validators.required),
      'frolEmpresa':new FormControl('',Validators.required)
    });

    this.forma.controls['fzona'].disable();
    this.forma.controls['fmunicipio'].valueChanges.subscribe(data => {
      if(!data){
        this.forma.controls['fzona'].disable();
        return
      }
      this.getZona(data);
      this.forma.controls['fzona'].enable();
    });
    
  }

  getMunicipio(){
    this._municipio.getMunicipio().subscribe((data: any) => {
      this.municipio = data.data;
      // console.log(this.municipio);
      
    },(err:any) => {
      console.log(err);
    })
  }

  getRolEmpresa(){
    this._rolEmpresa.obtenerRoles().subscribe((data:any)=> {
      this.rolEmpresa = data.data;
    });
  }

  registrar(form: NgForm){
    this._router.navigate(['/login']);
    // if(form.invalid){ 
    //   Swal.fire({
    //     title: '¡Error!',
    //     text: 'Capturar Todos Los Campos',
    //     icon: 'error'
    //   });
    //   return;
    // }
    // if(this.file ===undefined){
    //   Swal.fire({
    //     title: '¡Error!',
    //     text: 'Ingrese Logotipo de la empresa',
    //     icon: 'error'
    //   });
    //   return;
    // }
    //   Swal.fire({
    //     title: 'Espere',
    //     text: 'Registrando Informacion',
    //     icon: 'info',
    //     allowOutsideClick:false
    //   });
    //   Swal.showLoading();
    //   this._register.register(this.usuario,this.empresa,this.file).subscribe((data: any)=> {
    //       console.log(data);
    //       if(data.success){
    //         Swal.fire({
    //           title: 'Correcto!',
    //           text: 'se Guardaron los datos correctamente',
    //           icon: 'success'
    //         });
    //         return;
    //       }else {
    //         Swal.fire({
    //           title: 'Error!',
    //           text: data.message,
    //           icon: 'error'
    //         });
    //         return;
    //       }

    //   },(err:any) => {
    //     Swal.fire({
    //       title: 'Error!',
    //       text: err.error.message,
    //       icon: 'error'
    //     });
    //     console.log(err);
    //     return;
    //   })

  }

  getZona(id) {
    this._zona.getZonaByMunicipio(id).subscribe((data: any) => {
      this.zona = data.data
    });
  }

  archivoselect(event:FileList){
    // console.log(event[0]);
    this.file=event[0];
  }

}
