import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email.validator';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true,
  }]
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];

  constructor() { }

 validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //console.log('validate', control.value);
    //console.log('domains', this.appEmail);

   const validatorFn = emailValidator(this.appEmail);
   return validatorFn(control);
 }

//validator: ValidatorFn = () => null;
//validate(control: AbstractControl<any, any>): ValidationErrors | null {
  //console.log('control', control);
  //return null;
  //return this.validator(control)
//}

  //ngOnChanges (changes: SimpleChange): void {
  //  const {currentvaue} = changes ['appEmail'];
  //  console.log ({ currentvaue});

  //if (currentvaue?.length){
  //this.validator = emailValidator(currentvaue)
  //}
}
