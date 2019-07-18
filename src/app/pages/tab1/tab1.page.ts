import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TareasService } from 'src/app/services/tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public tareasService: TareasService, private router: Router, private alertController: AlertController ) { }

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
              this.router.navigateByUrl(`${ this.router.url }/agregar/${ idLista }`);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
