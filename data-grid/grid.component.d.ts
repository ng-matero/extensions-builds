import { OnInit, EventEmitter, OnChanges, TemplateRef, TrackByFunction, OnDestroy } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort, MatSort } from '@angular/material/sort';
import { MtxGridColumn, MtxGridColumnSelectionItem, MtxGridCellTemplate, MtxGridRowSelectionFormatter, MtxGridRowClassFormatter } from './grid.interface';
import { MtxGridCellSelectionDirective } from './cell-selection.directive';
import { MtxGridExpansionToggleDirective } from './expansion-toggle.directive';
import { MtxGridService } from './grid.service';
export declare class MtxGridComponent implements OnInit, OnChanges, OnDestroy {
    private _dataGridSrv;
    paginator: MatPaginator;
    sort: MatSort;
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[];
    columns: MtxGridColumn[];
    data: any[];
    length: number;
    loading: boolean;
    trackBy: TrackByFunction<any>;
    /** Whether to show tooltip on columns */
    tooltip: boolean;
    /** Whether to page on the front end */
    pageOnFront: boolean;
    showPaginator: boolean;
    pageDisabled: boolean;
    showFirstLastButtons: boolean;
    pageIndex: number;
    pageSize: number;
    pageSizeOptions: number[];
    hidePageSize: boolean;
    page: EventEmitter<PageEvent>;
    /** Sort */
    sortOnFront: boolean;
    sortChange: EventEmitter<Sort>;
    /** Hover & Striped style */
    rowHover: boolean;
    rowStriped: boolean;
    /** Expandable row */
    expansionRowStates: any[];
    expandable: boolean;
    expansionTemplate: TemplateRef<any>;
    expansionChange: EventEmitter<any>;
    /** Whether support multiple row/cell selection */
    multiSelectable: boolean;
    /** Row selection */
    rowSelection: SelectionModel<any>;
    rowSelected: any[];
    rowSelectable: boolean;
    hideRowSelectionCheckbox: boolean;
    rowSelectionFormatter: MtxGridRowSelectionFormatter;
    rowClassFormatter: MtxGridRowClassFormatter;
    rowSelectionChange: EventEmitter<any[]>;
    /** Cell selection */
    cellSelection: any[];
    cellSelectable: boolean;
    cellSelectionChange: EventEmitter<any[]>;
    private _selectedCell;
    /** Toolbar */
    showToolbar: boolean;
    toolbarTitle: string;
    toolbarTemplate: TemplateRef<any>;
    columnMenuData: MtxGridColumnSelectionItem[];
    showColumnMenuButton: boolean;
    columnMenuButtonText: string;
    columnMenuButtonType: string;
    columnMenuButtonColor: string;
    columnMenuButtonClass: string;
    columnMenuButtonIcon: string;
    columnHideable: boolean;
    columnHidingChecked: 'show' | 'hide';
    columnHidingChange: EventEmitter<string[]>;
    columnMovable: boolean;
    columnMovingChange: EventEmitter<string[]>;
    columnPinnable: boolean;
    columnPinningChange: EventEmitter<string[]>;
    /** No Result */
    noResultText: string;
    noResultTemplate: TemplateRef<any>;
    get hasNoResult(): boolean;
    /** thead */
    headerTemplate: TemplateRef<any> | MtxGridCellTemplate;
    /** tbody */
    cellTemplate: TemplateRef<any> | MtxGridCellTemplate;
    /** tfoot */
    showSummary: boolean;
    summaryTemplate: TemplateRef<any> | MtxGridCellTemplate;
    get whetherShowSummary(): boolean;
    /** Sidebar */
    showSidebar: boolean;
    getColData(data: any, colDef: MtxGridColumn): any;
    formatSummary(summary: any, data: any, colDef: MtxGridColumn): any;
    constructor(_dataGridSrv: MtxGridService);
    isTemplateRef(obj: any): boolean;
    isString(fn: any): boolean;
    isFunction(fn: any): boolean;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    countPinnedPosition(): void;
    isOddRow(index: number, dataIndex: number): number;
    getIndex(index: number, dataIndex: number): number;
    handleSortChange(sort: Sort): void;
    /** Expansion change event */
    handleExpansionChange(expansionRef: MtxGridExpansionToggleDirective, rowData: any, column: any, index: number): void;
    /** Cell select event */
    handleCellSelect(cellRef: MtxGridCellSelectionDirective, rowData: any, colDef: any): void;
    /** Row select event */
    handleRowSelect(event: MouseEvent, rowData: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    handleMasterToggle(): void;
    /** Select single row */
    handleSingleToggle(row: any): void;
    /** Column change event */
    handleColumnHidingChange(columns: string[]): void;
    handleColumnMovingChange(columns: string[]): void;
    /** Customize expansion event */
    toggleExpansion(index: number): any;
}
