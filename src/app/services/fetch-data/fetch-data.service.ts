import { Injectable } from '@angular/core';

export class Employee {
  constructor(
    public pic: string = '',
    public Id: number = null,
    public Name: string = '',
    public Skills: string = '',
    public Project: string = '',
    public HCM: string = ''
  ) {}
}
@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private _data: Employee[];

  constructor() {
    this._data = [];
  }

  get data() {
    return this._data;
  }

  setData(emp) {
    this._data.push(emp);
  }
}
