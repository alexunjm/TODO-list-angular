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

export interface MarkableItem {
  isCompleted(): boolean;
}

export interface ItemDeadline {
  isDueSoon(): boolean;
  isOverdue(): boolean;
}

export interface Item extends BasicItem, MongoItem, SortableItem, MarkableItem, ItemDeadline {
  cloneToJson(): any;
}

export class ToDoItem implements Item {
  id: string;
  name: string;
  priority: number;
  completed: boolean;
  date: Date;

  constructor(data) {
    this.id = data._id;
    this.name = data.name;
    this.priority = data.priority;
    this.completed = data.completed;
    this.date = data.date;
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
  isCompleted(): boolean {
    return this.completed;
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
    }
  }
}
