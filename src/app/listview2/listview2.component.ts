import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsdataService, car } from '../carsdata.service';
@Component({
  selector: 'app-listview2',
  templateUrl: './listview2.component.html',
  styleUrls: ['./listview2.component.css'],
})
export class Listview2Component implements OnInit {
public car=[];
  constructor(
    private activerouter: ActivatedRoute,
    private _dtaa: CarsdataService
  ) {}

  ngOnInit() {
    let id = this.activerouter.snapshot.paramMap.get('id');
    this.car.push(this._dtaa.retrive(id))
    console.log(this.car);
  }
}
