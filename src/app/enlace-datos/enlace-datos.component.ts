import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enlace-datos',
  templateUrl: './enlace-datos.component.html',
  styleUrls: ['./enlace-datos.component.css']
})
export class EnlaceDatosComponent {

  stringVar = 'así se pasan datos desde el componente';
  @Input() numberVar: number = 2;
  @Output() clicked = new EventEmitter<string>();

  onTest() {
    return true;
  }

  onClicked() {
    this.clicked.emit('Esto funciona!');
  }

}
