import { ValidatorFn } from '@angular/forms';

export const EMAIL_DOMAINS = ['bg', 'com'];

export function emailValidator(domains: string[]): ValidatorFn {
  const domainString = domains.join('|');
  const regExp = new RegExp(`[A-Za-z0-9]+(@gmail|@abv)\.(${domainString})`);

  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);
    return isEmailInvalid ? null : { emailValidator: true };
  };
}