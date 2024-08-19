import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  details = true;
  items: number[] = [];
  index = 0;
  maxNum = true;

  city:string = 'cairo';

  arrayStyle = {
    style: this.maxNum,
  };

  bgstyle = {
    'background-color': 'blue',
  };

  toggleDetails() {
    this.details = !this.details;
    this.index = ++this.index;
    this.items.push(this.index);
  }

  reset(){
    this.city='';
  }
}
