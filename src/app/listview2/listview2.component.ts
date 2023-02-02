import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarsdataService, car } from '../carsdata.service';

@Component({
  selector: 'app-listview2',
  templateUrl: './listview2.component.html',
  styleUrls: ['./listview2.component.css'],
})
export class Listview2Component implements OnInit {
  public car = [];

  CarsForm: FormGroup;
  constructor(
    private activerouter: ActivatedRoute,
    private _dtaa: CarsdataService
  ) {}

  ngOnInit() {
    let id = this.activerouter.snapshot.paramMap.get('id');
    this.car.push(this._dtaa.retrive(id));
    console.log(this.car);

    this.CarsForm = new FormGroup({
      carname: new FormControl(this.car['carname']),
      carmodel: new FormControl(this.car['carmodel']),
      type: new FormControl(this.car['type']),
      vvin: new FormControl(this.car['vvin']),
      vrm: new FormControl(this.car['vrm']),
    });
  }
}
