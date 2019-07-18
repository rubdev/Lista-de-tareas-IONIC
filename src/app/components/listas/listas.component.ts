import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas.service';
import { Lista } from 'src/app/models/lista.model';
import { IonList, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor( public tareasService: TareasService, private router: Router, private alertController: AlertController ) { 
    console.log('-- Servicio inicializado --')
  }

  listaSeleccionada( lista: Lista ) {
    const idLista = lista.id;
    this.router.navigateByUrl(`${ this.router.url }/agregar/${ idLista }`);
  }

  borrarLista( lista: Lista ) {
    this.tareasService.borrarLista( lista );
  }

  async editarNombre( lista: Lista ) {
    console.log(lista);
    const alert = await this.alertController.create({
      header: 'Editar título',
      inputs: [
        {
          name: 'actualizado',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Título de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ( data ) => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: ( data ) => {
            console.log(data);
            if ( data.titulo.length > 0 ) {
              lista.titulo = data.actualizado;
              this.tareasService.guardarEnStorage();
              this.lista.closeSlidingItems();
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
