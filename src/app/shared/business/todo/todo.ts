export interface BasicItem {
  getName(): string;
  getDate(): Date;
}

export interface MongoItem {
  getId(): string;
}

export interface SortableItem {
  getPriority(): number;
}

export interface EditableItem extends BasicItem, SortableItem {
  setName(name: string): void;
  setDate(date: Date): void;
  setPriority(p: number): void;
}

export interface MarkableItem {
  isCompleted(): boolean;
  setCompleted(val: boolean): void;
}

export interface ItemDeadline {
  isDueSoon(): boolean;
  isOverdue(): boolean;
}

export interface Item extends MongoItem, EditableItem, MarkableItem, ItemDeadline {
  cloneToJson(): any;
}

export class ToDoItem implements Item {
  id: string;
  name: string;
  priority: number;
  completed: boolean;
  date: Date;

  constructor(data) {
    this.id = data._id || '';
    this.name = data.name || '';
    this.priority = data.priority || 1;
    this.completed = data.completed || false;
    this.date = data.date || new Date();
  }

  getName(): string {
    return this.name;
  }
  getDate(): Date {
    return this.date;
  }
  getId(): string {
    return this.id;
  }
  getPriority(): number {
    return this.priority;
  }
  setName(name: string): void {
    this.name = name;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  setPriority(p: number): void {
    this.priority = p;
  }
  isCompleted(): boolean {
    return this.completed;
  }
  setCompleted(val: boolean): void {
    this.completed = val;
  }
  isDueSoon(): boolean {
    return (Date.now() - this.date.getTime()) < (1000 /* ms */ * 60 /* seg */ * 60/* min */);
  }
  isOverdue(): boolean {
    return Date.now() > this.date.getTime();
  }
  cloneToJson() {
    return {
      // _id: this.id,
      name: this.name,
      priority: this.priority,
      completed: this.completed,
      date: this.date,
    };
  }
}
