import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
   }

  crearLista( titulo: string ) {
    const nuevaLista = new Lista ( titulo );
    this.listas.push( nuevaLista );
    this.guardarEnStorage();
    return nuevaLista.id;
  }

  cargarLista( id: number | string ) {
    let idLista: number = Number(id);
    return this.listas.find( datosLista => datosLista.id === idLista );
  }

  borrarLista( lista: Lista ) {
    const index = this.listas.indexOf( lista );
    this.listas.splice( index, 1);
    this.guardarEnStorage();
  }

  guardarEnStorage() {
    localStorage.setItem( 'datos', JSON.stringify(this.listas) );
  }

  cargarStorage() {
    if ( localStorage.getItem( 'datos' ) ) {
      this.listas = JSON.parse( localStorage.getItem( 'datos' ) );
    }
  }

}
