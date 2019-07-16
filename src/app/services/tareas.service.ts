import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';


@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listas: Lista[];

  constructor() { }
}
