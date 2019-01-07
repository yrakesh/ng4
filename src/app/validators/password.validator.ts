import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
export class PasswordValidator {
    static isIncorrectOLDPWD(control: AbstractControl): ValidationErrors | null {
        if(control.value !== '1234') {
            return { isIncorrectOLDPWD: true }
        }
        return null;
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPWD = control.get('newPWD');
        let cnfPWD = control.get('cnfPWD');

        if(newPWD.value !== cnfPWD.value){
            return { passwordsShouldMatch : true}
        }
        return null;
    }
}