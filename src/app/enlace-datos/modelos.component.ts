import { Component } from '@angular/core';

@Component({
  selector: 'app-modelos',
  template: `
    <input type="text" [(ngModel)]="persona.nombre">
    <input type="text" [(ngModel)]="persona.edad">
  `,
  styles: []
})
export class ModelosComponent {

  persona = {
    nombre: 'Alexander',
    edad: 28
  }
}
