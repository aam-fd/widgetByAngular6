import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {

  @Input()
  public product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
