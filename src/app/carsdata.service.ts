import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

interface car {
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
        carname: faker.vehicle.vehicle(),
        carmodel: faker.vehicle.model(),
        type: faker.vehicle.type(),
        vvin: faker.vehicle.vin(),
        vrm: faker.vehicle.vrm(),
      };
    }
    Array.from({ length: 10000 }).forEach(() => {
      this.Cars.push(createcardata());
    });
    console.log('hsgdgh');
  }
}
