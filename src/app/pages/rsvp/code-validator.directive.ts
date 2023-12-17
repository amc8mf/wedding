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
            const isValid = this.code === String(control.value).toLowerCase();
            return isValid ? null : { invalidCode: true };
        };
    }
}