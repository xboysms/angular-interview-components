import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  isStart: boolean = false;
  @Output() startEvent: any = new EventEmitter();
  startNumber: number = 0;
  intervalId: any;

  start() {
    this.isStart = !this.isStart;

    if (this.isStart) {
      this.intervalId = setInterval(() => {
        if (this.startNumber < 100) this.startNumber += 1;
        this.startEvent.emit(this.startNumber);
      }, 1000)
    }

    if (!this.isStart) {
      this.startNumber = 0;
      this.startEvent.emit(this.startNumber);
      clearInterval(this.intervalId);
    }
  }
}
