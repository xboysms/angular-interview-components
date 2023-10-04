import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  username: string = "";

  detailInput: string = "";
  detailList: any[] = [];
  isGreen: boolean = false;

  add() {
    const included: boolean = this.detailList.includes(this.detailInput);
    if(!included) this.detailList.push(this.detailInput);
    this.detailInput = '';
  }

  changeBackground() {
    this.isGreen = !this.isGreen;
  }

  startNumber: number = 0;
  oddNumber: number = 0;
  evenNumber: number = 0;
  startEvent(event: any) {
    this.startNumber = event;

    if(event % 2 == 0) this.evenNumber = event;
    if(event % 2 !== 0) this.oddNumber = event;

    if(event == 0) {this.evenNumber = 0; this.oddNumber = 0;}
  }
}
