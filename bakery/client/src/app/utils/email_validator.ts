import { ValidatorFn } from "@angular/forms";

export const EMAIL_DOMAINS = ['bg', 'com'];

export function emailValidator(domains: string[]): ValidatorFn {
    // [A-Za-z0-9]+@gmail.(com|bg)
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+(@gmail|@abv)\.(${domainString})`);
    return (control: { value: any; }) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value);
        return isEmailInvalid? null : { emailValidator: true };
    }
}