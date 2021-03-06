import { Injectable, EventEmitter, TemplateRef, Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, Input, Output, Directive, HostBinding, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { MtxDialog, MtxDialogModule } from '@ng-matero/extensions/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import PhotoViewer from 'photoviewer';

/**
 * @fileoverview added by tsickle
 * Generated from: grid.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tag
 * @record
 */
function MtxGridColumnTag() { }
/**
 * @record
 */
function MtxGridColumnTagValue() { }
if (false) {
    /** @type {?|undefined} */
    MtxGridColumnTagValue.prototype.text;
    /** @type {?|undefined} */
    MtxGridColumnTagValue.prototype.color;
}
/**
 * Button
 * @record
 */
function MtxGridColumnButton() { }
if (false) {
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.type;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.text;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.icon;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.color;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.click;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.pop;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.popTitle;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.children;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.iif;
    /** @type {?|undefined} */
    MtxGridColumnButton.prototype.tooltip;
}
/**
 * Grid
 * @record
 */
function MtxGridColumn() { }
if (false) {
    /** @type {?} */
    MtxGridColumn.prototype.field;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.header;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.hide;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.disabled;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.pinned;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.left;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.right;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.width;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.resizable;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.sortable;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.type;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.tag;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.buttons;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.formatter;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.cellTemplate;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.showExpand;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.description;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.i18n;
    /** @type {?|undefined} */
    MtxGridColumn.prototype.summary;
}
/**
 * Column selection
 * @record
 */
function MtxGridColumnSelectionItem() { }
if (false) {
    /** @type {?} */
    MtxGridColumnSelectionItem.prototype.label;
    /** @type {?} */
    MtxGridColumnSelectionItem.prototype.field;
    /** @type {?|undefined} */
    MtxGridColumnSelectionItem.prototype.show;
    /** @type {?|undefined} */
    MtxGridColumnSelectionItem.prototype.hide;
    /** @type {?|undefined} */
    MtxGridColumnSelectionItem.prototype.disabled;
}
/**
 * Cell Template
 * @record
 */
function MtxGridCellTemplate() { }
/**
 * Row Selection Formatter
 * @record
 */
function MtxGridRowSelectionFormatter() { }
if (false) {
    /** @type {?|undefined} */
    MtxGridRowSelectionFormatter.prototype.disabled;
    /** @type {?|undefined} */
    MtxGridRowSelectionFormatter.prototype.hideCheckbox;
}
/**
 * Row Class Formatter
 * @record
 */
function MtxGridRowClassFormatter() { }

/**
 * @fileoverview added by tsickle
 * Generated from: grid.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridService {
    constructor() { }
    /**
     * Get cell value from column key
     * @param {?} data row data
     * @param {?} col  column definition e.g. `a.b.c`
     * @return {?}
     */
    getCellValue(data, col) {
        /** @type {?} */
        const keyArr = col.field ? col.field.split('.') : [];
        /** @type {?} */
        let tmp = '';
        keyArr.forEach((/**
         * @param {?} key
         * @param {?} i
         * @return {?}
         */
        (key, i) => {
            if (i === 0) {
                tmp = data[key];
            }
            else {
                tmp = tmp && tmp[key];
            }
        }));
        return tmp;
    }
    /**
     * Remove white spaces in a string and convert string to array
     * @param {?} str string
     * @return {?}
     */
    str2arr(str) {
        return str.replace(/[\r\n\s]/g, '').split(',');
    }
}
MtxGridService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MtxGridService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridCellComponent {
    /**
     * @param {?} _dialog
     * @param {?} _dataGridSrv
     */
    constructor(_dialog, _dataGridSrv) {
        this._dialog = _dialog;
        this._dataGridSrv = _dataGridSrv;
        /**
         * Row data
         */
        this.rowData = {};
        this.colValue = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.colValue = this._dataGridSrv.getCellValue(this.rowData, this.colDef);
    }
    /**
     * @param {?} event
     * @param {?} title
     * @param {?=} fn
     * @param {?=} data
     * @return {?}
     */
    confirm(event, title, fn, data) {
        event.preventDefault();
        event.stopPropagation();
        this._dialog.confirm(title, (/**
         * @return {?}
         */
        () => fn(data)));
    }
    /**
     * @param {?} event
     * @param {?} btn
     * @param {?} rowData
     * @return {?}
     */
    handleOptionClick(event, btn, rowData) {
        event.preventDefault();
        event.stopPropagation();
        btn.click(rowData);
    }
    /**
     * Preview the image
     * @param {?} urlStr
     * @param {?=} multi
     * @return {?}
     */
    preview(urlStr, multi = false) {
        /** @type {?} */
        const imgs = [];
        /** @type {?} */
        let options = {};
        if (multi) {
            this._dataGridSrv.str2arr(urlStr).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            (url, index) => {
                imgs.push({ title: index + 1, src: url });
            }));
        }
        else {
            this._dataGridSrv.str2arr(urlStr).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            (url, index) => {
                imgs.push({ src: url });
            }));
            options = {
                title: false,
                footToolbar: ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'],
            };
        }
        this.viewer = new PhotoViewer(imgs, options);
    }
}
MtxGridCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'mtx-grid-cell',
                exportAs: 'mtxGridCell',
                template: "<!-- Formatting -->\r\n<ng-container *ngIf=\"colDef.formatter; else defaultFormattingTpl\">\r\n  <span [innerHTML]=\"colDef.formatter(rowData, colDef)\"></span>\r\n</ng-container>\r\n\r\n<!-- TODO: -->\r\n<ng-template #defaultFormattingTpl>\r\n  <ng-container [ngSwitch]=\"colDef.type\">\r\n    <!-- Tag -->\r\n    <ng-container *ngSwitchCase=\"'tag'\">\r\n      <mat-chip-list *ngIf=\"colDef.tag[colValue]; else tagEmptyTpl\">\r\n        <mat-chip color=\"primary\" [ngClass]=\"['bg-' + colDef.tag[colValue].color]\">\r\n          {{colDef.tag[colValue].text}}\r\n        </mat-chip>\r\n      </mat-chip-list>\r\n      <ng-template #tagEmptyTpl>{{colValue}}</ng-template>\r\n    </ng-container>\r\n    <!-- Image -->\r\n    <ng-container *ngSwitchCase=\"'image'\">\r\n      <img class=\"mat-cell-img\" [src]=\"colValue\" (click)=\"preview(colValue)\">\r\n    </ng-container>\r\n    <!-- Link -->\r\n    <ng-container *ngSwitchCase=\"'link'\">\r\n      <a [href]=\"colValue\" target=\"_blank\">{{colValue}}</a>\r\n    </ng-container>\r\n    <!-- Buttons -->\r\n    <ng-container *ngSwitchCase=\"'button'\">\r\n      <ng-container *ngFor=\"let btn of colDef.buttons; index as i; last as isLast;\">\r\n        <ng-container *ngIf=\"!btn.iif || btn.iif(rowData)\">\r\n          <ng-container *ngIf=\"btn.pop; else btnDefaultTpl\">\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"btn.type==='basic'\"\r\n                    mat-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"confirm($event, btn.popTitle, btn.click, rowData)\">\r\n              <mat-icon *ngIf=\"btn.icon\">{{btn.icon}}</mat-icon> {{btn.text}}\r\n            </button>\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"!btn.type || btn.type==='icon'\"\r\n                    mat-icon-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"confirm($event, btn.popTitle, btn.click, rowData)\">\r\n              <mat-icon>{{btn.icon}}</mat-icon>\r\n            </button>\r\n          </ng-container>\r\n          <ng-template #btnDefaultTpl>\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"btn.type==='basic'\"\r\n                    mat-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"handleOptionClick($event, btn, rowData)\">\r\n              <mat-icon *ngIf=\"btn.icon\">{{btn.icon}}</mat-icon> {{btn.text}}\r\n            </button>\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"!btn.type || btn.type==='icon'\"\r\n                    mat-icon-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"handleOptionClick($event, btn, rowData)\">\r\n              <mat-icon>{{btn.icon}}</mat-icon>\r\n            </button>\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n    <!-- Number -->\r\n    <ng-container *ngSwitchCase=\"'number'\">\r\n      {{(colValue | number) || '--'}}\r\n    </ng-container>\r\n    <!-- Currency -->\r\n    <ng-container *ngSwitchCase=\"'currency'\">\r\n      {{(colValue | currency) || '--'}}\r\n    </ng-container>\r\n    <!-- Percent -->\r\n    <ng-container *ngSwitchCase=\"'percent'\">\r\n      {{(colValue | percent) || '--'}}\r\n    </ng-container>\r\n    <!-- Boolean -->\r\n    <ng-container *ngSwitchCase=\"'boolean'\">\r\n      {{colValue}}\r\n    </ng-container>\r\n    <!-- Default -->\r\n    <ng-container *ngSwitchDefault>\r\n      {{colValue || '--'}}\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n"
            }] }
];
/** @nocollapse */
MtxGridCellComponent.ctorParameters = () => [
    { type: MtxDialog },
    { type: MtxGridService }
];
MtxGridCellComponent.propDecorators = {
    rowData: [{ type: Input }],
    colDef: [{ type: Input }]
};
if (false) {
    /**
     * Row data
     * @type {?}
     */
    MtxGridCellComponent.prototype.rowData;
    /**
     * Column definition
     * @type {?}
     */
    MtxGridCellComponent.prototype.colDef;
    /** @type {?} */
    MtxGridCellComponent.prototype.colValue;
    /** @type {?} */
    MtxGridCellComponent.prototype.viewer;
    /**
     * @type {?}
     * @private
     */
    MtxGridCellComponent.prototype._dialog;
    /**
     * @type {?}
     * @private
     */
    MtxGridCellComponent.prototype._dataGridSrv;
}

/**
 * @fileoverview added by tsickle
 * Generated from: column-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridColumnMenuComponent {
    constructor() {
        this.columns = [];
        this.selectable = true;
        this.selectedType = 'show';
        this.sortable = true;
        this.dndSortable = true;
        this._buttonText = '';
        this.buttonType = 'stroked';
        this.buttonColor = '';
        this.buttonClass = '';
        this.buttonIcon = '';
        this.selectionChange = new EventEmitter();
        this.sortChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get buttonText() {
        /** @type {?} */
        const defaultText = `Columns ${this.selectedType === 'show' ? 'Shown' : 'Hidden'}`;
        /** @type {?} */
        const text = this._buttonText ? this._buttonText : defaultText;
        return text;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set buttonText(value) {
        this._buttonText = value;
    }
    /**
     * @return {?}
     */
    get columnFields() {
        /** @type {?} */
        const fields = this.columns
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.selectedType === 'show' ? item.show : !item.hide))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.field));
        return fields;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    handleDrop(event) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
        this.sortChange.emit(this.columnFields);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleSelect(e) {
        this.selectionChange.emit(this.columnFields);
    }
}
MtxGridColumnMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'mtx-grid-column-menu',
                exportAs: 'mtxGridColumnMenu',
                template: "<ng-container [ngSwitch]=\"buttonType\">\r\n  <ng-container *ngSwitchCase=\"'raised'\">\r\n    <button [ngClass]=\"buttonClass\" mat-raised-button [color]=\"buttonColor\"\r\n            [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon> {{buttonText}}\r\n    </button>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'stroked'\">\r\n    <button [ngClass]=\"buttonClass\" mat-stroked-button [color]=\"buttonColor\"\r\n            [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon> {{buttonText}}\r\n    </button>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'flat'\">\r\n    <button [ngClass]=\"buttonClass\" mat-flat-button [color]=\"buttonColor\"\r\n            [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon> {{buttonText}}\r\n    </button>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'icon'\">\r\n    <button [ngClass]=\"buttonClass\" mat-icon-button [color]=\"buttonColor\"\r\n            [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon>\r\n    </button>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'fab'\">\r\n    <button [ngClass]=\"buttonClass\" mat-fab [color]=\"buttonColor\" [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon> {{buttonText}}\r\n    </button>\r\n  </ng-container>\r\n  <ng-container *ngSwitchCase=\"'mini-fab'\">\r\n    <button [ngClass]=\"buttonClass\" mat-mini-fab [color]=\"buttonColor\"\r\n            [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon> {{buttonText}}\r\n    </button>\r\n  </ng-container>\r\n  <ng-container *ngSwitchDefault>\r\n    <button [ngClass]=\"buttonClass\" mat-button [color]=\"buttonColor\" [matMenuTriggerFor]=\"menu\">\r\n      <mat-icon *ngIf=\"buttonIcon\">{{buttonIcon}}</mat-icon> {{buttonText}}\r\n    </button>\r\n  </ng-container>\r\n</ng-container>\r\n\r\n<mat-menu #menu=\"matMenu\" class=\"mtx-grid-column-menu\">\r\n  <div class=\"mtx-grid-column-menu-inner\"\r\n       (click)=\"$event.stopPropagation()\"\r\n       (keydown)=\"$event.stopPropagation()\">\r\n\r\n    <div class=\"mtx-grid-column-menu-list\"\r\n         cdkDropList (cdkDropListDropped)=\"handleDrop($event)\"\r\n         *ngIf=\"sortable\">\r\n      <div class=\"mtx-grid-column-menu-item\" *ngFor=\"let col of columns\"\r\n           cdkDrag [cdkDragDisabled]=\"selectedType === 'show'? !col.show : col.hide\">\r\n        <mat-icon cdkDragHandle>drag_handle</mat-icon>\r\n        <ng-template [ngTemplateOutlet]=\"checkboxList\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: col }\">\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mtx-grid-column-menu-list\" *ngIf=\"!sortable\">\r\n      <div class=\"mtx-grid-column-menu-item\" *ngFor=\"let col of columns\">\r\n        <ng-template [ngTemplateOutlet]=\"checkboxList\"\r\n                     [ngTemplateOutletContext]=\"{ $implicit: col }\">\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-menu>\r\n\r\n<ng-template #checkboxList let-col>\r\n  <mat-checkbox class=\"mtx-grid-column-menu-item-label\"\r\n                *ngIf=\"selectable\"\r\n                [(ngModel)]=\"col[selectedType]\"\r\n                [disabled]=\"col.disabled\"\r\n                (change)=\"handleSelect($event)\">\r\n    {{col.label}}\r\n  </mat-checkbox>\r\n  <span class=\"mtx-grid-column-menu-item-label\" *ngIf=\"!selectable\">{{col.label}}</span>\r\n</ng-template>\r\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mtx-grid-column-menu .mat-menu-content{padding:0}.mtx-grid-column-menu-inner{padding:16px}.mtx-grid-column-menu-list{display:block;max-width:100%}.mtx-grid-column-menu-list.cdk-drop-list-dragging .mtx-grid-column-menu-item:not(.cdk-drag-placeholder){transition:transform 250ms cubic-bezier(0,0,.2,1)}.mtx-grid-column-menu-list.cdk-drop-list .mtx-grid-column-menu-item-label{padding:0 4px}.mtx-grid-column-menu-item{display:flex;flex-direction:row;align-items:center;padding:4px 0;color:rgba(0,0,0,.87)}.mtx-grid-column-menu-item.cdk-drag-disabled .cdk-drag-handle{opacity:.35;cursor:no-drop}.mtx-grid-column-menu-item .cdk-drag-handle{cursor:move}.mtx-grid-column-menu-item.cdk-drag-preview{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.mtx-grid-column-menu-item.cdk-drag-placeholder{opacity:0}.mtx-grid-column-menu-item.cdk-drag-animating{transition:transform 250ms cubic-bezier(0,0,.2,1)}"]
            }] }
];
/** @nocollapse */
MtxGridColumnMenuComponent.ctorParameters = () => [];
MtxGridColumnMenuComponent.propDecorators = {
    columns: [{ type: Input }],
    selectable: [{ type: Input }],
    selectedType: [{ type: Input }],
    sortable: [{ type: Input }],
    dndSortable: [{ type: Input }],
    buttonText: [{ type: Input }],
    buttonType: [{ type: Input }],
    buttonColor: [{ type: Input }],
    buttonClass: [{ type: Input }],
    buttonIcon: [{ type: Input }],
    selectionChange: [{ type: Output }],
    sortChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.columns;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.selectable;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.selectedType;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.sortable;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.dndSortable;
    /**
     * @type {?}
     * @private
     */
    MtxGridColumnMenuComponent.prototype._buttonText;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.buttonType;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.buttonColor;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.buttonClass;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.buttonIcon;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.selectionChange;
    /** @type {?} */
    MtxGridColumnMenuComponent.prototype.sortChange;
}

/**
 * @fileoverview added by tsickle
 * Generated from: expansion-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridExpansionToggleDirective {
    constructor() {
        this._opened = false;
        this.toggleChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get expended() {
        return this._opened;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expandableRow(value) {
        if (value !== this._row) {
            this._row = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set template(value) {
        if (value !== this._tplRef) {
            this._tplRef = value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.toggle();
    }
    /**
     * @return {?}
     */
    toggle() {
        this._opened = !this._opened;
        this.toggleChange.emit(this);
    }
    /**
     * @private
     * @return {?}
     */
    render() { }
}
MtxGridExpansionToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mtx-expansion-toggle]',
            },] }
];
/** @nocollapse */
MtxGridExpansionToggleDirective.ctorParameters = () => [];
MtxGridExpansionToggleDirective.propDecorators = {
    expended: [{ type: HostBinding, args: ['class.expanded',] }],
    expandableRow: [{ type: Input }],
    template: [{ type: Input, args: ['expansionRowTpl',] }],
    toggleChange: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MtxGridExpansionToggleDirective.prototype._opened;
    /**
     * @type {?}
     * @private
     */
    MtxGridExpansionToggleDirective.prototype._row;
    /**
     * @type {?}
     * @private
     */
    MtxGridExpansionToggleDirective.prototype._tplRef;
    /** @type {?} */
    MtxGridExpansionToggleDirective.prototype.toggleChange;
}

/**
 * @fileoverview added by tsickle
 * Generated from: cell-selection.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridCellSelectionDirective {
    /**
     * @param {?} _dataGrid
     */
    constructor(_dataGrid) {
        this._dataGrid = _dataGrid;
        this._selected = false;
        this._active = false;
        this.shiftKeyPressed = false;
        this.ctrlKeyPressed = false;
        this.cellSelectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set matSelectableRowData(value) {
        if (value !== this._rowData) {
            this._rowData = value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.ctrlKeyPressed = event.ctrlKey;
        this.shiftKeyPressed = event.shiftKey;
        if (this._dataGrid.cellSelectable) {
            this.select();
        }
    }
    /**
     * @return {?}
     */
    select() {
        this._selected = true;
        this.cellSelectionChange.emit(this);
    }
    /**
     * @return {?}
     */
    unselect() {
        this._selected = false;
        this.cellSelectionChange.emit(this);
    }
    /**
     * @return {?}
     */
    toggle() {
        this._selected = !this._selected;
        this.cellSelectionChange.emit(this);
    }
}
MtxGridCellSelectionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mtx-selectable-cell]',
            },] }
];
/** @nocollapse */
MtxGridCellSelectionDirective.ctorParameters = () => [
    { type: MtxGridComponent }
];
MtxGridCellSelectionDirective.propDecorators = {
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    matSelectableRowData: [{ type: Input }],
    cellSelectionChange: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    MtxGridCellSelectionDirective.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    MtxGridCellSelectionDirective.prototype._active;
    /**
     * @type {?}
     * @private
     */
    MtxGridCellSelectionDirective.prototype._parentRow;
    /**
     * @type {?}
     * @private
     */
    MtxGridCellSelectionDirective.prototype._rowData;
    /** @type {?} */
    MtxGridCellSelectionDirective.prototype.shiftKeyPressed;
    /** @type {?} */
    MtxGridCellSelectionDirective.prototype.ctrlKeyPressed;
    /** @type {?} */
    MtxGridCellSelectionDirective.prototype.cellSelectionChange;
    /**
     * @type {?}
     * @private
     */
    MtxGridCellSelectionDirective.prototype._dataGrid;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxGridModule {
}
MtxGridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatTableModule,
                    MatSortModule,
                    MatPaginatorModule,
                    MatCheckboxModule,
                    MatButtonModule,
                    MatProgressBarModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatIconModule,
                    MtxDialogModule,
                    MatSelectModule,
                    MatFormFieldModule,
                    MatMenuModule,
                    DragDropModule,
                ],
                exports: [
                    MtxGridComponent,
                    MtxGridCellComponent,
                    MtxGridColumnMenuComponent,
                    MtxGridExpansionToggleDirective,
                    MtxGridCellSelectionDirective,
                ],
                declarations: [
                    MtxGridComponent,
                    MtxGridCellComponent,
                    MtxGridColumnMenuComponent,
                    MtxGridExpansionToggleDirective,
                    MtxGridCellSelectionDirective,
                ],
                providers: [MtxGridService],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxGrid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxGridCellComponent, MtxGridCellSelectionDirective, MtxGridColumnMenuComponent, MtxGridComponent, MtxGridExpansionToggleDirective, MtxGridModule, MtxGridService };
//# sourceMappingURL=mtxGrid.js.map
