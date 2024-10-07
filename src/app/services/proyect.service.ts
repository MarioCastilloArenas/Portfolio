import { Injectable } from '@angular/core';
import { Proyect } from '../models/proyect';
import { proyects } from '../data/proyect.data'; //importado desde data para recuperar el array de productos

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor() { }

  findAll(): Proyect[]{
    return proyects;
  }
}