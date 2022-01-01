import { Component, Input} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface'


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{
  @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 150
  }

  // personajes: Personaje[] = [
  //   {
  //       nombre: 'Goku',
  //     poder: 50000
  //   },
  //   {
  //     nombre: 'Krilin',
  //     poder: 250
  //   }

  // ]
  constructor() { }

  ngOnInit(): void {
  }

  agregar( event: any){
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
    //event.preventDefault()
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
