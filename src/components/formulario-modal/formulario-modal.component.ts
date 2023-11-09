import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.css'],
})
export class FormularioModalComponent {
  formulario: FormGroup;
  paises: string[] = ['Selecciona un país', 'Argentina', 'Brasil', 'Chile', 'México'];

  constructor(
    public dialogRef: MatDialogRef<FormularioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      pais: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      activo: [false],
    });
  }

  guardar() {
    if (this.formulario.valid) {
      this.dialogRef.close(this.formulario.value);
    }
  }

  cerrar() {
    this.dialogRef.close();
  }
}
