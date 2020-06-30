import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Usuario } from '../../models/reportes/usuario.model';
import { UsuarioService } from '../../services/seguridad/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  idUsuario: number;
  usuario: Usuario;
  constructor(private storage: StorageService,
              private _usuario: UsuarioService) { 
       this.usuario = new Usuario();
       this.idUsuario=this.storage.getIdUsuario();
       this.getUsuario();
    // console.log('contructor');
  }

  ngOnInit() {
    // console.log('init');

    
  }

  getUsuario(){
    this._usuario.getUsuarioById(this.idUsuario).subscribe((data: any)=> {
      if(data.success){
        this.usuario = data.data;
        return;
      }
      else{
        console.log(data);
        return;
      }
    },(err)=> {
      console.log(err);
      return;
    });
  }

}
