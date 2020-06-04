import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') doughnutChartData: number[] = [];
  @Input('type') doughnutChartType: string = '';
  @Input('grafica') grafica: any ={};
  dato:boolean = false;

  constructor() { 
    console.log('constructor', this.grafica);
  }

  ngOnInit() {
    this.dato = true;
    console.log('init', this.grafica);

  }

}
