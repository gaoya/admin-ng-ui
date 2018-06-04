/***
 * tab 的默认设置
 */
export class TableSet {
  private _dataSet = [];
  // 是否显示边框
  private _bordered = true;
  private _loading = false;
  private _pagination = true;
  private _header = true;
  // 是否显示tab的标题
  private _title = false;
  // 是否显示tab的底部
  private _footer = false;
  private _fixHeader = true;
  private _size = 'small';
  private _expandable = true;
  private _checkbox = true;
  private _allChecked = false;
  private _indeterminate = false;
  private _noResult = '没有数据';
  private _displayData = [];
  private _total = 1;
  private _pageIndex = 1;
  private _pageSize = 10;


  get dataSet(): any[] {
    return this._dataSet;
  }

  set dataSet(value: any[]) {
    this._dataSet = value;
  }

  get bordered(): boolean {
    return this._bordered;
  }

  set bordered(value: boolean) {
    this._bordered = value;
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  get pagination(): boolean {
    return this._pagination;
  }

  set pagination(value: boolean) {
    this._pagination = value;
  }

  get header(): boolean {
    return this._header;
  }

  set header(value: boolean) {
    this._header = value;
  }

  get title(): boolean {
    return this._title;
  }

  set title(value: boolean) {
    this._title = value;
  }

  get footer(): boolean {
    return this._footer;
  }

  set footer(value: boolean) {
    this._footer = value;
  }

  get fixHeader(): boolean {
    return this._fixHeader;
  }

  set fixHeader(value: boolean) {
    this._fixHeader = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get expandable(): boolean {
    return this._expandable;
  }

  set expandable(value: boolean) {
    this._expandable = value;
  }

  get checkbox(): boolean {
    return this._checkbox;
  }

  set checkbox(value: boolean) {
    this._checkbox = value;
  }

  get allChecked(): boolean {
    return this._allChecked;
  }

  set allChecked(value: boolean) {
    this._allChecked = value;
  }

  get indeterminate(): boolean {
    return this._indeterminate;
  }

  set indeterminate(value: boolean) {
    this._indeterminate = value;
  }

  get noResult(): string {
    return this._noResult;
  }

  set noResult(value: string) {
    this._noResult = value;
  }

  get displayData(): any[] {
    return this._displayData;
  }

  set displayData(value: any[]) {
    this._displayData = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  set pageIndex(value: number) {
    this._pageIndex = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }
}
