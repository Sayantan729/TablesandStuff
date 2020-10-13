import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AssociateIdValidators } from './validators/associateId.validators';
import { AssociateNameValidators } from './validators/associateName.validators';
import { CommonValidators } from './validators/common.validators';
import { ProjectIdValidators } from './validators/projectId.validators';
import { SkillSetValidators } from './validators/skillSet.validators';
import {
  FetchDataService,
  Employee,
} from './../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form;
  locations;
  listOfLocations: string[];
  listOfSkills;
  listOfBool;

  constructor(formBuilder: FormBuilder, private fetchData: FetchDataService) {
    this.form = formBuilder.group({
      associateName: [
        '',
        [CommonValidators.fieldRequired, AssociateNameValidators.checkFormat],
      ],
      associateId: [
        '',
        [
          CommonValidators.fieldRequired,
          AssociateIdValidators.checkLength,
          AssociateIdValidators.checkFormat,
        ],
      ],
      projectName: [
        '',
        [CommonValidators.fieldRequired, ProjectIdValidators.checkFormat],
      ],
      inlineRadioOptions: [''],

      skillsList: formBuilder.array([], SkillSetValidators.checkNumSelected(5)),
      
      hcmName: [
        '',
        [CommonValidators.fieldRequired, AssociateNameValidators.checkFormat],
      ],
    });

    this.listOfSkills = [
      'HTML5, CSS3, JS',
      'Angular 8',
      'Express JS',
      'SASS',
      'React JS',
      'Node JS',
      'ES5, ES6, ES7',
      'Vue JS',
      'Mongo DB',
      'Bootstrap 4',
      'TypeScript',
    ];
    this.listOfBool = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];

    this.populateSkills();
  }

  populateSkills() {
    this.listOfSkills.forEach((skill) => {
      this.form
        .get('skillsList')
        .push(
          new FormControl(this.listOfBool[this.listOfSkills.indexOf(skill)])
        );
    });
  }

  get associateName() {
    return this.form.get('associateName');
  }

  get associateId() {
    return this.form.get('associateId');
  }

  get projectName() {
    return this.form.get('projectName');
  }

  get fileSelect() {
    return this.form.get('fileSelect');
  }

  get skillsList() {
    return this.form.get('skillsList');
  }

  get inlineRadioOptions() {
    return this.form.get('inlineRadioOptions');
  }

  get hcmName() {
    return this.form.get('hcmName');
  }

  submitAll() {
    console.log(this.form.value);
    let val = this.form.value;
    let data = new Employee(
      (val['inlineRadioOptions'] as string).toLowerCase() + '.png',
      val['associateId'],
      val['associateName'],
      this.listOfSkills
        .filter((item, index) => val['skillsList'][index])
        .join(', '),
      val['projectName'],
      val['hcmName']
    );
    this.fetchData.setData(data);
    this.clearAll();
  }

  clearAll() {
    this.form.reset();
  }
}
