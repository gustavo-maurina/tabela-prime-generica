import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { TableConfig } from 'src/app/models/table-config.model';
import { TableHeaders } from 'src/app/models/table-headers.model';

@Component({
  selector: 'app-teste-tabela',
  templateUrl: './teste-tabela.component.html',
  styleUrls: ['./teste-tabela.component.scss'],
})
export class TesteTabelaComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  constructor() {}

  ngOnInit(): void {}

  tableHeaders: TableHeaders[] = [
    { title: 'Gênero', bindTo: 'gender', hasFilter: true },
    { title: 'E-mail' },
    { title: 'Rua' },
  ];

  valuesOrder = ['gender', 'email', 'location.street.name'];

  tableConfig: TableConfig = {
    headers: this.tableHeaders,
    urlToFetch: 'https://randomuser.me/api/?results=5',
    exportToFile: true,
    valuesOrder: this.valuesOrder,
  };
}
