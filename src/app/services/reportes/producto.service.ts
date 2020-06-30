import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Producto } from '../../models/reportes/producto.model';
import { ImagenP } from '../../models/reportes/imagenP.model';

@Injectable({
  providedIn:'root'
})
export class ProductoService {

  url = `${environment.APIEndpoint}/api/producto`;

  constructor(private http: HttpClient){


  }

  getProductoByEmpresa(id: number){
    const uri = `${this.url}/${id}/ByEmpresa`;
    return this.http.get(uri).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }))
  }

  getProductoById(id: number){
    const uri = `${this.url}/${id}`;
    return this.http.get(uri).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }))
  }

  postProducto(producto: Producto){
    const uri = `${this.url}`;
    const body = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      idDisponible: Number(producto.idDisponible),
      idEmpresa: producto.idEmpresa,
      idCategoria: Number(producto.idCategoria)
    };
    // console.log(body);
    return this.http.post(uri,body).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }));
  }

  putProducto(id:number,producto: Producto){
    const uri = `${this.url}/${id}`;
    const body = {
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      idDisponible: Number(producto.idDisponible),
      idEmpresa: producto.idEmpresa,
      idCategoria: Number(producto.idCategoria)
    };
    // console.log(body);
    return this.http.put(uri,body).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }));
  }

  addImagen(file: File, idProducto: number,idEmpresa: number) {

    const uri = `${this.url}/imagen`;
    const formData = new FormData();
    formData.append('file',file);
    formData.append('idProducto',idProducto.toString());
    formData.append('idEmpresa',idEmpresa.toString());

    return this.http.post(uri,formData).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }))
    
  }

  getImagenesByProducto (id: number) {
    const uri = `${this.url}/imagen/${id}/byproducto`;
    return this.http.get(uri).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }))
  }

  deleteImagenProducto (idEmpresa: number, idProducto: number, imagen: string) {
    const uri = `${this.url}/imagen/${idEmpresa}/${idProducto}/${imagen}`;
    return this.http.delete(uri).pipe(map((resp: any) => {
      return resp;
    }),catchError((error) => {
      return throwError(error);
    }));
  }

}