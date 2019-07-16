export class Lista {

    id: number;
    titulo: string;
    creadaEl: Date;
    terminadaEl: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo: string ) {
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.creadaEl = new Date();
        this.terminada = false;
        this.items = [];
    }
}