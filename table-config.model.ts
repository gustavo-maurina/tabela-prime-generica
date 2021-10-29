import { TableHeaders } from './table-headers.model';

/**
 * @headers {Array<TableHeaders>} Array com headers da tabela.
 *
 * @items {Array} Array com items que vão preencher a tabela.
 *
 * @urlToFetch {String} Url para buscar itens que serão exibidos;
 *
 * @valuesOrder {Array} Array com strings equivalentes a propriedades dos items
 * retornados na request, para definir a ordem que serão exibidos na tabela.
 * Obs: também aceita valores aninhados. Ex: "*pessoa.contato.email*"
 *
 * @exportToFile {Booleans} Define se a tabela poderá exportar dados para
 * arquivos (PDF, XLS, etc).
 */
export interface TableConfig {
  headers: Array<TableHeaders>;
  urlToFetch: string;
  valuesOrder: Array<string>;
  exportToFile?: boolean;
}
