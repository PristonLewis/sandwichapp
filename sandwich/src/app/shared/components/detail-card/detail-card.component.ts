import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.sass']
})
export class DetailCardComponent implements OnInit {

  constructor() { }
  @Input() header: string;
  @Input() cartItems: Array<any>;
  @Output() removeCardEvent = new EventEmitter();
  ngOnInit() {
  }

  public remove(index): void {
    console.log('index', index);
    this.removeCardEvent.emit(index);
  }

}
