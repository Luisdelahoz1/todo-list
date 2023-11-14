import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.css'],
})
export class FormularioModalComponent {
  paises: string[] = ['Colombia', 'Argentina', 'Brasil', 'Chile', 'México'];

  formulario: FormGroup;

  checked = true;
  indeterminate = true;
  labelPosition: 'Activo' | 'after' = 'after';
  disabled = true;
  checkedActivo = false;
  checkedInactivo = false;

  constructor(
    public dialogRef: MatDialogRef<FormularioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder

  ) {
    this.formulario = this.fb.group({
      pais: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, this.validarEdadNoNegativa]],
      genero: ['', Validators.required],
      activo: [false],
      inactivo: [false],
    });
  }

  toggleActivo() {
    this.checkedActivo = !this.checkedActivo;
    this.formulario.get('activo').setValue(this.checkedActivo);
  }

  toggleInactivo() {
    this.checkedInactivo = !this.checkedInactivo;
    this.formulario.get('inactivo').setValue(this.checkedInactivo);
  }

  validarEdadNoNegativa(control: AbstractControl): { [key: string]: any } | null {
    const edad = control.value;
    if (edad < 0) {
      return { 'edadNegativa': true };
    }
    return null; 
  }

  guardar() {
    if (this.formulario.valid) {
      this.dialogRef.close(this.formulario.value);
      console.log('Guardando datos:', this.formulario.value);
    }
  }

  cerrar() {
    console.log('Cerrando el diálogo sin guardar.');
    this.dialogRef.close();
  }
}