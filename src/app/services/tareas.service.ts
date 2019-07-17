import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listas: Lista[] = [];

  constructor() {
    const listaCompra = new Lista ( 'Lista de la compra' );
    const listaJuegos = new Lista ( 'Videojuegos que quiero jugar' );
    this.listas.push( listaCompra, listaJuegos );
    console.log(this.listas);
  }
}
