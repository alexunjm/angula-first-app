import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlace-datos',
  templateUrl: './enlace-datos.component.html',
  styleUrls: ['./enlace-datos.component.css']
})
export class EnlaceDatosComponent implements OnInit {

  stringVar = 'así se pasan datos desde el componente';
  numberVar = 2;

  constructor() { }

  ngOnInit() {
  }

}
