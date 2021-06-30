import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableDataSource, TableItem } from '../table/table-datasource';
import { MatSnackBar  } from '@angular/material/snack-bar';

@Component({
  selector: 'formulario-root',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open("Guardado correctamente");
  }

  ngOnInit(): void {



    if(localStorage.getItem("usuarios") != null){
      this.listaUsuarios = JSON.parse(localStorage.getItem("usuarios")!);

    }
    console.log(this.listaUsuarios);
    
  }
  dataSource?: TableDataSource;
  title = 'empleados';

  toppings = new FormControl();

  toppingList: string[] = ['Contabilidad', 'Marketing ', 'Sistemas '];

  usuario = {
    nombre: "",
    apellido: "",
    departamento: "",
    edad: ""
  }

  listaUsuarios:any[] = []

  Enviar(){ console.log(this.usuario)
    this.listaUsuarios.push(this.usuario)
    localStorage.setItem("usuarios",JSON.stringify(this.listaUsuarios))
    this.openSnackBar();
    this.usuario = {
      nombre: "",
      apellido: "",
      departamento: "",
      edad: ""
    }
  }

}
