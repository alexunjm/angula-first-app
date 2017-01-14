import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  template: `
    <p>
      hola!
    </p>
  `,
  styles: []
})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
