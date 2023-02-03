import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarsdataService, car } from '../carsdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listview2',
  templateUrl: './listview2.component.html',
  styleUrls: ['./listview2.component.css'],
})
export class Listview2Component implements OnInit {
  public id = '';
  CarsForm = new FormGroup({
    carname: new FormControl(' '),
    carmodel: new FormControl(' '),
    type: new FormControl(' '),
    vvin: new FormControl(' '),
    vrm: new FormControl(' '),
  });

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private _dtaa: CarsdataService
  ) {}

  ngOnInit() {
    this.id = this.activerouter.snapshot.paramMap.get('id');

    if (this.id != '0') {
      console.log(this.id);
      const car = this._dtaa.retrive(this.id);

      this.CarsForm.setValue({
        carname: car.carname,
        carmodel: car.carmodel,
        type: car.type,
        vvin: car.vvin,
        vrm: car.vrm,
      });
    } else {
      this.CarsForm.setValue({
        carname: '',
        carmodel: '',
        type: '',
        vvin: '',
        vrm: '',
      });
    }
  }
  save(): void {
    // this._dtaa.onsave(val);
    console.log(this.CarsForm.value);
  }
  update(): void {
    // this._dtaa.onsave(val);
    console.log(this.CarsForm.value);
  }
}
