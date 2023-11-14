// tabla1.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioModalComponent,  } from '../formulario-modal/formulario-modal.component';


@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component {
  displayedColumns: string[] = ['pais', 'nombre', 'apellido', 'edad', 'genero', 'activo'];
  dataSource: any[] = [];

  constructor(public dialog: MatDialog) {}

  abrirModal() {
    const dialogRef = this.dialog.open(FormularioModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.push(result);
      }
    });
  }
}
