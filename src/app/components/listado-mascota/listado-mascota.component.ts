import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';


const listMascotas: Mascota[] = [
 {nombre:'Leia', edad: 3, raza: 'Golden', color:'Dorado', peso: 20},
 {nombre:'Gandalf', edad: 5, raza: 'Siberiano', color:'Gris', peso: 40},
 {nombre:'Lea', edad: 2, raza: 'Criolla', color:'Dorado', peso: 10},
 {nombre:'Joey', edad: 3, raza: 'Pinbal', color:'Blanco', peso: 10},
 {nombre:'Manjula', edad: 7, raza: 'Pastor Aleman', color:'Negra', peso: 25},
 {nombre:'Sussie', edad: 3, raza: 'Golden', color:'Dorado', peso: 20},
 {nombre:'Cristal', edad: 5, raza: 'Siberiano', color:'Gris', peso: 40},
 {nombre:'Mole', edad: 2, raza: 'Criolla', color:'Dorado', peso: 10},
 {nombre:'Martin', edad: 3, raza: 'Pinbal', color:'Blanco', peso: 10},
 {nombre:'Tomasa', edad: 7, raza: 'Pastor Aleman', color:'Negra', peso: 25}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar){}

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel='Items por página'
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  eliminarMascota() {
    this._snackBar.open('La mascota fue eliminada con éxito', '', {
      duration: 4000,
      horizontalPosition:"right"
    });      
    
  }
}
