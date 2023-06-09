import { Injectable } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  validateAllFormFields(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof UntypedFormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (
        control instanceof UntypedFormGroup ||
        control instanceof UntypedFormArray
      ) {
        control.markAsTouched({ onlySelf: true });
        this.validateAllFormFields(control);
      }
    });
  }

  getFieldErrorMessage(formGroup: FormGroup, fieldName: string): string {
    const field = formGroup.get(fieldName) as FormControl;
    return this.getErrorMessageFromField(field);
  }

  getFieldFormArrayErrorMessage(
    formGroup: FormGroup,
    formArrayName: string,
    fieldName: string,
    index: number
  ) {
    const formArray = formGroup.get(formArrayName) as UntypedFormArray;
    return this.getErrorMessageFromField(
      formArray.controls[index].get(fieldName) as UntypedFormControl
    );
  }

  getErrorMessageFromField(field: UntypedFormControl): string {
    if (field?.hasError('required')) {
      return 'Campo obrigatório.';
    }

    if (field?.hasError('maxlength') && field.errors) {
      const requiredLength = field.errors['maxlength']['requiredLength'];
      return `Campo não pode ser maior que ${requiredLength} caracteres.`;
    }

    if (field?.hasError('minlength') && field.errors) {
      const requiredLength = field.errors['minlength']['requiredLength'];
      return `Campo não pode ser menor que ${requiredLength} caracteres.`;
    }

    if (field?.hasError('invalidDateRange') && field.errors) {
      return `Campo Data Final não pode ser anterior ao campo Data Inicial.`;
    }

    return field['errors'] ? 'Error' : '';
  }

  isFormArrayRequired(formGroup: UntypedFormGroup, fieldName: string) {
    const field = formGroup.get(fieldName) as UntypedFormControl;
    return !field.valid && field.hasError('required') && field.touched;
  }
}