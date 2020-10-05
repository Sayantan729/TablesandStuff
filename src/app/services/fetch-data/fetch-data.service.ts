import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private _data = [
    {
      pic: 'male.png',
      Id: 123456,
      Name: 'John',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Alex',
    },
    {
      pic: 'male.png',
      Id: 123457,
      Name: 'Aubrey',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Simon',
    },
    {
      pic: 'female.png',
      Id: 123458,
      Name: 'Perry',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Conah',
    },
    {
      pic: 'male.png',
      Id: 123459,
      Name: 'Lyndon',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Jac',
    },
    {
      pic: 'female.png',
      Id: 123461,
      Name: 'Marcie',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Zayne',
    },
    {
      pic: 'female.png',
      Id: 123462,
      Name: 'Terence',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Conah',
    },
    {
      pic: 'male.png',
      Id: 123463,
      Name: 'John',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Anushka',
    },
    {
      pic: 'male.png',
      Id: 123464,
      Name: 'Aubrey',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Simon',
    },
    {
      pic: 'female.png',
      Id: 123465,
      Name: 'Perry',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Conah',
    },
    {
      pic: 'male.png',
      Id: 123466,
      Name: 'Lyndon',
      Skills: 'ReactJS, Angular, JS',
      Project: 'Cognizant Internal',
      HCM: 'Jac',
    },
  ];

  constructor() {}

  get data() {
    return this._data;
  }

  setData(emp)
  {
    this._data.push(emp);
  }
}
