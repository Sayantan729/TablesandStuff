import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AssociateNameValidators {

    static checkLength(control: AbstractControl): ValidationErrors | null {
        if (control.value !== null) {
            if ((control.value as string).length < 5 || (control.value as string).length > 30)
                return { 'lengthNotProper': true };
            return null;
        }
        return { 'lengthNotProper': true };
    }

    static checkFormat(control: AbstractControl): ValidationErrors | null {
        let regex = new RegExp(/^[a-zA-Z ]*$/)
        if (control.value !== null) {
            if (!regex.test(control.value as string))
                return { 'formatNotProper': true };
            return null;
        }
        return { 'formatNotProper': true };

    }

}