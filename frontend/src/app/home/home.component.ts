import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombreUsuario: any;
  
  constructor(private http: HttpClient, private router: Router) { 

  }

    

  ingresarNombre(){
    this.router.navigate(['/', 'verificacion',{cliente: this.nombreUsuario}]);
  }



  ngOnInit() {
  
  }


}
