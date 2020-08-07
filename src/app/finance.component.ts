import { Component, Input } from '@angular/core';

@Component({
  selector: 'finance',
  template: `<h1>Finance {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class FinanceComponent  {
  @Input() name: string;
}