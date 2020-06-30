import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaP } from '../../../models/catalogos/categoriaP.model';
import { DisponibleP } from '../../../models/catalogos/disponibleP.model';
import { CategoriaPService } from '../../../services/catalogos/categoriaP.service';
import { DisponiblePService } from '../../../services/catalogos/disponiblep.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Producto } from '../../../models/reportes/producto.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { StorageService } from '../../../services/storage.service';
import { ProductoService } from '../../../services/reportes/producto.service';
import { ImagenP } from '../../../models/reportes/imagenP.model';
declare var $: any;
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styles: []
})
export class ProductoFormComponent implements OnInit {

  title: string;
  forma: FormGroup;
  idProducto: number;
  categorias: CategoriaP[] =[];
  disponibles: DisponibleP[] =[];
  producto: Producto;
  nuevo: boolean;
  file: File;
  imagenes: ImagenP[] = [];
  constructor(private activedRouter: ActivatedRoute, private _categoria: CategoriaPService, private _disponible: DisponiblePService,
              private storage: StorageService, private _producto: ProductoService,private router:Router) {
    this.producto = new Producto();
    this.producto.idEmpresa= Number(this.storage.getIdEmpresa());
    this.producto.idCategoria=0;
    this.producto.idDisponible= 0;
    
   }

  ngOnInit() {
    this.formulario();
    this.iniciar();
  }

  iniciar() {
    this.getDisponibleP();
    this.getCategoriaP();
    if(this.activedRouter.snapshot.paramMap.get('id')){
      this.title = 'Actualizar Producto';
      this.idProducto=Number(this.activedRouter.snapshot.paramMap.get('id'));
      this.getProductoById();
      this.forma.controls['fnombre'].disable();
      this.nuevo =false;
      this.getImagenesPorProducto();
    }
    else{
      this.title ='Agregar Producto';
      this.nuevo=true;
    }
  }

  formulario() {
    this.forma = new FormGroup({
      'fnombre': new FormControl('', Validators.required),
      'fcategoria': new FormControl('', Validators.required),
      'fprecio': new FormControl('', Validators.required),
      'fdisponible': new FormControl('', Validators.required),
      'fdescripcion': new FormControl('', Validators.required),
    });
  }

  getCategoriaP() {
    this._categoria.getCategoriaP().subscribe((data: any) => {
      if(data.success){
        this.categorias =data.data;
        return;
      }else{
        return console.log(data);
      }
    },(error) => {
      return console.log(error);
    })
  }

  getDisponibleP() {
    this._disponible.getDisponibleP().subscribe((data: any) => {
      if(data.success){
        this.disponibles =data.data;
        return;
      }else{
        return console.log(data);
      }
    },(error) => {
      return console.log(error);
    })
  }

  postProducto(form: NgForm) {
    // console.log(form);
    if (form.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Rellene Todos Los Campos',
        icon: 'error'
      });
      return;
     }
     Swal.fire({
       title:'Espere',
       text: 'Guardando Informacion..',
       icon:'info',
       allowOutsideClick:false
     });
     Swal.showLoading();
     this._producto.postProducto(this.producto).subscribe((data: any) => {
      if(data.success){
        Swal.fire({
          title: 'Correcto',
          text: 'Se Guardaron Los Datos Correctamente',
          icon:'info'
        }).then((result) => {
          this.router.navigate(['/producto',data.id]);
          Swal.close();
          return;
        })
      }else {
        console.log(data);
        Swal.fire({
          title: 'Error!',
          text:data.message,
          icon:'error'
        });
        return;
      }
     },(error) => {
       console.log(error);
      Swal.fire({
        title:'Error',
        text:error.message,
        icon: 'error'
      });
       return;
     })
  }

  putProducto(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Rellene Todos Los Campos',
        icon: 'error'
      });
      return;
     }
     Swal.fire({
       title:'Espere',
       text: 'Guardando Informacion..',
       icon:'info',
       allowOutsideClick:false
     });
     Swal.showLoading();
     this._producto.putProducto(this.idProducto,this.producto).subscribe((data: any) => {
      if(data.success){
        Swal.fire({
          title: 'Correcto',
          text: 'Se Actualizaron Los Datos Correctamente',
          icon:'info'
        }).then((result) => {
          this.router.navigate(['/producto',data.id]);
          Swal.close();
          return;
        })
      }else {
        console.log(data);
        Swal.fire({
          title: 'Error!',
          text:data.message,
          icon:'error'
        });
        return;
      }
     },(error) => {
       console.log(error);
      Swal.fire({
        title:'Error',
        text:error.message,
        icon: 'error'
      });
       return;
     })
  }

  getProductoById(){
    this.disableForm();
    this._producto.getProductoById(this.idProducto).subscribe((data: any) => {
      if(data.success){
        this.producto = data.data;
        this.enableForm();
        return;
      }else{
        console.log(data);
        return;
      }
    },(error)=> {
      console.log(error);
    });
  }

  disableForm(){
    this.forma.controls['fnombre'].disable();
    this.forma.controls['fcategoria'].disable();
    this.forma.controls['fprecio'].disable();
    this.forma.controls['fdisponible'].disable();
    this.forma.controls['fdescripcion'].disable();
  }

  enableForm(){
    this.forma.controls['fcategoria'].enable();
    this.forma.controls['fprecio'].enable();
    this.forma.controls['fdisponible'].enable();
    this.forma.controls['fdescripcion'].enable();
  }

  modalImagen() {
    $('#imagenModal').modal('show'); 
  }

  archivoselect(event:FileList){
    // console.log(event[0]);
    this.file=event[0];
  }

  subirImagen() {
    if(this.file ===undefined){
        Swal.fire({
          title: '¡Error!',
          text: 'Ingrese Logotipo de la empresa',
          icon: 'error'
        });
        return;
      }
        Swal.fire({
        title: 'Espere',
        text: 'Registrando Informacion',
        icon: 'info',
        allowOutsideClick:false
      });
      Swal.showLoading();
      this._producto.addImagen(this.file,this.idProducto,this.producto.idEmpresa).subscribe((data: any)=> {
          // console.log(data);
          if(data.success){
            Swal.fire({
              title: 'Correcto!',
              text: 'Se Cargo la imagen correctamente',
              icon: 'success'
            }).then((result) => {
              Swal.close();
              $('#imagenModal').modal('hide'); 
              this.getImagenesPorProducto();
            });
            return;
          }else {
            Swal.fire({
              title: 'Error!',
              text: data.message,
              icon: 'error'
            }).then((result) => {
              Swal.close();
              $('#imagenModal').modal('hide'); 
              
            });
            return;
          }

      },(err:any) => {
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error'
        }).then((result) => {
          Swal.close();
          $('#imagenModal').modal('hide'); 
          
        });
        console.log(err);
        return;
      });
      

  }

  getImagenesPorProducto() {
    this._producto.getImagenesByProducto(this.idProducto).subscribe((data: any) => {
      if(data.success){
        this.imagenes = data.data;
        this.enableForm();
        return;
      }else{
        console.log(data);
        return;
      }
    },(error)=> {
      console.log(error);
    });
  }

  deleteImagen(idEmpresa: number, idProducto: number, imagen: string) {
    Swal.fire({
      title: 'Eliminando Imagen',
      text: 'Por Favor Espere',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    this._producto.deleteImagenProducto(idEmpresa,idProducto,imagen).subscribe((data: any) => {
      if(data.success){
        Swal.fire({
          title: 'Correcto!',
          text: 'Se Elimino la imagen correctamente',
          icon: 'success'
        }).then((result) => {
          Swal.close();
          this.getImagenesPorProducto();
        });
        return;
      }else {
        Swal.fire({
          title: 'Error!',
          text: data.message,
          icon: 'error'
        }).then((result) => {
          Swal.close();
          
        });
        return;
      }
    },(error) => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error'
      }).then((result) => {
        Swal.close();
        
      });
      console.log(error);
      return;
    })
  }


}
