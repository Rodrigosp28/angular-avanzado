import { DisponibleP } from '../catalogos/disponibleP.model';
import { CategoriaP } from '../catalogos/categoriaP.model';
export class Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  idDisponible: number;
  disponible: DisponibleP;
  idEmpresa: number;
  idCategoria: number;
  categoria: CategoriaP;
}