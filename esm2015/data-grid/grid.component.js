/**
 * @fileoverview added by tsickle
 * Generated from: grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, TemplateRef, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MtxGridService } from './grid.service';
export class MtxGridComponent {
    /**
     * @param {?} _dataGridSrv
     */
    constructor(_dataGridSrv) {
        this._dataGridSrv = _dataGridSrv;
        this.columns = [];
        this.data = [];
        this.length = 0;
        this.loading = false;
        /**
         * Whether to show tooltip on columns
         */
        this.tooltip = true;
        /**
         * Whether to page on the front end
         */
        this.pageOnFront = true;
        this.showPaginator = true;
        this.pageDisabled = false;
        this.showFirstLastButtons = true;
        this.pageIndex = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [10, 50, 100];
        this.hidePageSize = false;
        this.page = new EventEmitter();
        /**
         * Sort
         */
        this.sortOnFront = true;
        this.sortChange = new EventEmitter();
        /**
         * Hover & Striped style
         */
        this.rowHover = false;
        this.rowStriped = false;
        /**
         * Expandable row
         */
        this.expansionRowStates = [];
        this.expandable = false;
        this.expansionChange = new EventEmitter();
        /**
         * Whether support multiple row/cell selection
         */
        this.multiSelectable = true;
        /**
         * Row selection
         */
        this.rowSelection = new SelectionModel(true, []);
        this.rowSelected = [];
        this.rowSelectable = false;
        this.hideRowSelectionCheckbox = false;
        this.rowSelectionFormatter = {};
        this.rowClassFormatter = {};
        this.rowSelectionChange = new EventEmitter();
        /**
         * Cell selection
         */
        this.cellSelection = [];
        this.cellSelectable = true;
        this.cellSelectionChange = new EventEmitter();
        /**
         * Toolbar
         */
        this.showToolbar = false;
        this.toolbarTitle = '';
        this.columnMenuData = [];
        this.showColumnMenuButton = true;
        this.columnMenuButtonText = '';
        this.columnMenuButtonType = 'stroked';
        this.columnMenuButtonColor = '';
        this.columnMenuButtonClass = '';
        this.columnMenuButtonIcon = '';
        this.columnHideable = true;
        this.columnHidingChecked = 'show';
        this.columnHidingChange = new EventEmitter();
        this.columnMovable = true;
        this.columnMovingChange = new EventEmitter();
        this.columnPinnable = true;
        this.columnPinningChange = new EventEmitter();
        /**
         * No Result
         */
        this.noResultText = 'No records found';
        /**
         * tfoot
         */
        this.showSummary = false;
        /**
         * Sidebar
         */
        this.showSidebar = false;
    }
    /**
     * @return {?}
     */
    get hasNoResult() {
        return (!this.data || this.data.length === 0) && !this.loading;
    }
    // TODO:
    /**
     * @return {?}
     */
    get whetherShowSummary() {
        return this.showSummary;
    }
    /**
     * @param {?} data
     * @param {?} colDef
     * @return {?}
     */
    getColData(data, colDef) {
        return data.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item[colDef.field]));
    }
    /**
     * @param {?} summary
     * @param {?} data
     * @param {?} colDef
     * @return {?}
     */
    formatSummary(summary, data, colDef) {
        if (this.isString(summary)) {
            return summary;
        }
        else if (this.isFunction(summary)) {
            /** @type {?} */
            const colData = this.getColData(data, colDef);
            return summary(colData, colDef);
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isTemplateRef(obj) {
        return obj instanceof TemplateRef;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    isString(fn) {
        return Object.prototype.toString.call(fn) === '[object String]';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    isFunction(fn) {
        return Object.prototype.toString.call(fn) === '[object Function]';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    // Waiting for async data
    /**
     * @return {?}
     */
    ngOnChanges() {
        var _a;
        this.countPinnedPosition();
        this.displayedColumns = this.columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.hide)).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.field));
        if (this.showColumnMenuButton) {
            this.columnMenuData = this.columns.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    label: (/** @type {?} */ (item.header)),
                    field: item.field,
                    show: !item.hide,
                    hide: item.hide,
                    disabled: item.disabled,
                };
            }));
        }
        if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
            this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
        }
        // We should copy each item of data for expansion data
        if (this.expandable) {
            this.expansionRowStates = []; // reset
            (_a = this.data) === null || _a === void 0 ? void 0 : _a.forEach((/**
             * @param {?} _
             * @return {?}
             */
            _ => {
                this.expansionRowStates.push({ expanded: false });
            }));
        }
        // TODO:
        this.dataSource = new MatTableDataSource(this.data);
        if (this.pageOnFront) {
            this.dataSource.paginator = this.paginator;
        }
        if (this.sortOnFront) {
            this.dataSource.sort = this.sort;
        }
        if (this.rowSelectable) {
            this.rowSelection = new SelectionModel(this.multiSelectable, this.rowSelected);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    countPinnedPosition() {
        /** @type {?} */
        const count = (/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc + parseFloat(cur.width || '80px'));
        /** @type {?} */
        const pinnedLeftCols = this.columns.filter((/**
         * @param {?} col
         * @return {?}
         */
        col => col.pinned && col.pinned === 'left'));
        pinnedLeftCols.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => {
            item.left = pinnedLeftCols.slice(0, idx).reduce(count, 0) + 'px';
        }));
        /** @type {?} */
        const pinnedRightCols = this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        col => col.pinned && col.pinned === 'right'))
            .reverse();
        pinnedRightCols.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => {
            item.right = pinnedRightCols.slice(0, idx).reduce(count, 0) + 'px';
        }));
    }
    /**
     * @param {?} index
     * @param {?} dataIndex
     * @return {?}
     */
    isOddRow(index, dataIndex) {
        return typeof index === 'undefined' ? dataIndex % 2 : index % 2;
    }
    /**
     * @param {?} index
     * @param {?} dataIndex
     * @return {?}
     */
    getIndex(index, dataIndex) {
        return typeof index === 'undefined' ? dataIndex : index;
    }
    /**
     * @param {?} sort
     * @return {?}
     */
    handleSortChange(sort) {
        this.sortChange.emit(sort);
    }
    /**
     * Expansion change event
     * @param {?} expansionRef
     * @param {?} rowData
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    handleExpansionChange(expansionRef, rowData, column, index) {
        if (this.expandable) {
            this.expansionRowStates[index].expanded = !this.expansionRowStates[index].expanded;
        }
        this.expansionChange.emit({ opened: expansionRef.expended, data: rowData, index, column });
    }
    /**
     * Cell select event
     * @param {?} cellRef
     * @param {?} rowData
     * @param {?} colDef
     * @return {?}
     */
    handleCellSelect(cellRef, rowData, colDef) {
        // If not the same cell
        if (this._selectedCell !== cellRef) {
            /** @type {?} */
            const colValue = this._dataGridSrv.getCellValue(rowData, colDef);
            this.cellSelection = []; // reset
            this.cellSelection.push({ cellData: colValue, rowData, colDef });
            this.cellSelectionChange.emit(this.cellSelection);
            if (this._selectedCell) {
                this._selectedCell.unselect(); // the selectedCell will be undefined
            }
        }
        this._selectedCell = cellRef.selected ? cellRef : undefined;
    }
    /**
     * Row select event
     * @param {?} event
     * @param {?} rowData
     * @return {?}
     */
    handleRowSelect(event, rowData) {
        if (this.rowSelectable &&
            !(this.rowSelectionFormatter.disabled && this.rowSelectionFormatter.disabled(rowData)) &&
            !(this.rowSelectionFormatter.hideCheckbox && this.rowSelectionFormatter.hideCheckbox(rowData))) {
            // metaKey -> command key
            if (!event.ctrlKey && !event.metaKey) {
                this.rowSelection.clear();
            }
            this.handleSingleToggle(rowData);
        }
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.rowSelection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    handleMasterToggle() {
        this.isAllSelected()
            ? this.rowSelection.clear()
            : this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.rowSelection.select(row)));
        this.rowSelectionChange.emit(this.rowSelection.selected);
    }
    /**
     * Select single row
     * @param {?} row
     * @return {?}
     */
    handleSingleToggle(row) {
        this.rowSelection.toggle(row);
        this.rowSelectionChange.emit(this.rowSelection.selected);
    }
    /**
     * Column change event
     * @param {?} columns
     * @return {?}
     */
    handleColumnHidingChange(columns) {
        this.columnHidingChange.emit(columns);
        this.displayedColumns = Object.assign([], columns);
        if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
            this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
        }
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    handleColumnMovingChange(columns) {
        this.columnMovingChange.emit(columns);
        this.displayedColumns = Object.assign([], columns);
        if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
            this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
        }
    }
    /**
     * Customize expansion event
     * @param {?} index
     * @return {?}
     */
    toggleExpansion(index) {
        if (!this.expandable) {
            throw new Error('The `expandable` should be set true.');
        }
        this.expansionRowStates[index].expanded = !this.expansionRowStates[index].expanded;
        return this.expansionRowStates[index].expanded;
    }
}
MtxGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'mtx-grid',
                exportAs: 'mtxGrid',
                template: "<!-- Progress Bar-->\r\n<mat-progress-bar class=\"mtx-grid-progress\" mode=\"indeterminate\" *ngIf=\"loading\"></mat-progress-bar>\r\n\r\n<!-- Toolbar -->\r\n<div class=\"mtx-grid-toolbar\" *ngIf=\"showToolbar\">\r\n  <div class=\"mtx-grid-toolbar-title\" *ngIf=\"toolbarTitle\">{{toolbarTitle}}</div>\r\n  <div class=\"mtx-grid-toolbar-template\">\r\n    <ng-template [ngIf]=\"toolbarTemplate\">\r\n      <ng-template [ngTemplateOutlet]=\"toolbarTemplate\"></ng-template>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"mtx-grid-toolbar-actions\">\r\n    <mtx-grid-column-menu *ngIf=\"showColumnMenuButton\"\r\n                          [columns]=\"columnMenuData\"\r\n                          [buttonText]=\"columnMenuButtonText\"\r\n                          [buttonType]=\"columnMenuButtonType\"\r\n                          [buttonColor]=\"columnMenuButtonColor\"\r\n                          [buttonClass]=\"columnMenuButtonClass\"\r\n                          [buttonIcon]=\"columnMenuButtonIcon\"\r\n                          [selectable]=\"columnHideable\"\r\n                          [selectedType]=\"columnHidingChecked\"\r\n                          [sortable]=\"columnMovable\"\r\n                          (selectionChange)=\"handleColumnHidingChange($event)\"\r\n                          (sortChange)=\"handleColumnMovingChange($event)\">\r\n    </mtx-grid-column-menu>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mtx-grid-main mtx-grid-layout\">\r\n  <!-- Table Content -->\r\n  <div class=\"mtx-grid-content mtx-grid-layout\">\r\n    <table mat-table\r\n           [ngClass]=\"{'mat-table-hover': rowHover, 'mat-table-striped': rowStriped, 'mat-table-expandable': expandable}\"\r\n           [dataSource]=\"dataSource\" [multiTemplateDataRows]=\"expandable\"\r\n           matSort (matSortChange)=\"handleSortChange($event)\" [trackBy]=\"trackBy\">\r\n\r\n      <ng-container *ngIf=\"rowSelectable && !hideRowSelectionCheckbox\"\r\n                    matColumnDef=\"MtxGridCheckboxColumnDef\">\r\n        <th mat-header-cell *matHeaderCellDef class=\"mtx-grid-checkbox-cell\">\r\n          <mat-checkbox *ngIf=\"multiSelectable\"\r\n                        [checked]=\"rowSelection.hasValue() && isAllSelected()\"\r\n                        [indeterminate]=\"rowSelection.hasValue() && !isAllSelected()\"\r\n                        (change)=\"$event ? handleMasterToggle() : null\">\r\n          </mat-checkbox>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let row;\" class=\"mtx-grid-checkbox-cell\">\r\n          <mat-checkbox *ngIf=\"!(rowSelectionFormatter.hideCheckbox && rowSelectionFormatter.hideCheckbox(row))\"\r\n                        [disabled]=\"rowSelectionFormatter.disabled && rowSelectionFormatter.disabled(row)\"\r\n                        [checked]=\"rowSelection.isSelected(row)\"\r\n                        (click)=\"$event.stopPropagation()\"\r\n                        (change)=\"$event ? handleSingleToggle(row) : null\">\r\n          </mat-checkbox>\r\n        </td>\r\n        <td mat-footer-cell *matFooterCellDef></td>\r\n      </ng-container>\r\n\r\n      <ng-container *ngFor=\"let col of columns;\">\r\n        <ng-container [matColumnDef]=\"col.field\"\r\n                      [sticky]=\"col.pinned==='left'\"\r\n                      [stickyEnd]=\"col.pinned==='right'\">\r\n\r\n          <th mat-header-cell *matHeaderCellDef\r\n              [ngClass]=\"{'mat-table-sticky-left': col.pinned === 'left', 'mat-table-sticky-right': col.pinned === 'right'}\"\r\n              [ngStyle]=\"{'width': col.width, 'min-width': col.width, 'left': col.left, 'right': col.right}\">\r\n            <div class=\"mat-header-cell-inner\">\r\n\r\n              <ng-template [ngIf]=\"isTemplateRef(headerTemplate)\" [ngIfElse]=\"headerTpl\">\r\n                <ng-template [ngTemplateOutlet]=\"headerTemplate\"\r\n                             [ngTemplateOutletContext]=\"{ $implicit: col, colDef: col }\">\r\n                </ng-template>\r\n              </ng-template>\r\n              <ng-template #headerTpl>\r\n                <ng-template [ngIf]=\"headerTemplate && isTemplateRef(headerTemplate[col.field])\"\r\n                             [ngIfElse]=\"defaultHeaderTpl\">\r\n                  <ng-template [ngTemplateOutlet]=\"headerTemplate[col.field]\"\r\n                               [ngTemplateOutletContext]=\"{ $implicit: col, colDef: col }\">\r\n                  </ng-template>\r\n                </ng-template>\r\n              </ng-template>\r\n              <ng-template #defaultHeaderTpl>\r\n                <div mat-sort-header [disabled]=\"!col.sortable\">\r\n                  <span class=\"mtx-grid-expanison-placeholder\" *ngIf=\"col.showExpand\"></span>\r\n                  <span>{{col.header}}</span>\r\n                  <mat-icon class=\"mat-sort-header-icon\" *ngIf=\"col.sortable\">sort</mat-icon>\r\n                </div>\r\n              </ng-template>\r\n\r\n            </div>\r\n          </th>\r\n\r\n          <td mat-cell *matCellDef=\"let row; let index = index; let dataIndex = dataIndex;\"\r\n              [ngClass]=\"{'mat-table-sticky-left': col.pinned === 'left', 'mat-table-sticky-right': col.pinned === 'right'}\"\r\n              [ngStyle]=\"{'width': col.width, 'min-width': col.width, 'left': col.left, 'right': col.right}\"\r\n              mtx-selectable-cell (cellSelectionChange)=\"handleCellSelect($event, row, col)\">\r\n\r\n            <ng-template [ngIf]=\"isTemplateRef(cellTemplate)\" [ngIfElse]=\"cellTpl\">\r\n              <ng-template [ngTemplateOutlet]=\"cellTemplate\"\r\n                           [ngTemplateOutletContext]=\"{ $implicit: row, rowData: row, index: getIndex(index, dataIndex), colDef: col }\">\r\n              </ng-template>\r\n            </ng-template>\r\n            <ng-template #cellTpl>\r\n              <ng-template [ngIf]=\"cellTemplate && isTemplateRef(cellTemplate[col.field])\"\r\n                           [ngIfElse]=\"colDefCellTpl\">\r\n                <ng-template [ngTemplateOutlet]=\"cellTemplate[col.field]\"\r\n                             [ngTemplateOutletContext]=\"{ $implicit: row, rowData: row, index: getIndex(index, dataIndex), colDef: col }\">\r\n                </ng-template>\r\n              </ng-template>\r\n            </ng-template>\r\n            <ng-template #colDefCellTpl>\r\n              <ng-template [ngIf]=\"col.cellTemplate\" [ngIfElse]=\"defaultCellTpl\"\r\n                           [ngTemplateOutlet]=\"col.cellTemplate\"\r\n                           [ngTemplateOutletContext]=\"{ $implicit: row, rowData: row, index: getIndex(index, dataIndex), colDef: col }\">\r\n              </ng-template>\r\n            </ng-template>\r\n            <ng-template #defaultCellTpl>\r\n              <button *ngIf=\"col.showExpand\" mat-icon-button mtx-expansion-toggle\r\n                      (toggleChange)=\"handleExpansionChange($event, row, col, dataIndex);\">\r\n                <mat-icon>keyboard_arrow_right</mat-icon>\r\n              </button>\r\n\r\n              <mtx-grid-cell [rowData]=\"row\" [colDef]=\"col\"></mtx-grid-cell>\r\n            </ng-template>\r\n\r\n          </td>\r\n\r\n          <td mat-footer-cell *matFooterCellDef\r\n              [ngClass]=\"{'mat-table-sticky-left': col.pinned === 'left', 'mat-table-sticky-right': col.pinned === 'right'}\"\r\n              [ngStyle]=\"{'width': col.width, 'min-width': col.width, 'left': col.left, 'right': col.right}\">\r\n            <span class=\"mtx-grid-expanison-placeholder\" *ngIf=\"col.showExpand\"></span>\r\n\r\n            <ng-template [ngIf]=\"isTemplateRef(summaryTemplate)\" [ngIfElse]=\"summaryTpl\">\r\n              <ng-template [ngTemplateOutlet]=\"summaryTemplate\"\r\n                           [ngTemplateOutletContext]=\"{ $implicit: col, colDef: col, data: data }\">\r\n              </ng-template>\r\n            </ng-template>\r\n            <ng-template #summaryTpl>\r\n              <ng-template [ngIf]=\"summaryTemplate && isTemplateRef(summaryTemplate[col.field])\"\r\n                           [ngIfElse]=\"defaultSummaryTpl\">\r\n                <ng-template [ngTemplateOutlet]=\"summaryTemplate[col.field]\"\r\n                             [ngTemplateOutletContext]=\"{ $implicit: getColData(data, col), colData: getColData(data, col), colDef: col }\">\r\n                </ng-template>\r\n              </ng-template>\r\n            </ng-template>\r\n            <ng-template #defaultSummaryTpl>\r\n              <span [innerHTML]=\"formatSummary(col.summary, data, col)\"></span>\r\n            </ng-template>\r\n\r\n          </td>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\r\n      <tr mat-row\r\n          *matRowDef=\"let row; let index = index; let dataIndex = dataIndex; columns: displayedColumns;\"\r\n          [ngClass]=\"{'selected': rowSelection.isSelected(row), 'mat-row-odd': isOddRow(index, dataIndex)}\"\r\n          (click)=\"handleRowSelect($event, row)\">\r\n      </tr>\r\n      <ng-container *ngIf=\"whetherShowSummary\">\r\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"expandable\">\r\n        <!-- Expanded Content Column - The expandable row is made up of this one column that spans across all columns -->\r\n        <ng-container matColumnDef=\"MtxGridExpansionColumnDef\">\r\n          <td mat-cell *matCellDef=\"let row; let dataIndex = dataIndex\"\r\n              [attr.colspan]=\"displayedColumns.length\">\r\n            <div class=\"mtx-grid-expanison-detail\"\r\n                 [@expansion]=\"expansionRowStates[dataIndex].expanded ? 'expanded' : 'collapsed'\">\r\n              <ng-template [ngTemplateOutlet]=\"expansionTemplate\"\r\n                           [ngTemplateOutletContext]=\"{ $implicit: row, rowData: row, index: dataIndex }\">\r\n              </ng-template>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-row [ngClass]=\"{'mtx-grid-expanison': true,\r\n                                'expanded': expansionRowStates[dataIndex].expanded,\r\n                                'collapsed': !expansionRowStates[dataIndex].expanded}\"\r\n            *matRowDef=\"let row; columns: ['MtxGridExpansionColumnDef']; let dataIndex = dataIndex\">\r\n        </tr>\r\n      </ng-container>\r\n\r\n    </table>\r\n  </div>\r\n\r\n  <!-- Tool Sidebar -->\r\n  <div class=\"mtx-grid-sidebar\" *ngIf=\"showSidebar\"></div>\r\n</div>\r\n\r\n<!-- Paginator -->\r\n<mat-paginator [class.mat-paginator-hidden]=\"!showPaginator || hasNoResult\"\r\n               [showFirstLastButtons]=\"showFirstLastButtons\"\r\n               [length]=\"length\"\r\n               [pageIndex]=\"pageIndex\"\r\n               [pageSize]=\"pageSize\"\r\n               [pageSizeOptions]=\"pageSizeOptions\"\r\n               [hidePageSize]=\"hidePageSize\"\r\n               (page)=\"page.emit($event)\"\r\n               [disabled]=\"pageDisabled\">\r\n</mat-paginator>\r\n\r\n<!-- No Result -->\r\n<div class=\"mtx-grid-no-result\" *ngIf=\"hasNoResult\">\r\n  <ng-template [ngIf]=\"noResultTemplate\" [ngIfElse]=\"defaultNoResultTpl\">\r\n    <ng-template [ngTemplateOutlet]=\"noResultTemplate\"></ng-template>\r\n  </ng-template>\r\n  <ng-template #defaultNoResultTpl>{{noResultText}}</ng-template>\r\n</div>\r\n",
                host: {
                    class: 'mtx-grid',
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('expansion', [
                        state('collapsed', style({ height: '0', minHeight: '0', visibility: 'hidden' })),
                        state('expanded', style({ height: '*', visibility: 'visible' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                styles: [".mtx-grid{position:relative;display:block;width:100%;border:1px solid rgba(0,0,0,.15)}.mtx-grid .mtx-grid-progress{position:absolute;top:0;z-index:109}.mtx-grid .mtx-grid-toolbar{display:flex;justify-content:space-between;align-items:center;min-height:48px;padding:8px;border-bottom:1px solid rgba(0,0,0,.15)}.mtx-grid .mtx-grid-layout{display:flex;flex:1 1 auto;overflow:auto}.mtx-grid .mtx-grid-content{width:0}.mtx-grid .mtx-grid-sidebar{width:30px;border-left:1px solid rgba(0,0,0,.15)}[dir=rtl] .mtx-grid .mtx-grid-sidebar{border-left:none;border-right:1px solid rgba(0,0,0,.15)}.mtx-grid .mat-table{flex:none;min-width:100%;border-collapse:separate}.mtx-grid .mat-table.mat-table-striped .mat-row-odd{background-color:rgba(0,0,0,.03)}.mtx-grid .mat-table.mat-table-hover .mat-row:hover{background-color:rgba(0,0,0,.05)}.mtx-grid .mat-footer-row,.mtx-grid .mat-header-row,.mtx-grid .mat-row{align-items:stretch}.mtx-grid .mat-cell,.mtx-grid .mat-footer-cell,.mtx-grid .mat-header-cell{min-width:80px;padding:4px 10px}.mtx-grid .mat-cell:first-of-type,.mtx-grid .mat-footer-cell:first-of-type,.mtx-grid .mat-header-cell:first-of-type{padding-left:24px}.mtx-grid .mat-cell:first-of-type.mtx-grid-checkbox-cell,.mtx-grid .mat-footer-cell:first-of-type.mtx-grid-checkbox-cell,.mtx-grid .mat-header-cell:first-of-type.mtx-grid-checkbox-cell{padding-left:10px;padding-right:10px}[dir=rtl] .mtx-grid .mat-cell:first-of-type,[dir=rtl] .mtx-grid .mat-footer-cell:first-of-type,[dir=rtl] .mtx-grid .mat-header-cell:first-of-type{padding-left:4px;padding-right:24px}[dir=rtl] .mtx-grid .mat-cell:first-of-type.mtx-grid-checkbox-cell,[dir=rtl] .mtx-grid .mat-footer-cell:first-of-type.mtx-grid-checkbox-cell,[dir=rtl] .mtx-grid .mat-header-cell:first-of-type.mtx-grid-checkbox-cell{padding-left:10px;padding-right:10px}.mtx-grid .mat-cell:last-of-type,.mtx-grid .mat-footer-cell:last-of-type,.mtx-grid .mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] .mtx-grid .mat-cell:last-of-type,[dir=rtl] .mtx-grid .mat-footer-cell:last-of-type,[dir=rtl] .mtx-grid .mat-header-cell:last-of-type{padding-left:24px;padding-right:4px}.mtx-grid .mat-table-sticky-left,.mtx-grid .mat-table-sticky-right{flex:none}.mtx-grid .mat-table-sticky-left{border-right:1px solid rgba(0,0,0,.15)}[dir=rtl] .mtx-grid .mat-table-sticky-left{border-right-width:0;border-left:1px solid rgba(0,0,0,.15)}.mtx-grid .mat-table-sticky-right{border-left:1px solid rgba(0,0,0,.15)}[dir=rtl] .mtx-grid .mat-table-sticky-right{border-left-width:0;border-right:1px solid rgba(0,0,0,.15)}.mtx-grid .mtx-grid-expanison{height:0;overflow:hidden}.mtx-grid .mtx-grid-expanison .mat-cell{padding-top:0;padding-bottom:0}.mtx-grid .mtx-grid-expanison.collapsed .mat-cell{border-bottom-width:0}.mtx-grid .mtx-grid-expanison-detail{display:flex;align-items:center;min-height:48px;overflow:hidden}.mtx-grid .mtx-grid-expanison-placeholder{display:inline-block;width:40px;height:40px;vertical-align:middle}.mtx-grid .mat-row.selected{background-color:rgba(0,0,0,.05)}.mtx-grid .mat-row:last-of-type .mat-cell{border-bottom-width:0}.mtx-grid .mat-cell .mat-cell-img{width:30px;border-radius:4px;cursor:pointer}.mtx-grid .mat-cell .mat-chip{color:rgba(0,0,0,.87)}.mtx-grid .mat-cell .mat-cell-option-button .mat-icon{width:18px;height:18px;font-size:18px;line-height:18px}.mtx-grid .mat-cell .mat-icon-button.expanded .mat-icon{transform:rotate(90deg)}.mtx-grid .mat-cell.selected{box-shadow:inset 0 0 0 1px #29b6f6}.mtx-grid .mat-paginator{border-top:1px solid rgba(0,0,0,.15)}.mtx-grid .mat-paginator-hidden{display:none}.mtx-grid .mtx-grid-checkbox-cell{flex:none;justify-content:center;min-width:40px}.mtx-grid .mtx-grid-checkbox-cell .mat-checkbox{display:flex}.mtx-grid .mtx-grid-checkbox-cell .mat-checkbox-inner-container{margin-left:0}.mtx-grid .mtx-grid-no-result{display:flex;justify-content:center;align-items:center;min-height:150px}.mtx-grid .mat-sort-header-icon{width:18px;height:18px;margin:0 4px;font-size:18px}.mtx-grid .mat-header-cell-inner{display:flex;align-items:center}.mtx-grid .mat-footer-row .mat-footer-cell{border-bottom-width:0;border-top:1px solid rgba(0,0,0,.12);background-color:rgba(0,0,0,.06)}"]
            }] }
];
/** @nocollapse */
MtxGridComponent.ctorParameters = () => [
    { type: MtxGridService }
];
MtxGridComponent.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }],
    displayedColumns: [{ type: Input }],
    columns: [{ type: Input }],
    data: [{ type: Input }],
    length: [{ type: Input }],
    loading: [{ type: Input }],
    trackBy: [{ type: Input }],
    tooltip: [{ type: Input }],
    pageOnFront: [{ type: Input }],
    showPaginator: [{ type: Input }],
    pageDisabled: [{ type: Input }],
    showFirstLastButtons: [{ type: Input }],
    pageIndex: [{ type: Input }],
    pageSize: [{ type: Input }],
    pageSizeOptions: [{ type: Input }],
    hidePageSize: [{ type: Input }],
    page: [{ type: Output }],
    sortOnFront: [{ type: Input }],
    sortChange: [{ type: Output }],
    rowHover: [{ type: Input }],
    rowStriped: [{ type: Input }],
    expandable: [{ type: Input }],
    expansionTemplate: [{ type: Input }],
    expansionChange: [{ type: Output }],
    multiSelectable: [{ type: Input }],
    rowSelected: [{ type: Input }],
    rowSelectable: [{ type: Input }],
    hideRowSelectionCheckbox: [{ type: Input }],
    rowSelectionFormatter: [{ type: Input }],
    rowClassFormatter: [{ type: Input }],
    rowSelectionChange: [{ type: Output }],
    cellSelectable: [{ type: Input }],
    cellSelectionChange: [{ type: Output }],
    showToolbar: [{ type: Input }],
    toolbarTitle: [{ type: Input }],
    toolbarTemplate: [{ type: Input }],
    showColumnMenuButton: [{ type: Input }],
    columnMenuButtonText: [{ type: Input }],
    columnMenuButtonType: [{ type: Input }],
    columnMenuButtonColor: [{ type: Input }],
    columnMenuButtonClass: [{ type: Input }],
    columnMenuButtonIcon: [{ type: Input }],
    columnHideable: [{ type: Input }],
    columnHidingChecked: [{ type: Input }],
    columnHidingChange: [{ type: Output }],
    columnMovable: [{ type: Input }],
    columnMovingChange: [{ type: Output }],
    columnPinnable: [{ type: Input }],
    columnPinningChange: [{ type: Output }],
    noResultText: [{ type: Input }],
    noResultTemplate: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    cellTemplate: [{ type: Input }],
    showSummary: [{ type: Input }],
    summaryTemplate: [{ type: Input }],
    showSidebar: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MtxGridComponent.prototype.paginator;
    /** @type {?} */
    MtxGridComponent.prototype.sort;
    /** @type {?} */
    MtxGridComponent.prototype.dataSource;
    /** @type {?} */
    MtxGridComponent.prototype.displayedColumns;
    /** @type {?} */
    MtxGridComponent.prototype.columns;
    /** @type {?} */
    MtxGridComponent.prototype.data;
    /** @type {?} */
    MtxGridComponent.prototype.length;
    /** @type {?} */
    MtxGridComponent.prototype.loading;
    /** @type {?} */
    MtxGridComponent.prototype.trackBy;
    /**
     * Whether to show tooltip on columns
     * @type {?}
     */
    MtxGridComponent.prototype.tooltip;
    /**
     * Whether to page on the front end
     * @type {?}
     */
    MtxGridComponent.prototype.pageOnFront;
    /** @type {?} */
    MtxGridComponent.prototype.showPaginator;
    /** @type {?} */
    MtxGridComponent.prototype.pageDisabled;
    /** @type {?} */
    MtxGridComponent.prototype.showFirstLastButtons;
    /** @type {?} */
    MtxGridComponent.prototype.pageIndex;
    /** @type {?} */
    MtxGridComponent.prototype.pageSize;
    /** @type {?} */
    MtxGridComponent.prototype.pageSizeOptions;
    /** @type {?} */
    MtxGridComponent.prototype.hidePageSize;
    /** @type {?} */
    MtxGridComponent.prototype.page;
    /**
     * Sort
     * @type {?}
     */
    MtxGridComponent.prototype.sortOnFront;
    /** @type {?} */
    MtxGridComponent.prototype.sortChange;
    /**
     * Hover & Striped style
     * @type {?}
     */
    MtxGridComponent.prototype.rowHover;
    /** @type {?} */
    MtxGridComponent.prototype.rowStriped;
    /**
     * Expandable row
     * @type {?}
     */
    MtxGridComponent.prototype.expansionRowStates;
    /** @type {?} */
    MtxGridComponent.prototype.expandable;
    /** @type {?} */
    MtxGridComponent.prototype.expansionTemplate;
    /** @type {?} */
    MtxGridComponent.prototype.expansionChange;
    /**
     * Whether support multiple row/cell selection
     * @type {?}
     */
    MtxGridComponent.prototype.multiSelectable;
    /**
     * Row selection
     * @type {?}
     */
    MtxGridComponent.prototype.rowSelection;
    /** @type {?} */
    MtxGridComponent.prototype.rowSelected;
    /** @type {?} */
    MtxGridComponent.prototype.rowSelectable;
    /** @type {?} */
    MtxGridComponent.prototype.hideRowSelectionCheckbox;
    /** @type {?} */
    MtxGridComponent.prototype.rowSelectionFormatter;
    /** @type {?} */
    MtxGridComponent.prototype.rowClassFormatter;
    /** @type {?} */
    MtxGridComponent.prototype.rowSelectionChange;
    /**
     * Cell selection
     * @type {?}
     */
    MtxGridComponent.prototype.cellSelection;
    /** @type {?} */
    MtxGridComponent.prototype.cellSelectable;
    /** @type {?} */
    MtxGridComponent.prototype.cellSelectionChange;
    /**
     * @type {?}
     * @private
     */
    MtxGridComponent.prototype._selectedCell;
    /**
     * Toolbar
     * @type {?}
     */
    MtxGridComponent.prototype.showToolbar;
    /** @type {?} */
    MtxGridComponent.prototype.toolbarTitle;
    /** @type {?} */
    MtxGridComponent.prototype.toolbarTemplate;
    /** @type {?} */
    MtxGridComponent.prototype.columnMenuData;
    /** @type {?} */
    MtxGridComponent.prototype.showColumnMenuButton;
    /** @type {?} */
    MtxGridComponent.prototype.columnMenuButtonText;
    /** @type {?} */
    MtxGridComponent.prototype.columnMenuButtonType;
    /** @type {?} */
    MtxGridComponent.prototype.columnMenuButtonColor;
    /** @type {?} */
    MtxGridComponent.prototype.columnMenuButtonClass;
    /** @type {?} */
    MtxGridComponent.prototype.columnMenuButtonIcon;
    /** @type {?} */
    MtxGridComponent.prototype.columnHideable;
    /** @type {?} */
    MtxGridComponent.prototype.columnHidingChecked;
    /** @type {?} */
    MtxGridComponent.prototype.columnHidingChange;
    /** @type {?} */
    MtxGridComponent.prototype.columnMovable;
    /** @type {?} */
    MtxGridComponent.prototype.columnMovingChange;
    /** @type {?} */
    MtxGridComponent.prototype.columnPinnable;
    /** @type {?} */
    MtxGridComponent.prototype.columnPinningChange;
    /**
     * No Result
     * @type {?}
     */
    MtxGridComponent.prototype.noResultText;
    /** @type {?} */
    MtxGridComponent.prototype.noResultTemplate;
    /**
     * thead
     * @type {?}
     */
    MtxGridComponent.prototype.headerTemplate;
    /**
     * tbody
     * @type {?}
     */
    MtxGridComponent.prototype.cellTemplate;
    /**
     * tfoot
     * @type {?}
     */
    MtxGridComponent.prototype.showSummary;
    /** @type {?} */
    MtxGridComponent.prototype.summaryTemplate;
    /**
     * Sidebar
     * @type {?}
     */
    MtxGridComponent.prototype.showSidebar;
    /**
     * @type {?}
     * @private
     */
    MtxGridComponent.prototype._dataGridSrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctbWF0ZXJvL2V4dGVuc2lvbnMvZGF0YS1ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFdBQVcsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFRLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBV3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9CaEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQXdJM0IsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBaEl2QyxZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUM5QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7UUFNaEIsWUFBTyxHQUFHLElBQUksQ0FBQzs7OztRQUdmLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdB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Q3ZCLG9DQUF1Qjs7SUFDdkIsMkNBQXlDOztJQUN6Qyx3Q0FBOEI7O0lBQzlCLGdDQUErQzs7Ozs7SUFJL0MsdUNBQTRCOztJQUM1QixzQ0FBZ0Q7Ozs7O0lBSWhELG9DQUEwQjs7SUFDMUIsc0NBQTRCOzs7OztJQUk1Qiw4Q0FBd0I7O0lBRXhCLHNDQUE0Qjs7SUFDNUIsNkNBQTZDOztJQUM3QywyQ0FBb0Q7Ozs7O0lBSXBELDJDQUFnQzs7Ozs7SUFJaEMsd0NBQXNFOztJQUV0RSx1Q0FBMEI7O0lBQzFCLHlDQUErQjs7SUFDL0Isb0RBQTBDOztJQUMxQyxpREFBa0U7O0lBQ2xFLDZDQUEwRDs7SUFDMUQsOENBQXlEOzs7OztJQUl6RCx5Q0FBbUI7O0lBRW5CLDBDQUErQjs7SUFDL0IsK0NBQTBEOzs7OztJQUUxRCx5Q0FBcUQ7Ozs7O0lBSXJELHVDQUE2Qjs7SUFDN0Isd0NBQTJCOztJQUMzQiwyQ0FBMkM7O0lBRTNDLDBDQUFrRDs7SUFFbEQsZ0RBQXFDOztJQUNyQyxnREFBbUM7O0lBQ25DLGdEQUEwQzs7SUFDMUMsaURBQW9DOztJQUNwQyxpREFBb0M7O0lBQ3BDLGdEQUFtQzs7SUFFbkMsMENBQStCOztJQUMvQiwrQ0FBdUQ7O0lBQ3ZELDhDQUE0RDs7SUFFNUQseUNBQThCOztJQUM5Qiw4Q0FBNEQ7O0lBRTVELDBDQUErQjs7SUFDL0IsK0NBQTZEOzs7OztJQUc3RCx3Q0FBMkM7O0lBQzNDLDRDQUE0Qzs7Ozs7SUFPNUMsMENBQWdFOzs7OztJQUdoRSx3Q0FBOEQ7Ozs7O0lBRzlELHVDQUE2Qjs7SUFDN0IsMkNBQWlFOzs7OztJQVFqRSx1Q0FBNkI7Ozs7O0lBZWpCLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHJhY2tCeUZ1bmN0aW9uLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcclxuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IsIFBhZ2VFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XHJcbmltcG9ydCB7IFNvcnQsIE1hdFNvcnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgTXR4R3JpZENvbHVtbixcclxuICBNdHhHcmlkQ29sdW1uU2VsZWN0aW9uSXRlbSxcclxuICBNdHhHcmlkQ2VsbFRlbXBsYXRlLFxyXG4gIE10eEdyaWRSb3dTZWxlY3Rpb25Gb3JtYXR0ZXIsXHJcbiAgTXR4R3JpZFJvd0NsYXNzRm9ybWF0dGVyLFxyXG59IGZyb20gJy4vZ3JpZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBNdHhHcmlkQ2VsbFNlbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vY2VsbC1zZWxlY3Rpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTXR4R3JpZEV4cGFuc2lvblRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZXhwYW5zaW9uLXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNdHhHcmlkU2VydmljZSB9IGZyb20gJy4vZ3JpZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXR4LWdyaWQnLFxyXG4gIGV4cG9ydEFzOiAnbXR4R3JpZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dyaWQuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ210eC1ncmlkJyxcclxuICB9LFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignZXhwYW5zaW9uJywgW1xyXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwJywgbWluSGVpZ2h0OiAnMCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcclxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pKSxcclxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcclxuICAgIF0pLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdHhHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHsgc3RhdGljOiB0cnVlIH0pIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xyXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwgeyBzdGF0aWM6IHRydWUgfSkgc29ydDogTWF0U29ydDtcclxuXHJcbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPGFueT47XHJcblxyXG4gIEBJbnB1dCgpIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xyXG5cclxuICBASW5wdXQoKSBjb2x1bW5zOiBNdHhHcmlkQ29sdW1uW10gPSBbXTtcclxuICBASW5wdXQoKSBkYXRhID0gW107XHJcbiAgQElucHV0KCkgbGVuZ3RoID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gIC8vIFRyYWNraW5nIGZ1bmN0aW9uXHJcbiAgQElucHV0KCkgdHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPGFueT47XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIHNob3cgdG9vbHRpcCBvbiBjb2x1bW5zICovXHJcbiAgQElucHV0KCkgdG9vbHRpcCA9IHRydWU7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRvIHBhZ2Ugb24gdGhlIGZyb250IGVuZCAqL1xyXG4gIEBJbnB1dCgpIHBhZ2VPbkZyb250ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaG93UGFnaW5hdG9yID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwYWdlRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XHJcbiAgQElucHV0KCkgcGFnZUluZGV4ID0gMDtcclxuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplT3B0aW9ucyA9IFsxMCwgNTAsIDEwMF07XHJcbiAgQElucHV0KCkgaGlkZVBhZ2VTaXplID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4oKTtcclxuXHJcbiAgLyoqIFNvcnQgKi9cclxuXHJcbiAgQElucHV0KCkgc29ydE9uRnJvbnQgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0PigpO1xyXG5cclxuICAvKiogSG92ZXIgJiBTdHJpcGVkIHN0eWxlICovXHJcblxyXG4gIEBJbnB1dCgpIHJvd0hvdmVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcm93U3RyaXBlZCA9IGZhbHNlO1xyXG5cclxuICAvKiogRXhwYW5kYWJsZSByb3cgKi9cclxuXHJcbiAgZXhwYW5zaW9uUm93U3RhdGVzID0gW107XHJcblxyXG4gIEBJbnB1dCgpIGV4cGFuZGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbnNpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAT3V0cHV0KCkgZXhwYW5zaW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHN1cHBvcnQgbXVsdGlwbGUgcm93L2NlbGwgc2VsZWN0aW9uICovXHJcblxyXG4gIEBJbnB1dCgpIG11bHRpU2VsZWN0YWJsZSA9IHRydWU7XHJcblxyXG4gIC8qKiBSb3cgc2VsZWN0aW9uICovXHJcblxyXG4gIHJvd1NlbGVjdGlvbjogU2VsZWN0aW9uTW9kZWw8YW55PiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRydWUsIFtdKTtcclxuXHJcbiAgQElucHV0KCkgcm93U2VsZWN0ZWQgPSBbXTtcclxuICBASW5wdXQoKSByb3dTZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGlkZVJvd1NlbGVjdGlvbkNoZWNrYm94ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcm93U2VsZWN0aW9uRm9ybWF0dGVyOiBNdHhHcmlkUm93U2VsZWN0aW9uRm9ybWF0dGVyID0ge307XHJcbiAgQElucHV0KCkgcm93Q2xhc3NGb3JtYXR0ZXI6IE10eEdyaWRSb3dDbGFzc0Zvcm1hdHRlciA9IHt9O1xyXG4gIEBPdXRwdXQoKSByb3dTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICAvKiogQ2VsbCBzZWxlY3Rpb24gKi9cclxuXHJcbiAgY2VsbFNlbGVjdGlvbiA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBjZWxsU2VsZWN0YWJsZSA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNlbGxTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICBwcml2YXRlIF9zZWxlY3RlZENlbGw6IE10eEdyaWRDZWxsU2VsZWN0aW9uRGlyZWN0aXZlO1xyXG5cclxuICAvKiogVG9vbGJhciAqL1xyXG5cclxuICBASW5wdXQoKSBzaG93VG9vbGJhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXJUaXRsZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29sdW1uTWVudURhdGE6IE10eEdyaWRDb2x1bW5TZWxlY3Rpb25JdGVtW10gPSBbXTtcclxuXHJcbiAgQElucHV0KCkgc2hvd0NvbHVtbk1lbnVCdXR0b24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNvbHVtbk1lbnVCdXR0b25UZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgY29sdW1uTWVudUJ1dHRvblR5cGUgPSAnc3Ryb2tlZCc7XHJcbiAgQElucHV0KCkgY29sdW1uTWVudUJ1dHRvbkNvbG9yID0gJyc7XHJcbiAgQElucHV0KCkgY29sdW1uTWVudUJ1dHRvbkNsYXNzID0gJyc7XHJcbiAgQElucHV0KCkgY29sdW1uTWVudUJ1dHRvbkljb24gPSAnJztcclxuXHJcbiAgQElucHV0KCkgY29sdW1uSGlkZWFibGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNvbHVtbkhpZGluZ0NoZWNrZWQ6ICdzaG93JyB8ICdoaWRlJyA9ICdzaG93JztcclxuICBAT3V0cHV0KCkgY29sdW1uSGlkaW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgQElucHV0KCkgY29sdW1uTW92YWJsZSA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNvbHVtbk1vdmluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtblBpbm5hYmxlID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgY29sdW1uUGlubmluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIC8qKiBObyBSZXN1bHQgKi9cclxuICBASW5wdXQoKSBub1Jlc3VsdFRleHQgPSAnTm8gcmVjb3JkcyBmb3VuZCc7XHJcbiAgQElucHV0KCkgbm9SZXN1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgZ2V0IGhhc05vUmVzdWx0KCkge1xyXG4gICAgcmV0dXJuICghdGhpcy5kYXRhIHx8IHRoaXMuZGF0YS5sZW5ndGggPT09IDApICYmICF0aGlzLmxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICAvKiogdGhlYWQgKi9cclxuICBASW5wdXQoKSBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IE10eEdyaWRDZWxsVGVtcGxhdGU7XHJcblxyXG4gIC8qKiB0Ym9keSAqL1xyXG4gIEBJbnB1dCgpIGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IE10eEdyaWRDZWxsVGVtcGxhdGU7XHJcblxyXG4gIC8qKiB0Zm9vdCAqL1xyXG4gIEBJbnB1dCgpIHNob3dTdW1tYXJ5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc3VtbWFyeVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgTXR4R3JpZENlbGxUZW1wbGF0ZTtcclxuXHJcbiAgLy8gVE9ETzpcclxuICBnZXQgd2hldGhlclNob3dTdW1tYXJ5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1N1bW1hcnk7XHJcbiAgfVxyXG5cclxuICAvKiogU2lkZWJhciAqL1xyXG4gIEBJbnB1dCgpIHNob3dTaWRlYmFyID0gZmFsc2U7XHJcblxyXG4gIGdldENvbERhdGEoZGF0YTogYW55LCBjb2xEZWY6IE10eEdyaWRDb2x1bW4pIHtcclxuICAgIHJldHVybiBkYXRhLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtW2NvbERlZi5maWVsZF0pO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0U3VtbWFyeShzdW1tYXJ5OiBhbnksIGRhdGE6IGFueSwgY29sRGVmOiBNdHhHcmlkQ29sdW1uKSB7XHJcbiAgICBpZiAodGhpcy5pc1N0cmluZyhzdW1tYXJ5KSkge1xyXG4gICAgICByZXR1cm4gc3VtbWFyeTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0Z1bmN0aW9uKHN1bW1hcnkpKSB7XHJcbiAgICAgIGNvbnN0IGNvbERhdGEgPSB0aGlzLmdldENvbERhdGEoZGF0YSwgY29sRGVmKTtcclxuICAgICAgcmV0dXJuIHN1bW1hcnkoY29sRGF0YSwgY29sRGVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFHcmlkU3J2OiBNdHhHcmlkU2VydmljZSkgeyB9XHJcblxyXG4gIGlzVGVtcGxhdGVSZWYob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGlzU3RyaW5nKGZuOiBhbnkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBTdHJpbmddJztcclxuICB9XHJcblxyXG4gIGlzRnVuY3Rpb24oZm46IGFueSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAvLyBXYWl0aW5nIGZvciBhc3luYyBkYXRhXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNvdW50UGlubmVkUG9zaXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uaGlkZSkubWFwKGl0ZW0gPT4gaXRlbS5maWVsZCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0NvbHVtbk1lbnVCdXR0b24pIHtcclxuICAgICAgdGhpcy5jb2x1bW5NZW51RGF0YSA9IHRoaXMuY29sdW1ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsOiBpdGVtLmhlYWRlciBhcyBzdHJpbmcsXHJcbiAgICAgICAgICBmaWVsZDogaXRlbS5maWVsZCxcclxuICAgICAgICAgIHNob3c6ICFpdGVtLmhpZGUsXHJcbiAgICAgICAgICBoaWRlOiBpdGVtLmhpZGUsXHJcbiAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlICYmICF0aGlzLmhpZGVSb3dTZWxlY3Rpb25DaGVja2JveCkge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnTXR4R3JpZENoZWNrYm94Q29sdW1uRGVmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2Ugc2hvdWxkIGNvcHkgZWFjaCBpdGVtIG9mIGRhdGEgZm9yIGV4cGFuc2lvbiBkYXRhXHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5zaW9uUm93U3RhdGVzID0gW107IC8vIHJlc2V0XHJcblxyXG4gICAgICB0aGlzLmRhdGE/LmZvckVhY2goXyA9PiB7XHJcbiAgICAgICAgdGhpcy5leHBhbnNpb25Sb3dTdGF0ZXMucHVzaCh7IGV4cGFuZGVkOiBmYWxzZSB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzpcclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8YW55Pih0aGlzLmRhdGEpO1xyXG5cclxuICAgIGlmICh0aGlzLnBhZ2VPbkZyb250KSB7XHJcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zb3J0T25Gcm9udCkge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlKSB7XHJcbiAgICAgIHRoaXMucm93U2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPGFueT4odGhpcy5tdWx0aVNlbGVjdGFibGUsIHRoaXMucm93U2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7IH1cclxuXHJcbiAgY291bnRQaW5uZWRQb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IGNvdW50ID0gKGFjYzogbnVtYmVyLCBjdXI6IE10eEdyaWRDb2x1bW4pID0+IGFjYyArIHBhcnNlRmxvYXQoY3VyLndpZHRoIHx8ICc4MHB4Jyk7XHJcblxyXG4gICAgY29uc3QgcGlubmVkTGVmdENvbHMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGNvbCA9PiBjb2wucGlubmVkICYmIGNvbC5waW5uZWQgPT09ICdsZWZ0Jyk7XHJcbiAgICBwaW5uZWRMZWZ0Q29scy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgaXRlbS5sZWZ0ID0gcGlubmVkTGVmdENvbHMuc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnQsIDApICsgJ3B4JztcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBpbm5lZFJpZ2h0Q29scyA9IHRoaXMuY29sdW1uc1xyXG4gICAgICAuZmlsdGVyKGNvbCA9PiBjb2wucGlubmVkICYmIGNvbC5waW5uZWQgPT09ICdyaWdodCcpXHJcbiAgICAgIC5yZXZlcnNlKCk7XHJcbiAgICBwaW5uZWRSaWdodENvbHMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgIGl0ZW0ucmlnaHQgPSBwaW5uZWRSaWdodENvbHMuc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnQsIDApICsgJ3B4JztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNPZGRSb3coaW5kZXg6IG51bWJlciwgZGF0YUluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnID8gZGF0YUluZGV4ICUgMiA6IGluZGV4ICUgMjtcclxuICB9XHJcblxyXG4gIGdldEluZGV4KGluZGV4OiBudW1iZXIsIGRhdGFJbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJyA/IGRhdGFJbmRleCA6IGluZGV4O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU29ydENoYW5nZShzb3J0OiBTb3J0KSB7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdChzb3J0KTtcclxuICB9XHJcblxyXG4gIC8qKiBFeHBhbnNpb24gY2hhbmdlIGV2ZW50ICovXHJcbiAgaGFuZGxlRXhwYW5zaW9uQ2hhbmdlKFxyXG4gICAgZXhwYW5zaW9uUmVmOiBNdHhHcmlkRXhwYW5zaW9uVG9nZ2xlRGlyZWN0aXZlLFxyXG4gICAgcm93RGF0YTogYW55LFxyXG4gICAgY29sdW1uOiBhbnksXHJcbiAgICBpbmRleDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5zaW9uUm93U3RhdGVzW2luZGV4XS5leHBhbmRlZCA9ICF0aGlzLmV4cGFuc2lvblJvd1N0YXRlc1tpbmRleF0uZXhwYW5kZWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmV4cGFuc2lvbkNoYW5nZS5lbWl0KHsgb3BlbmVkOiBleHBhbnNpb25SZWYuZXhwZW5kZWQsIGRhdGE6IHJvd0RhdGEsIGluZGV4LCBjb2x1bW4gfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ2VsbCBzZWxlY3QgZXZlbnQgKi9cclxuICBoYW5kbGVDZWxsU2VsZWN0KGNlbGxSZWY6IE10eEdyaWRDZWxsU2VsZWN0aW9uRGlyZWN0aXZlLCByb3dEYXRhOiBhbnksIGNvbERlZjogYW55KTogdm9pZCB7XHJcbiAgICAvLyBJZiBub3QgdGhlIHNhbWUgY2VsbFxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkQ2VsbCAhPT0gY2VsbFJlZikge1xyXG4gICAgICBjb25zdCBjb2xWYWx1ZSA9IHRoaXMuX2RhdGFHcmlkU3J2LmdldENlbGxWYWx1ZShyb3dEYXRhLCBjb2xEZWYpO1xyXG4gICAgICB0aGlzLmNlbGxTZWxlY3Rpb24gPSBbXTsgLy8gcmVzZXRcclxuICAgICAgdGhpcy5jZWxsU2VsZWN0aW9uLnB1c2goeyBjZWxsRGF0YTogY29sVmFsdWUsIHJvd0RhdGEsIGNvbERlZiB9KTtcclxuXHJcbiAgICAgIHRoaXMuY2VsbFNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY2VsbFNlbGVjdGlvbik7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDZWxsKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDZWxsLnVuc2VsZWN0KCk7IC8vIHRoZSBzZWxlY3RlZENlbGwgd2lsbCBiZSB1bmRlZmluZWRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NlbGVjdGVkQ2VsbCA9IGNlbGxSZWYuc2VsZWN0ZWQgPyBjZWxsUmVmIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJvdyBzZWxlY3QgZXZlbnQgKi9cclxuICBoYW5kbGVSb3dTZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQsIHJvd0RhdGE6IGFueSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnJvd1NlbGVjdGFibGUgJiZcclxuICAgICAgISh0aGlzLnJvd1NlbGVjdGlvbkZvcm1hdHRlci5kaXNhYmxlZCAmJiB0aGlzLnJvd1NlbGVjdGlvbkZvcm1hdHRlci5kaXNhYmxlZChyb3dEYXRhKSkgJiZcclxuICAgICAgISh0aGlzLnJvd1NlbGVjdGlvbkZvcm1hdHRlci5oaWRlQ2hlY2tib3ggJiYgdGhpcy5yb3dTZWxlY3Rpb25Gb3JtYXR0ZXIuaGlkZUNoZWNrYm94KHJvd0RhdGEpKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIG1ldGFLZXkgLT4gY29tbWFuZCBrZXlcclxuICAgICAgaWYgKCFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgICAgdGhpcy5yb3dTZWxlY3Rpb24uY2xlYXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5oYW5kbGVTaW5nbGVUb2dnbGUocm93RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xyXG4gIGlzQWxsU2VsZWN0ZWQoKSB7XHJcbiAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMucm93U2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcclxuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XHJcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XHJcbiAgfVxyXG5cclxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xyXG4gIGhhbmRsZU1hc3RlclRvZ2dsZSgpIHtcclxuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpXHJcbiAgICAgID8gdGhpcy5yb3dTZWxlY3Rpb24uY2xlYXIoKVxyXG4gICAgICA6IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMucm93U2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcclxuICAgIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5yb3dTZWxlY3Rpb24uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNlbGVjdCBzaW5nbGUgcm93ICovXHJcbiAgaGFuZGxlU2luZ2xlVG9nZ2xlKHJvdzogYW55KSB7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGlvbi50b2dnbGUocm93KTtcclxuICAgIHRoaXMucm93U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5yb3dTZWxlY3Rpb24uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENvbHVtbiBjaGFuZ2UgZXZlbnQgKi9cclxuXHJcbiAgaGFuZGxlQ29sdW1uSGlkaW5nQ2hhbmdlKGNvbHVtbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmNvbHVtbkhpZGluZ0NoYW5nZS5lbWl0KGNvbHVtbnMpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IE9iamVjdC5hc3NpZ24oW10sIGNvbHVtbnMpO1xyXG5cclxuICAgIGlmICh0aGlzLnJvd1NlbGVjdGFibGUgJiYgIXRoaXMuaGlkZVJvd1NlbGVjdGlvbkNoZWNrYm94KSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdNdHhHcmlkQ2hlY2tib3hDb2x1bW5EZWYnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbHVtbk1vdmluZ0NoYW5nZShjb2x1bW5zOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5jb2x1bW5Nb3ZpbmdDaGFuZ2UuZW1pdChjb2x1bW5zKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBPYmplY3QuYXNzaWduKFtdLCBjb2x1bW5zKTtcclxuXHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlICYmICF0aGlzLmhpZGVSb3dTZWxlY3Rpb25DaGVja2JveCkge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnTXR4R3JpZENoZWNrYm94Q29sdW1uRGVmJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ3VzdG9taXplIGV4cGFuc2lvbiBldmVudCAqL1xyXG4gIHRvZ2dsZUV4cGFuc2lvbihpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgZXhwYW5kYWJsZWAgc2hvdWxkIGJlIHNldCB0cnVlLicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5leHBhbnNpb25Sb3dTdGF0ZXNbaW5kZXhdLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5zaW9uUm93U3RhdGVzW2luZGV4XS5leHBhbmRlZDtcclxuICAgIHJldHVybiB0aGlzLmV4cGFuc2lvblJvd1N0YXRlc1tpbmRleF0uZXhwYW5kZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==