import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { delay, of } from 'rxjs';

// PascalCase (Interface Classes)
// snake_case
// camelCase (functions, variables)

// interface Tarun<T1, T2> {
//   name: T1;
//   age: T2;
// }

// const abc: Tarun<string, number> = {
//   name: 0,
//   age: ''
// }

// interface CrudService {
//   list: (...args: any[]) => any;
//   create: (...args: any[]) => any;
//   update: (...args: any[]) => any;
//   delete: (...args: any[]) => any;
//   retrieve: (...args: any[]) => any;
// }

export interface car {
  id: string;
  carname: string;
  carmodel: string;
  type: string;
  vvin: string;
  vrm: string;
}

// type X = Partial<car>;
// type Scrap = Omit<car, 'type' | 'vvin' | 'vrm'>;

// type Pujan = car | Scrap;

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

  oncreate(car: car): void {
    this.Cars.push(car);
  }
  onupdate(car: car, id: string): void {
    let index = this.Cars.findIndex((val) => val.id === id);
    this.Cars.splice(index, 1, car);
    console.log(this.Cars);
  }
  ondelete(id: string) {
    let index = this.Cars.findIndex((val) => val.id === id);
    this.Cars.splice(index, 1);
  }
  checkIfUsernameExists(value: string, id: string) {
    return of(
      this.Cars.some((a) => {
        console.log(id);
        if (id != a.id) {
          return a.carname === value;
        } else {
          return false;
        }
      })
    ).pipe(delay(1000));
  }
}
