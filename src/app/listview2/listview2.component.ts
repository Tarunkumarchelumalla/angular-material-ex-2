import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarsdataService, car } from '../carsdata.service';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-listview2',
  templateUrl: './listview2.component.html',
  styleUrls: ['./listview2.component.css'],
})
export class Listview2Component implements OnInit {
  public id = '';
  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private _dtaa: CarsdataService
  ) {

  }

  CarsForm = new FormGroup({
    id: new FormControl(''),
    carname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(10),
    ],[unique(this._dtaa)]),
    carmodel: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    vvin: new FormControl('', [
      Validators.required,
      customValidatorwithpara(2000),
    ]),
    vrm: new FormControl('', [Validators.required]),
  });

 

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
function customValidatorwithpara(customval: number) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const val: string = control.value;

    if (parseInt(val) === 0 || parseInt(val) <= customval) {
      return null;
    } else {
      return { valwithpara: true };
    }
  };
}
function unique(userService: CarsdataService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return userService
      .checkIfUsernameExists(control.value)
      .pipe(
        map((result: boolean) =>
          result ? { usernameAlreadyExists: true } : null
        )
      );
  };
}
