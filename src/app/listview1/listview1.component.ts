import { Component, OnInit } from '@angular/core';
import { CarsdataService } from '../carsdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listview1',
  templateUrl: './listview1.component.html',
  styleUrls: ['./listview1.component.css'],
})
export class Listview1Component implements OnInit {
  public cardata = [];
  displayedColumns: string[] = ['carname', 'carmodel', 'type', 'vvin', 'vrm'];
  constructor(private _data: CarsdataService, private router: Router) {}
  public carretrive = [];
  ngOnInit() {
    this.cardata = this._data.Cars;
    console.log(this.cardata);
  }
  onclick(val) {
    // console.log(this._data.retrive(id));
    this.router.navigate(['/child2', val.id]);
  }
}
