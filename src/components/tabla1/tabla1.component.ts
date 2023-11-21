import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioModalComponent } from '../formulario-modal/formulario-modal.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['pais', 'nombre', 'apellido', 'edad', 'genero', 'activo', 'Opciones'];

  constructor(public dialog: MatDialog) {}

  abrirModal() {
    const dialogRef = this.dialog.open(FormularioModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = [...this.dataSource.data, result];
      }
    });
  }

  editarUsuario(usuario: any): void {
    const dialogRef = this.dialog.open(FormularioModalComponent, {
      data: usuario,
    });

    dialogRef.afterClosed().subscribe(editedUser => {
      if (editedUser) {
        const index = this.dataSource.data.findIndex(i => i === usuario);
        this.dataSource.data[index] = editedUser;
        this.dataSource.data = [...this.dataSource.data];
      }
    });
  }

  eliminarUsuario(usuario: any): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este usuario?');
    
    if (confirmacion) {
      const index = this.dataSource.data.findIndex(i => i === usuario);
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
    }
  }
}
