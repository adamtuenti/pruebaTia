import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import * as countdown from 'countdown'; 

// import {Observable} from '@reactivex/rxjs/es6/Observable.js

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bases';
  respuesta : any;
  tiempo = 10;
  activarBoton = false;
  codigoUsuario: any;
  // minutos: number;
  segundos: number;

  constructor(private http: HttpClient, private router: Router) { 
    // this.minutos = 5;
    this.segundos = 15;
    setInterval(() => this.reloj(), 1000)
  }

  private reloj(): void{
    if(--this.segundos < 1){
      // this.segundos = 15;
      this.segundos = 15;
      this.generarCodigo()
    }
    // console.log(this.minutos, this.segundos)
  }

  agregar(){
    console.log(this.codigoUsuario)

    this.router.navigate(['/', 'verificacion',{nombre:"Amazonia"}]);

     this.http.post<any>('http://127.0.0.1:8000/analizarToken/', { tokenU: this.codigoUsuario, token: this.respuesta }).subscribe({
        next: data => {
            console.log(data)
            alert(data)
        },
        error: error => {
            alert('Hola')
            console.error('There was an error!', error);
        }
    })

  
    

  }

   
     

  generarCodigo(){
    
    let date = new Date();
    
    

    let response = fetch('http://127.0.0.1:8000/token/', {
        method: 'GET',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
        },
        }) .then(response=>response.json())
        
        .then(response=>{ 
          this.respuesta = response.codigo
          
    
          console.log(response.codigo)

        })
        
        .catch((error) => {
            alert(JSON.stringify(error));
            console.log('mal')

        });
  }

  restar1(){
    this.tiempo = this.tiempo - 1
    console.log(this.tiempo)
 
  }



 
  // function repeat(){
  //   //   if (++ this.i > 10){ 
  //   //     console.log('chao')};
  //   //     setTimeout(function(){
  //   //       // tiempo -= 1;
  //   //       this.repeat();
  //   //     }, 1000);
  //   // }
  // }()
    


  ngOnInit() {
    this.generarCodigo()
//      let i = 0;
// (function repeat(){
//   if (++i > 5) return;
//   setTimeout(function(){
   

//      let response = fetch('http://127.0.0.1:8000/token/', {
//         method: 'GET',
//         headers: {
//            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
//         },
//         }) .then(response=>response.json())
        
//         .then(response=>{ 
//           //this.respuesta = response.codigo
          
    
//             console.log(response.codigo)

//         })
        
//         .catch((error) => {
//             alert(JSON.stringify(error));
//             console.log('mal')

//         });

//     console.log("Iteration: " + i);
 
//     repeat();
//   }, 5000);
// })();
  
    

    
    


  //   this.http.get<any>('http://127.0.0.1:8000/').subscribe({
  //       next: data => {
  //           // this.totalAngularPackages = data.total;
  //           console.log(data)
  //       },
  //       // error: error => {
  //       //     this.errorMessage = error.message;
  //       //     console.error('There was an error!', error);
  //       // }
  // })

  
  }

  
}
