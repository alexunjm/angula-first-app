import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  template: `
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: []
})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
