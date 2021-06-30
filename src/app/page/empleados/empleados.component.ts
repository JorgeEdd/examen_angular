import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from '../table/table-datasource';

@Component({
  selector: 'empleados-root',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatTable) table?: MatTable<TableItem>;
  dataSource?: TableDataSource;

  displayedColumns = ['name', 'apellido', 'departamento', 'edad'];

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.paginator != null && this.sort != null && this.table != null) {
        console.log(localStorage.getItem("usuarios"))
        this.dataSource = JSON.parse(localStorage.getItem("usuarios")!);

        console.log(this.dataSource)
        //this.table.dataSource = this.dataSource;
      } else {
        throw 'Failed to init - missing depedencies.';
      }
    }, 0);
  }
}
