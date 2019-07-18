import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lita-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {

  lista: Lista;
  nuevoItem: string;

  constructor( private tareasService: TareasService, private route: ActivatedRoute ) { 
    const idLista = this.route.snapshot.paramMap.get('idLista');
    this.lista = this.tareasService.cargarLista( idLista );
    console.log(this.lista.id);
  }

  agregarItem() {
    if ( this.nuevoItem.length > 0 ) {
      const nuevo = new ListaItem( this.nuevoItem );
      this.lista.items.push( nuevo );
      this.nuevoItem = '';
      this.tareasService.guardarEnStorage();
    }
  }

  cambioEstado( item: ListaItem ) {
    const pendientes = this.lista.items.filter ( datos => !datos.completado ).length;
    if ( pendientes === 0 ) {
      this.lista.terminadaEl = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEl = null;
      this.lista.terminada = false;
    }
    this.tareasService.guardarEnStorage();
  }

  eliminarItem( indice: number ) {
    this.lista.items.splice( indice, 1);
    this.tareasService.guardarEnStorage();
  }

}
