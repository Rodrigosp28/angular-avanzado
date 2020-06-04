import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress',{static:false}) txtprogress:ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda ', this.leyenda);
    // console.log('progreso ', this.progreso);
   }

  ngOnInit() {
    // console.log('leyenda ', this.leyenda);
    // console.log('progreso ', this.progreso);
  }

  cambios (newValue: number) {
    
    // let elemHTML: any =document.getElementsByName('progreso')[0];

    if ( newValue>100){
      this.progreso=100;
    }
    else if(newValue<=0){
      this.progreso = 0;
    }else if(newValue===null){
      this.progreso = 0;
    }
    else {
      this.progreso=newValue;

    }

    // elemHTML.value = Number(this.progreso);
    this.txtprogress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
    this.txtprogress.nativeElement.focus();
    
  }

  cambiarValor(valor){
    
    if((this.progreso+ valor)>100){
      this.progreso = 100;
      this.cambioValor.emit(this.progreso);
      return;
    }
    if((this.progreso+ valor)<0){
      this.progreso = 0;
      this.cambioValor.emit(this.progreso);
      return;
    }
    this.progreso = this.progreso+ valor;
    this.cambioValor.emit(this.progreso);
    this.txtprogress.nativeElement.focus();
  }

}
