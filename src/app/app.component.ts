import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(model)">
      <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'FirstName',
      type: 'input',
      defaultValue: 'Mohammad',
      templateOptions: {
        label: 'FirstName',
        placeholder: 'Enter your FirstName',
        description: 'Max lengh: 8',
        maxLength:8,
        required: true,
      },
    },
    {
      key: 'LasttName',
      type: 'input',
      defaultValue: 'Alimohammad',
      templateOptions: {
        label: 'LasttName',
        placeholder: 'Enter your LasttName',
        description: 'Max lengh: 8',
        maxLength:8,
        required: true,
      },
    },
    {
      key: 'User',
      type: 'input',
      templateOptions: {
        label: 'User',
        placeholder: 'Enter your UserName',
        description: 'Max lengh: 8',
        maxLength:8,
        required: true,
      },
    },
    {
      key: 'Password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Enter your Password',
        description: 'Lengh: 8 to 16',
        minLength:8,
        maxLength:16,
        required: true,
      },
    },
    {
      key: 'PassportId',
      type: 'input',
      templateOptions: {
        label: 'Passport Id',
        placeholder: 'Enter your Passport Id',
        description: 'Max lengh: 10',
        maxLength:10,
        required: true,
        
      },
    },
    {
      key: 'MarriageStatus',
      type: 'radio',
      templateOptions: {
        label: 'Marriage status',
        required: true,
        options: [
          { value: 1, label: 'Marrid' },
          { value: 2, label: 'Single' },
        ],
      },
    },
    {
      key: 'SpousePassportId',
      type: 'input',
      templateOptions: {
        label:'Spouse Passport Id',
        placeholder: 'Enter your spouse Passport Id',
        description: 'Max lengh: 10',
        maxLength:10,
        required:true,
      },
      hideExpression: '!modle.SpousePassportId',
    },
    {
      key: 'Religion',
      type: 'select',
      templateOptions: {
        label: 'Religion',
        placeholder: 'Choose',
        description: 'Select what you want...',
        required: true,
        multiple: true,
        selectAllOption: 'Select All',
        options: [
          { value: 1, label: 'Shia' },
          { value: 2, label: 'Sunni'  },
          { value: 3, label: 'Christian'  },
        ],
      },
    },
  ];
  
  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
  Reset(){
    this.Reset
  }
}

