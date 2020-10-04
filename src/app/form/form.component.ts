import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AssociateIdValidators } from './validators/associateId.validators';
import { AssociateNameValidators } from './validators/associateName.validators';
import { CommonValidators } from './validators/common.validators';
import { ProjectIdValidators } from './validators/projectId.validators';
import { SkillSetValidators } from './validators/skillSet.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form;
  locations;
  listOfLocations: string[];
  listOfSkills;
  listOfBool;








  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'associateName': ['', [CommonValidators.fieldRequired, AssociateNameValidators.checkLength, AssociateNameValidators.checkFormat]],
      'associateId': ['', [CommonValidators.fieldRequired, AssociateIdValidators.checkLength, AssociateIdValidators.checkFormat]],
      'projectId': ['', [CommonValidators.fieldRequired, ProjectIdValidators.checkLength, ProjectIdValidators.checkFormat]],
      'inlineRadioOptions': [''],
      'locationSelect': ['', CommonValidators.fieldRequired],
      'skillsList': formBuilder.array([], SkillSetValidators.checkNumSelected(5)),
      'fileSelect': ['', CommonValidators.fieldRequired],
      'commentsArea': ['', CommonValidators.fieldRequired]




    });

    this.locations = {
      'Onshore': ['US', 'Non US'],
      'Offshore': ['Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Kochi']
    };

    this.listOfSkills = ['HTML5,CSS3,JS', 'Angular 8', 'Express JS', 'SASS', 'React JS', 'Node JS', 'ES5,ES6,ES7...', 'Vue JS', 'Mongo DB', 'Bootstrap 4', 'TypeScript'];
    this.listOfBool = [false, false, false, false, false, false, false, false, false, false, false];



    this.populateSkills();
  }



  populateSkills() {
    this.listOfSkills.forEach(skill => {
      this.form.get('skillsList').push(new FormControl(this.listOfBool[this.listOfSkills.indexOf(skill)]));
    })



  }



  get associateName() {
    return this.form.get('associateName');

  }

  get associateId() {
    return this.form.get('associateId');

  }

  get projectId() {
    return this.form.get('projectId');

  }

  get locationSelect() {
    return this.form.get('locationSelect');
  }

  get fileSelect() {
    return this.form.get('fileSelect');
  }

  get commentsArea() {
    return this.form.get('commentsArea');
  }

  get skillsList() {
    return this.form.get('skillsList');
  }

  get inlineRadioOptions() {
    return this.form.get('inlineRadioOptions');
  }



  changeLocationsList(event) {

    this.listOfLocations = [...this.locations[event.target.value]];
  }

  clearAll() {
    this.form.reset();
  }

}
