import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations'
@Component({
  selector: 'app-field-valid-value',
  templateUrl: './field-valid-value.component.html',
  styleUrls: ['./field-valid-value.component.css']
})
export class FieldValidValueComponent implements OnInit {

  @Input() showError: boolean;
  @Input() messageError: string;

  constructor() { }

  ngOnInit(): void {
  }
}
