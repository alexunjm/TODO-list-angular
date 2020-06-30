import { AbstractFactory } from './../business/abstract-factory';
import { Item } from '../business';

const types = {
  BOOLEAN: '[object Boolean]',
  NUMBER: '[object Number]',
  STRING: '[object String]',
  DATE: '[object Date]',
};

const compareHelper = (x: any, y: any) => {
  try {
    const typeX = Object.prototype.toString.call(x);
    if (typeX !== Object.prototype.toString.call(y)) { return 0; }

    switch (typeX) {
      case types.BOOLEAN:
        return ((a: boolean, b: boolean): number => a && b ? 0 : (a ? -1 : 1))(x, y);

      case types.NUMBER:
        return ((a: number, b: number): number => a - b)(x, y);

      case types.STRING:
        return ((a: string, b: string): number => a < b ? -1 : 1)(x, y);

      case types.DATE:
        return ((a: Date, b: Date): number => a.getTime() - b.getTime())(x, y);

      default:
        return 0;
    }
  } catch (error) {
    console.log('compareHelper -> error', {error});
    return 0;
  }
};


export abstract class TaskListAbstract {

  constructor(public factory: AbstractFactory) {
  }

  abstract getAll(): Promise<Item[]>;

  abstract createToDo(elm: any, list2Update: Array<Item>): Promise<Item>;

  abstract getToDoById(elmId: string, list: Array<Item>): Promise<Item>;

  abstract updateToDo(elm: any, list2Update: Array<Item>): Promise<number>;

  abstract deleteToDoById(elmId: string, list2Update: Array<Item>): Promise<number>;

  public createEmptyToDo(): Item {
    return this.factory.createItem({});
  }

  public sortItemList(list: Item[], sortCol: string = 'updatedAt') {
    if (list.length === 0) { return list; }

    const [col, multiplier] = sortCol.split('|');
    const scale = multiplier ? Number(multiplier) : 1;
    return list.sort((a: Item, b: Item) => compareHelper(a.cloneToJson()[col], b.cloneToJson()[col]) * scale);
  }
}
