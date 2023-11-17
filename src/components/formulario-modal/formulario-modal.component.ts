import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.css'],
})
export class FormularioModalComponent {
  paises: string[] = ['Colombia', 'Argentina', 'Brasil', 'Chile', 'México', 'Venezuela'];

  formulario: FormGroup;
  guardadoExitoso = false;


  constructor(
    public dialogRef: MatDialogRef<FormularioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder

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


  validarEdadNoNegativa(control: AbstractControl): { [key: string]: any } | null {
    const edad = control.value;
    if (edad < 0) {
      return { 'edadNegativa': true };
    }
    return null; 
  }

  guardar() {
    if (this.formulario.valid) {
      this.guardadoExitoso = true;
      setTimeout(() => {
        this.guardadoExitoso = false;
      }, 3000); 
    }
  }


  cerrar() {
    this.dialogRef.close();
  }

  
  ngOnInit() {
  
  }

}