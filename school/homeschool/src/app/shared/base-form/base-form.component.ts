import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export abstract class BaseFormComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit (): void {
  }

  abstract submit();

  onSubmit () {
    if (this.formGroup.valid) {
      this.submit()
    } else {
      console.log('Formulário inválido')
      this.validForm(this.formGroup)
    }
  }

  validForm (formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo)
      controle.markAsDirty()
      controle.markAsTouched()
      if (controle instanceof FormGroup || controle instanceof FormArray ) {
        this.validForm(controle)
      }
    })
  }

  applyCssError (field: string) {
    console.log('applycsserror')
    return {
      'has-error': this.validTouched(field),
      'has-feedback': this.validTouched(field)
    }
  }

  validTouched(field: string) {
    return (
      !this.formGroup.get(field).valid && (this.formGroup.get(field).touched || this.formGroup.get(field).dirty)
    )
  }

  formReset() {
    this.formGroup.reset();
  }

}
