import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableDataSource, TableItem } from '../table/table-datasource';

@Component({
  selector: 'formulario-root',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
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
  }

}
