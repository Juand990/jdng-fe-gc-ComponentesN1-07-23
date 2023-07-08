import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ComponentesN1';
  nombre: string | number | undefined;
  cif: string | number | undefined;
  direccion: string | number | undefined;
  grupo: string | number | undefined=1;
  clientes:any = [];

  constructor() {}

  guardar(){
    this.clientes.push({
      nombre:this.nombre,
      cif:this.cif,
      direccion:this.direccion,
      grupo:this.grupo}); 
    }                         
}
