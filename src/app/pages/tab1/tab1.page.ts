import { Component } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( _tareasService: TareasService ) {
    console.log('-> Servicio tareas inicializado');
    
  }

}
