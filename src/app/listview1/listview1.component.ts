import { Component, OnInit } from '@angular/core';
import { CarsdataService } from '../carsdata.service';
@Component({
  selector: 'app-listview1',
  templateUrl: './listview1.component.html',
  styleUrls: ['./listview1.component.css'],
})
export class Listview1Component implements OnInit {
  public cardata = [];
  displayedColumns: string[] = ['carname', 'carmodel', 'type', 'vvin', 'vrm'];
  constructor(private _data: CarsdataService) {}

  ngOnInit() {
    this.cardata = this._data.Cars;
    console.log(this.cardata);
  }
}
