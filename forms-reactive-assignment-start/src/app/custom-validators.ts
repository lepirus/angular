import { FormControl } from '@angular/forms';

export class CustomValidators {
  static forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'projectIsForbidden': true};
    }
    return null;
  }
}
