import { Component
  , OnInit 
  , OnChanges 
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy
  , ViewChild
} from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  template: `
    <ng-content></ng-content>
    <p #pSaludo>hola, soy alex</p>
    <p>{{pSaludo.textContent}}</p>
  `,
  styles: []
})
export class CicloVidaComponent implements 
  OnChanges 
  , OnInit
  , DoCheck
  , AfterContentInit
  , AfterContentChecked
  , AfterViewInit
  , AfterViewChecked
  , OnDestroy {

    @ViewChild('pSaludo') saludo: HTMLElement;

  constructor() { }

  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck() {
    this.log('ngDoCheck');
  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
    console.log(this.saludo);
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
