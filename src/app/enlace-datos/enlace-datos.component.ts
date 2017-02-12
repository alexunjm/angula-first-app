import { Component } from '@angular/core';

@Component({
  selector: 'app-enlace-datos',
  templateUrl: './enlace-datos.component.html',
  styleUrls: ['./enlace-datos.component.css']
})
export class EnlaceDatosComponent {

  stringVar = 'así se pasan datos desde el componente';
  numberVar = 2;

  onTest() {
    return true;
  }

}
