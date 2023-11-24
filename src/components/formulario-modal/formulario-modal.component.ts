import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.css'],
})
export class FormularioModalComponent {
  
  paises: string[] = ['Colombia', 'Argentina', 'Brasil', 'Chile', 'México', 'Venezuela'];

  formulario: FormGroup;



  constructor(

    public dialogRef: MatDialogRef<FormularioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar

  ) {

    this.formulario = this.fb.group({

      pais: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: [null, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0)]],
      genero: ['', Validators.required],
      activo: [false],
     
    });
  }

  ngOnInit() {
    if (this.data && this.data.usuario) {
      this.formulario.patchValue(this.data.usuario);
    }
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

      this._snackBar.open( 'usuario guardado con exito', '',   {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }
  }

  cerrar() {
    this.formulario.markAllAsTouched();
    this.dialogRef.close();
  }

}