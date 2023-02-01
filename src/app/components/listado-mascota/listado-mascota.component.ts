import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';


const listMascotas: Mascota[] = [
 {nombre:'Leia', edad: 3, raza: 'Golden', color:'Dorado', peso: 20},
 {nombre:'Gandalf', edad: 5, raza: 'Siberiano', color:'Gris', peso: 40},
 {nombre:'Lea', edad: 2, raza: 'Criolla', color:'Dorado', peso: 10},
 {nombre:'Joey', edad: 3, raza: 'Pinbal', color:'Blanco', peso: 10},
 {nombre:'Manjula', edad: 7, raza: 'Pastor Aleman', color:'Negra', peso: 25},
 {nombre:'Leia1', edad: 3, raza: 'Golden', color:'Dorado', peso: 20},
 {nombre:'Gandalf1', edad: 5, raza: 'Siberiano', color:'Gris', peso: 40},
 {nombre:'Lea1', edad: 2, raza: 'Criolla', color:'Dorado', peso: 10},
 {nombre:'Joey1', edad: 3, raza: 'Pinbal', color:'Blanco', peso: 10},
 {nombre:'Manjula1', edad: 7, raza: 'Pastor Aleman', color:'Negra', peso: 25}
];

@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(){}

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel='Items por página'
  }
}
