/**
 * A ordem informada será a ordem exibida na tabela
 *
 * @title {String} Texto do header da coluna.
 *
 * @sortable {Boolean} Define se coluna pode ser organizada em ordem crescente
 * e decrescente.
 *
 * @hasFilter {Boolean} Define se coluna terá um filtro individual.
 *
 * @bindTo {String} Caso sortable ou hasFilter for TRUE,Indica qual propriedade
 * dos items este header irá organizar/filtrar.
 */
export interface TableHeaders {
  title: string;
  sortable?: boolean;
  hasFilter?: boolean;
  bindTo?: string;
}
