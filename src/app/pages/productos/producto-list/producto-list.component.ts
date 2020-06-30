import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/reportes/producto.model';
import { ProductoService } from '../../../services/reportes/producto.service';
import { StorageService } from '../../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styles: []
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [];
  idEmpresa: number;
  error: boolean = false;
  loading: boolean =true;
  intervalo: any;
  
  constructor(private _producto:ProductoService, private storage: StorageService,private router: Router) {

    this.idEmpresa = Number(this.storage.getIdEmpresa());
    this.getProductos();
    
  }

  ngOnInit() {
    this.carga();
  }
  ngOnDestroy() {
    if(this.intervalo){
      clearInterval(this.intervalo);

    }
  }

  carga(){
    this.intervalo = setInterval(()=> {
      this.getProductos();

    },5000)
  }

  getProductos(){
    console.log('intervalo');
    return this._producto.getProductoByEmpresa(this.idEmpresa).subscribe((data: any) => {
      if(data.success){
        this.productos =data.data;
        this.loading=false;
        // console.log(this.productos);
        return;
      }else{
        this.error =true;
        console.log(data);
        return;
      }
    },(error) => {
      this.error =true;
      return console.log(error);
    })
  }

  goProducto(id){
    return this.router.navigate(['/producto',id]);
  }

}
