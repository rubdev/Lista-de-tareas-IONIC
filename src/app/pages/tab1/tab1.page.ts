import { Component } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public tareasService: TareasService, private router: Router, private alertController: AlertController ) {
    console.log('-> Servicio tareas inicializado');
  }

  async aNuevaLista() {
      const alert = await this.alertController.create({
        header: 'Nueva lista',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            placeholder: 'Título de la lista'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Guardar',
            handler: ( data ) => {
              console.log(data);
              if ( data.titulo.length > 0 ) {
                const idLista = this.tareasService.crearLista( data.titulo );
                this.router.navigateByUrl(`/tabs/tab1/agregar/${ idLista }`);
              }
            }
          }
        ]
      });
  
      await alert.present();
  }

}
