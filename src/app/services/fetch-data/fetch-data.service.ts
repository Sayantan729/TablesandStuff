import { Injectable } from '@angular/core';

export class Employee {
  constructor(
    private pic: string = '',
    private Id: number = null,
    private Name: string = '',
    private Skills: string = '',
    private Project: string = '',
    private HCM: string = ''
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private _data: Employee[];

  constructor() {
    this._data=[new Employee('male.png',873285,'Debjoy Bhowal','HTML5, CSS3, JS, Angular 8, Express JS, Node JS, ES5, ES6, ES7, Bootstrap 4, TypeScript','Interactive','Sarah Anthony')];
  }

  get data() {
    return this._data;
  }

  setData(emp) {
    this._data.push(emp);
  }
}
