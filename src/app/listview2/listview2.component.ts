import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarsdataService, car } from '../carsdata.service';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-listview2',
  templateUrl: './listview2.component.html',
  styleUrls: ['./listview2.component.css'],
})
export class Listview2Component implements OnInit {
  public id = '';
  CarsForm = new FormGroup({
    id: new FormControl(''),
    carname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    carmodel: new FormControl('', [Validators.required,]),
    type: new FormControl('', [Validators.required]),
    vvin: new FormControl('', [Validators.required]),
    vrm: new FormControl('', [Validators.required]),
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
        id: car.id,
        carname: car.carname,
        carmodel: car.carmodel,
        type: car.type,
        vvin: car.vvin,
        vrm: car.vrm,
      });
    } else {
      this.CarsForm.setValue({
        id: faker.datatype.uuid(),
        carname: '',
        carmodel: '',
        type: '',
        vvin: '',
        vrm: '',
      });
    }
  }
  /// new one
  save(): void {
    this._dtaa.oncreate(this.CarsForm.value as car);
    console.log(this.CarsForm.value);
  }

  /// update one
  update(): void {
    this._dtaa.onupdate(
      this.CarsForm.value as car,
      this.CarsForm.get('id').value
    );
  }
  delete(): void {
    this._dtaa.ondelete(this.CarsForm.get('id').value);
  }
}
