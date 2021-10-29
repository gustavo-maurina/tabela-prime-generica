import { HttpClient } from '@angular/common/http';
import {
  Component,
  ViewChild,
  OnInit,
  Input,
  AfterContentInit,
} from '@angular/core';
import { Table } from 'primeng/table';
import { TableConfig } from '../../../models/table-config.model';
import { exportExcel } from '../../utils/table-export-functions';

@Component({
  selector: 'generic-prime-table',
  templateUrl: './generic-prime-table.component.html',
  styleUrls: ['./generic-prime-table.component.scss'],
})
export class GenericPrimeTableComponent implements OnInit, AfterContentInit {
  @Input() tableConfig!: TableConfig;
  @ViewChild('dt') table!: Table;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    this.fetchTableItems(this.tableConfig.urlToFetch);
  }

  tableItems = [];
  globalFilterFields: Array<string> = [];

  fetchTableItems(url: string) {
    this.http.get(url).subscribe((response: any) => {
      let values = response.results;
      this.tableItems = values;
      this.setGlobalFilterFields();
      console.log(this.tableItems);
    });
  }

  setGlobalFilterFields() {
    if (this.tableConfig)
      this.globalFilterFields = Object.keys(this.tableItems[0]);
  }

  hasNestedValue(index: string) {
    if (index.split('.').length > 1) return true;
    return false;
  }

  getNestedValue(item: any, index: string) {
    let stripedIndex: Array<String> = index.split('.');
    let nestedValue = item[String(stripedIndex[0])];
    stripedIndex.splice(0, 1);

    stripedIndex.forEach((index) => {
      nestedValue = nestedValue[String(index)];
    });

    return nestedValue;
  }

  getItemValue(item: any, index: any) {
    if (!this.hasNestedValue(index)) return item[index];
    else return this.getNestedValue(item, index);
  }

  handleGlobalFilterChange(e: any) {
    let evento = e as HTMLInputElement;
  }

  handleFilterChange(e: any) {
    let filters = e.filters;
    console.log(filters);
  }

  exportAsXls() {
    exportExcel(
      this.tableItems,
      this.tableConfig.headers,
      this.tableConfig.valuesOrder
    );
  }

  clearTableFilters(table: Table) {
    table.clear();
  }
}
