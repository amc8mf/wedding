import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
    selector: '[codeValidator]',
    providers: [
        {
        provide: NG_VALIDATORS,
        useExisting: CodeValidatorDirective,
        multi: true,
        },
    ],
    standalone: true,
})

export class CodeValidatorDirective implements Validator {
    private readonly code = 'silver-fox';
  
    validate(control: AbstractControl): ValidationErrors | null {
      return this.codeValidator()(control);
    }

    private codeValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            console.log(control.value);
            const isValid = this.code === control.value;
            return isValid ? null : { invalidCode: true };
        };
    }
}