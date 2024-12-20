import { ValidatorFn } from '@angular/forms';

export function passMatch(passCntrl: string, rePassCntrl: string): ValidatorFn {
  return (control) => {
    const pass = control.get(passCntrl);
    const rePass = control.get(rePassCntrl);
    const areMatch = pass?.value == rePass?.value;
    return areMatch ? null : { passMatch: true };
  };
}