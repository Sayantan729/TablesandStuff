import { FormArray, ValidatorFn } from '@angular/forms';

export class SkillSetValidators {


    static checkNumSelected(minRequired): ValidatorFn {
        return function validate(formArray: FormArray) {
            return formArray.controls.filter(item => item.value).length < minRequired ? { requireCheckboxToBeChecked: true } : null;
        }

    }
}