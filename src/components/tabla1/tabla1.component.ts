import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormularioModalComponent } from '../formulario-modal/formulario-modal.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-tabla1',
  templateUrl: './tabla1.component.html',
  styleUrls: ['./tabla1.component.css']
})
export class Tabla1Component {

  col_1: string[] = ['pais', 'nombre', 'apellido', 'edad', 'genero', 'activo'];
  col_2: string[] = [...this.col_1, 'acciones'];

  dataSource = new MatTableDataSource<any>([]);

  constructor(public dialog: MatDialog) {
    
  }

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
    data: { modo: 'editar', usuario: usuario },
    width: '400px',
  });
  
    dialogRef.afterClosed().subscribe(editedUser => {
      if (editedUser) {
        const index = this.dataSource.data.findIndex(u => u === usuario);
        this.dataSource.data[index] = editedUser;
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  eliminarUsuario(usuario: any): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este usuario?');
    
    if (confirmacion) {
      const index = this.dataSource.data.findIndex(u => u === usuario);
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }
}
