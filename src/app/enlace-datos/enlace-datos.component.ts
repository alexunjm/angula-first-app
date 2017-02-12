import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enlace-datos',
  templateUrl: './enlace-datos.component.html',
  styleUrls: ['./enlace-datos.component.css']
})
export class EnlaceDatosComponent {

  stringVar = 'así se pasan datos desde el componente';
  @Input() numberVar: number = 2;

  onTest() {
    return true;
  }

  // @Output() clicked = new EventEmitter<string>();
  @Output('clickable') clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('Esto funciona!');
  }

}
