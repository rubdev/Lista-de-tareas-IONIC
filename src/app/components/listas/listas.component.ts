import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { Lista } from 'src/app/models/lista.model';
import { IonList } from '@ionic/angular';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor( public tareasService: TareasService, private router: Router ) { 
    console.log('-- Servicio inicializado --')
  }

  listaSeleccionada( lista: Lista ) {
    const idLista = lista.id;
    this.router.navigateByUrl(`${ this.router.url }/agregar/${ idLista }`);
  }

  borrarLista( lista: Lista ) {
    this.tareasService.borrarLista( lista );
  }

}
