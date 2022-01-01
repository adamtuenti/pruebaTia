import { Component, OnInit } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  personajes: Personaje[] = [
    {
        nombre: 'Goku',
      poder: 50000
    },
    {
      nombre: 'Krilin',
      poder: 250
    }

  ]
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
