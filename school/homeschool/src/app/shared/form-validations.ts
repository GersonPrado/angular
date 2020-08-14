import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {
    
    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
            'required': `${fieldName} é obrigatório`,
            'pattern': 'Campo inválido'
        };
        return config[validatorName];
    }
}