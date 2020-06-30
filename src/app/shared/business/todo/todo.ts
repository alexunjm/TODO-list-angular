export interface MongoItem {
  getId(): string;
}

export interface BasicItem {
  getName(): string;
  getDate(): Date;
  getCreatedAt(): Date;
  getUpdatedAt(): Date;
}

export interface SortableItem {
  getPriority(): number;
}

export interface MarkableItem {
  isCompleted(): boolean;
  setCompleted(val: boolean): void;
}

export interface EditableItem extends BasicItem, MarkableItem, SortableItem {
  setName(name: string): void;
  setDate(date: Date): void;
  setPriority(p: number): void;
  setCreatedAt(p: Date): void;
  setUpdatedAt(p: Date): void;
}

export interface ItemDeadline {
  isDueSoon(): boolean;
  isOverdue(): boolean;
}

export interface Item extends MongoItem, EditableItem, ItemDeadline {
  cloneToJson(copy?: boolean): any;
}

export class ToDoItem implements Item {
  id: string;
  name: string;
  priority: number;
  completed: boolean;
  date: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(data) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.priority = data.priority || 1;
    this.completed = data.completed || false;
    this.date = data.date ? new Date(data.date) : new Date();
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
  }

  getId(): string {
    return this.id;
  }

  setCreatedAt(date: Date): void {
    this.createdAt = date;
  }
  setUpdatedAt(date: Date): void {
    this.updatedAt = date;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getName(): string {
    return this.name;
  }
  getDate(): Date {
    return this.date;
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
    return !this.completed && (Date.now() - this.date.getTime()) < (1000 /* ms */ * 60 /* seg */ * 60/* min */);
  }
  isOverdue(): boolean {
    return !this.completed && Date.now() > this.date.getTime();
  }
  cloneToJson(copy = false) {
    const clone = {
      name: this.name,
      priority: this.priority,
      completed: this.completed,
      date: this.date,
    };
    return copy ? {id: this.id, ...clone} : clone;
  }
}
