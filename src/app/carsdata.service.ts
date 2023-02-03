import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export interface car {
  id: string;
  carname: string;
  carmodel: string;
  type: string;
  vvin: string;
  vrm: string;
}

@Injectable()
export class CarsdataService {
  public Cars: car[] = [];

  constructor() {
    function createcardata(): car {
      return {
        id: faker.datatype.uuid(),
        carname: faker.vehicle.vehicle(),
        carmodel: faker.vehicle.model(),
        type: faker.vehicle.type(),
        vvin: faker.vehicle.vin(),
        vrm: faker.vehicle.vrm(),
      };
    }
    Array.from({ length: 10 }).forEach(() => {
      this.Cars.push(createcardata());
    });
 
  }

  retrive(uuid: string): car {
    var result = this.Cars.find((o) => o.id === uuid);
    return result;
  }

  onsave(car:car):void{
    this.Cars.push(car);
  }
  // onupdate(car:car,id):void{

  // }
}
