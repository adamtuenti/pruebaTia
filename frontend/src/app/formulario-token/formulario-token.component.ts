import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario-token',
  templateUrl: './formulario-token.component.html',
  styleUrls: ['./formulario-token.component.css']
})
export class FormularioTokenComponent implements OnInit {
  respuesta : any;
  tiempo = 25;
  activarBoton = false;
  codigoUsuario = '';
  segundos = 25;
  cliente: any;
  malDigito = false;
  validado = false;

  constructor(private http: HttpClient, private router: Router, private activatedroute:ActivatedRoute, private config:NgbProgressbarConfig) {
    config.showValue=true,
    config.type="success",
    config.striped=true,
    config.animated=true

    // this.segundos = 25;
    setInterval(() => this.reloj(), 1000)
  }

  ngOnInit() {
    this.cliente = this.activatedroute.snapshot.paramMap.get("cliente");
    console.log('aqui')
    this.generarCodigo()


  
  }

  private reloj(): void{
    console.log(this.segundos)
    if(this.segundos != -1){
      if(--this.segundos < 0){
        this.segundos = 25;
        this.generarCodigo()
      }
    }
  }

  agregar(){
    console.log(this.codigoUsuario)
    if(this.codigoUsuario.length == 6){
        this.http.post<any>('http://127.0.0.1:8000/api/validarToken/', { tokenU: this.codigoUsuario, cliente: this.cliente}).subscribe({
          next: data => {
              console.log(data)
              alert(data)
              if(data == 'Token Valido'){
                this.validado = true;
                this.segundos = -1;
              }
          },
          error: error => {
              alert('Hubo un error')
              console.error('There was an error!', error);
          }
        })
        this.malDigito = false;
    }else{
      this.malDigito = true;
    }



     

  
    

  }

   
     

  generarCodigo(){
    

    this.http.post<any>('http://127.0.0.1:8000/api/generarToken/', { cliente: this.cliente }).subscribe({
        next: data => {
            this.respuesta = data.token
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })

  }





 

  

  
}

