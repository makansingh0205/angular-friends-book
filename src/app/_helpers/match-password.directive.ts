import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { FormValidationService } from '../services/form-validation.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchPasswordDirective,
    multi: true,
  }]
})
export class MatchPasswordDirective implements Validators{

  @Input("appMatchPassword") MatchPassword: string[] = [];

  constructor(private formValidation: FormValidationService) {}

  validate(control: AbstractControl): ValidationErrors | null {
    return this.formValidation.matchPassword( 
      this.MatchPassword[0],
      this.MatchPassword[1])(control);
  }
}
