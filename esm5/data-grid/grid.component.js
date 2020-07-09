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
var MtxGridComponent = /** @class */ (function () {
    function MtxGridComponent(_dataGridSrv) {
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
    Object.defineProperty(MtxGridComponent.prototype, "hasNoResult", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.data || this.data.length === 0) && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxGridComponent.prototype, "whetherShowSummary", {
        // TODO:
        get: 
        // TODO:
        /**
         * @return {?}
         */
        function () {
            return this.showSummary;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @param {?} colDef
     * @return {?}
     */
    MtxGridComponent.prototype.getColData = /**
     * @param {?} data
     * @param {?} colDef
     * @return {?}
     */
    function (data, colDef) {
        return data.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item[colDef.field]; }));
    };
    /**
     * @param {?} summary
     * @param {?} data
     * @param {?} colDef
     * @return {?}
     */
    MtxGridComponent.prototype.formatSummary = /**
     * @param {?} summary
     * @param {?} data
     * @param {?} colDef
     * @return {?}
     */
    function (summary, data, colDef) {
        if (this.isString(summary)) {
            return summary;
        }
        else if (this.isFunction(summary)) {
            /** @type {?} */
            var colData = this.getColData(data, colDef);
            return summary(colData, colDef);
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    MtxGridComponent.prototype.isTemplateRef = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj instanceof TemplateRef;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MtxGridComponent.prototype.isString = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return Object.prototype.toString.call(fn) === '[object String]';
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MtxGridComponent.prototype.isFunction = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return Object.prototype.toString.call(fn) === '[object Function]';
    };
    /**
     * @return {?}
     */
    MtxGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    // Waiting for async data
    // Waiting for async data
    /**
     * @return {?}
     */
    MtxGridComponent.prototype.ngOnChanges = 
    // Waiting for async data
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        this.countPinnedPosition();
        this.displayedColumns = this.columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return !item.hide; })).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.field; }));
        if (this.showColumnMenuButton) {
            this.columnMenuData = this.columns.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
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
            function (_) {
                _this.expansionRowStates.push({ expanded: false });
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
    };
    /**
     * @return {?}
     */
    MtxGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MtxGridComponent.prototype.countPinnedPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = (/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) { return acc + parseFloat(cur.width || '80px'); });
        /** @type {?} */
        var pinnedLeftCols = this.columns.filter((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return col.pinned && col.pinned === 'left'; }));
        pinnedLeftCols.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) {
            item.left = pinnedLeftCols.slice(0, idx).reduce(count, 0) + 'px';
        }));
        /** @type {?} */
        var pinnedRightCols = this.columns
            .filter((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return col.pinned && col.pinned === 'right'; }))
            .reverse();
        pinnedRightCols.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) {
            item.right = pinnedRightCols.slice(0, idx).reduce(count, 0) + 'px';
        }));
    };
    /**
     * @param {?} index
     * @param {?} dataIndex
     * @return {?}
     */
    MtxGridComponent.prototype.isOddRow = /**
     * @param {?} index
     * @param {?} dataIndex
     * @return {?}
     */
    function (index, dataIndex) {
        return typeof index === 'undefined' ? dataIndex % 2 : index % 2;
    };
    /**
     * @param {?} index
     * @param {?} dataIndex
     * @return {?}
     */
    MtxGridComponent.prototype.getIndex = /**
     * @param {?} index
     * @param {?} dataIndex
     * @return {?}
     */
    function (index, dataIndex) {
        return typeof index === 'undefined' ? dataIndex : index;
    };
    /**
     * @param {?} sort
     * @return {?}
     */
    MtxGridComponent.prototype.handleSortChange = /**
     * @param {?} sort
     * @return {?}
     */
    function (sort) {
        this.sortChange.emit(sort);
    };
    /** Expansion change event */
    /**
     * Expansion change event
     * @param {?} expansionRef
     * @param {?} rowData
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    MtxGridComponent.prototype.handleExpansionChange = /**
     * Expansion change event
     * @param {?} expansionRef
     * @param {?} rowData
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    function (expansionRef, rowData, column, index) {
        if (this.expandable) {
            this.expansionRowStates[index].expanded = !this.expansionRowStates[index].expanded;
        }
        this.expansionChange.emit({ opened: expansionRef.expended, data: rowData, index: index, column: column });
    };
    /** Cell select event */
    /**
     * Cell select event
     * @param {?} cellRef
     * @param {?} rowData
     * @param {?} colDef
     * @return {?}
     */
    MtxGridComponent.prototype.handleCellSelect = /**
     * Cell select event
     * @param {?} cellRef
     * @param {?} rowData
     * @param {?} colDef
     * @return {?}
     */
    function (cellRef, rowData, colDef) {
        // If not the same cell
        if (this._selectedCell !== cellRef) {
            /** @type {?} */
            var colValue = this._dataGridSrv.getCellValue(rowData, colDef);
            this.cellSelection = []; // reset
            this.cellSelection.push({ cellData: colValue, rowData: rowData, colDef: colDef });
            this.cellSelectionChange.emit(this.cellSelection);
            if (this._selectedCell) {
                this._selectedCell.unselect(); // the selectedCell will be undefined
            }
        }
        this._selectedCell = cellRef.selected ? cellRef : undefined;
    };
    /** Row select event */
    /**
     * Row select event
     * @param {?} event
     * @param {?} rowData
     * @return {?}
     */
    MtxGridComponent.prototype.handleRowSelect = /**
     * Row select event
     * @param {?} event
     * @param {?} rowData
     * @return {?}
     */
    function (event, rowData) {
        if (this.rowSelectable &&
            !(this.rowSelectionFormatter.disabled && this.rowSelectionFormatter.disabled(rowData)) &&
            !(this.rowSelectionFormatter.hideCheckbox && this.rowSelectionFormatter.hideCheckbox(rowData))) {
            // metaKey -> command key
            if (!event.ctrlKey && !event.metaKey) {
                this.rowSelection.clear();
            }
            this.handleSingleToggle(rowData);
        }
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    MtxGridComponent.prototype.isAllSelected = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var numSelected = this.rowSelection.selected.length;
        /** @type {?} */
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    MtxGridComponent.prototype.handleMasterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected()
            ? this.rowSelection.clear()
            : this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.rowSelection.select(row); }));
        this.rowSelectionChange.emit(this.rowSelection.selected);
    };
    /** Select single row */
    /**
     * Select single row
     * @param {?} row
     * @return {?}
     */
    MtxGridComponent.prototype.handleSingleToggle = /**
     * Select single row
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.rowSelection.toggle(row);
        this.rowSelectionChange.emit(this.rowSelection.selected);
    };
    /** Column change event */
    /**
     * Column change event
     * @param {?} columns
     * @return {?}
     */
    MtxGridComponent.prototype.handleColumnHidingChange = /**
     * Column change event
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.columnHidingChange.emit(columns);
        this.displayedColumns = Object.assign([], columns);
        if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
            this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
        }
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    MtxGridComponent.prototype.handleColumnMovingChange = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        this.columnMovingChange.emit(columns);
        this.displayedColumns = Object.assign([], columns);
        if (this.rowSelectable && !this.hideRowSelectionCheckbox) {
            this.displayedColumns.unshift('MtxGridCheckboxColumnDef');
        }
    };
    /** Customize expansion event */
    /**
     * Customize expansion event
     * @param {?} index
     * @return {?}
     */
    MtxGridComponent.prototype.toggleExpansion = /**
     * Customize expansion event
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (!this.expandable) {
            throw new Error('The `expandable` should be set true.');
        }
        this.expansionRowStates[index].expanded = !this.expansionRowStates[index].expanded;
        return this.expansionRowStates[index].expanded;
    };
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
    MtxGridComponent.ctorParameters = function () { return [
        { type: MtxGridService }
    ]; };
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
    return MtxGridComponent;
}());
export { MtxGridComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctbWF0ZXJvL2V4dGVuc2lvbnMvZGF0YS1ncmlkLyIsInNvdXJjZXMiOlsiZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFdBQVcsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFRLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBV3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRDtJQTBKRSwwQkFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBaEl2QyxZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUM5QixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7UUFNaEIsWUFBTyxHQUFHLElBQUksQ0FBQzs7OztRQUdmLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsYUFB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SUFDckMsZ0RBQW1DOztJQUNuQyxnREFBMEM7O0lBQzFDLGlEQUFvQzs7SUFDcEMsaURBQW9DOztJQUNwQyxnREFBbUM7O0lBRW5DLDBDQUErQjs7SUFDL0IsK0NBQXVEOztJQUN2RCw4Q0FBNEQ7O0lBRTVELHlDQUE4Qjs7SUFDOUIsOENBQTREOztJQUU1RCwwQ0FBK0I7O0lBQy9CLCtDQUE2RDs7Ozs7SUFHN0Qsd0NBQTJDOztJQUMzQyw0Q0FBNEM7Ozs7O0lBTzVDLDBDQUFnRTs7Ozs7SUFHaEUsd0NBQThEOzs7OztJQUc5RCx1Q0FBNkI7O0lBQzdCLDJDQUFpRTs7Ozs7SUFRakUsdUNBQTZCOzs7OztJQWVqQix3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XHJcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yLCBQYWdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBTb3J0LCBNYXRTb3J0IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE10eEdyaWRDb2x1bW4sXHJcbiAgTXR4R3JpZENvbHVtblNlbGVjdGlvbkl0ZW0sXHJcbiAgTXR4R3JpZENlbGxUZW1wbGF0ZSxcclxuICBNdHhHcmlkUm93U2VsZWN0aW9uRm9ybWF0dGVyLFxyXG4gIE10eEdyaWRSb3dDbGFzc0Zvcm1hdHRlcixcclxufSBmcm9tICcuL2dyaWQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTXR4R3JpZENlbGxTZWxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL2NlbGwtc2VsZWN0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE10eEdyaWRFeHBhbnNpb25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2V4cGFuc2lvbi10b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTXR4R3JpZFNlcnZpY2UgfSBmcm9tICcuL2dyaWQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ210eC1ncmlkJyxcclxuICBleHBvcnRBczogJ210eEdyaWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncmlkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtdHgtZ3JpZCcsXHJcbiAgfSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2V4cGFuc2lvbicsIFtcclxuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG1pbkhlaWdodDogJzAnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXHJcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXHJcbiAgICBdKSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXR4R3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcclxuICBAVmlld0NoaWxkKE1hdFNvcnQsIHsgc3RhdGljOiB0cnVlIH0pIHNvcnQ6IE1hdFNvcnQ7XHJcblxyXG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxhbnk+O1xyXG5cclxuICBASW5wdXQoKSBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcclxuXHJcbiAgQElucHV0KCkgY29sdW1uczogTXR4R3JpZENvbHVtbltdID0gW107XHJcbiAgQElucHV0KCkgZGF0YSA9IFtdO1xyXG4gIEBJbnB1dCgpIGxlbmd0aCA9IDA7XHJcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAvLyBUcmFja2luZyBmdW5jdGlvblxyXG4gIEBJbnB1dCgpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+O1xyXG5cclxuICAvKiogV2hldGhlciB0byBzaG93IHRvb2x0aXAgb24gY29sdW1ucyAqL1xyXG4gIEBJbnB1dCgpIHRvb2x0aXAgPSB0cnVlO1xyXG5cclxuICAvKiogV2hldGhlciB0byBwYWdlIG9uIHRoZSBmcm9udCBlbmQgKi9cclxuICBASW5wdXQoKSBwYWdlT25Gcm9udCA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1BhZ2luYXRvciA9IHRydWU7XHJcbiAgQElucHV0KCkgcGFnZURpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0ZpcnN0TGFzdEJ1dHRvbnMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDA7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBwYWdlU2l6ZU9wdGlvbnMgPSBbMTAsIDUwLCAxMDBdO1xyXG4gIEBJbnB1dCgpIGhpZGVQYWdlU2l6ZSA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBwYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKiBTb3J0ICovXHJcblxyXG4gIEBJbnB1dCgpIHNvcnRPbkZyb250ID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydD4oKTtcclxuXHJcbiAgLyoqIEhvdmVyICYgU3RyaXBlZCBzdHlsZSAqL1xyXG5cclxuICBASW5wdXQoKSByb3dIb3ZlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJvd1N0cmlwZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEV4cGFuZGFibGUgcm93ICovXHJcblxyXG4gIGV4cGFuc2lvblJvd1N0YXRlcyA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBleHBhbmRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwYW5zaW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQE91dHB1dCgpIGV4cGFuc2lvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAvKiogV2hldGhlciBzdXBwb3J0IG11bHRpcGxlIHJvdy9jZWxsIHNlbGVjdGlvbiAqL1xyXG5cclxuICBASW5wdXQoKSBtdWx0aVNlbGVjdGFibGUgPSB0cnVlO1xyXG5cclxuICAvKiogUm93IHNlbGVjdGlvbiAqL1xyXG5cclxuICByb3dTZWxlY3Rpb246IFNlbGVjdGlvbk1vZGVsPGFueT4gPSBuZXcgU2VsZWN0aW9uTW9kZWw8YW55Pih0cnVlLCBbXSk7XHJcblxyXG4gIEBJbnB1dCgpIHJvd1NlbGVjdGVkID0gW107XHJcbiAgQElucHV0KCkgcm93U2VsZWN0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhpZGVSb3dTZWxlY3Rpb25DaGVja2JveCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJvd1NlbGVjdGlvbkZvcm1hdHRlcjogTXR4R3JpZFJvd1NlbGVjdGlvbkZvcm1hdHRlciA9IHt9O1xyXG4gIEBJbnB1dCgpIHJvd0NsYXNzRm9ybWF0dGVyOiBNdHhHcmlkUm93Q2xhc3NGb3JtYXR0ZXIgPSB7fTtcclxuICBAT3V0cHV0KCkgcm93U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuXHJcbiAgLyoqIENlbGwgc2VsZWN0aW9uICovXHJcblxyXG4gIGNlbGxTZWxlY3Rpb24gPSBbXTtcclxuXHJcbiAgQElucHV0KCkgY2VsbFNlbGVjdGFibGUgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBjZWxsU2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRDZWxsOiBNdHhHcmlkQ2VsbFNlbGVjdGlvbkRpcmVjdGl2ZTtcclxuXHJcbiAgLyoqIFRvb2xiYXIgKi9cclxuXHJcbiAgQElucHV0KCkgc2hvd1Rvb2xiYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0b29sYmFyVGl0bGUgPSAnJztcclxuICBASW5wdXQoKSB0b29sYmFyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGNvbHVtbk1lbnVEYXRhOiBNdHhHcmlkQ29sdW1uU2VsZWN0aW9uSXRlbVtdID0gW107XHJcblxyXG4gIEBJbnB1dCgpIHNob3dDb2x1bW5NZW51QnV0dG9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjb2x1bW5NZW51QnV0dG9uVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbk1lbnVCdXR0b25UeXBlID0gJ3N0cm9rZWQnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbk1lbnVCdXR0b25Db2xvciA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbk1lbnVCdXR0b25DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNvbHVtbk1lbnVCdXR0b25JY29uID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbkhpZGVhYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjb2x1bW5IaWRpbmdDaGVja2VkOiAnc2hvdycgfCAnaGlkZScgPSAnc2hvdyc7XHJcbiAgQE91dHB1dCgpIGNvbHVtbkhpZGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGNvbHVtbk1vdmFibGUgPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBjb2x1bW5Nb3ZpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICBASW5wdXQoKSBjb2x1bW5QaW5uYWJsZSA9IHRydWU7XHJcbiAgQE91dHB1dCgpIGNvbHVtblBpbm5pbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG5cclxuICAvKiogTm8gUmVzdWx0ICovXHJcbiAgQElucHV0KCkgbm9SZXN1bHRUZXh0ID0gJ05vIHJlY29yZHMgZm91bmQnO1xyXG4gIEBJbnB1dCgpIG5vUmVzdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIGdldCBoYXNOb1Jlc3VsdCgpIHtcclxuICAgIHJldHVybiAoIXRoaXMuZGF0YSB8fCB0aGlzLmRhdGEubGVuZ3RoID09PSAwKSAmJiAhdGhpcy5sb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRoZWFkICovXHJcbiAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBNdHhHcmlkQ2VsbFRlbXBsYXRlO1xyXG5cclxuICAvKiogdGJvZHkgKi9cclxuICBASW5wdXQoKSBjZWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBNdHhHcmlkQ2VsbFRlbXBsYXRlO1xyXG5cclxuICAvKiogdGZvb3QgKi9cclxuICBASW5wdXQoKSBzaG93U3VtbWFyeSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHN1bW1hcnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IE10eEdyaWRDZWxsVGVtcGxhdGU7XHJcblxyXG4gIC8vIFRPRE86XHJcbiAgZ2V0IHdoZXRoZXJTaG93U3VtbWFyeSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dTdW1tYXJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqIFNpZGViYXIgKi9cclxuICBASW5wdXQoKSBzaG93U2lkZWJhciA9IGZhbHNlO1xyXG5cclxuICBnZXRDb2xEYXRhKGRhdGE6IGFueSwgY29sRGVmOiBNdHhHcmlkQ29sdW1uKSB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbVtjb2xEZWYuZmllbGRdKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFN1bW1hcnkoc3VtbWFyeTogYW55LCBkYXRhOiBhbnksIGNvbERlZjogTXR4R3JpZENvbHVtbikge1xyXG4gICAgaWYgKHRoaXMuaXNTdHJpbmcoc3VtbWFyeSkpIHtcclxuICAgICAgcmV0dXJuIHN1bW1hcnk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNGdW5jdGlvbihzdW1tYXJ5KSkge1xyXG4gICAgICBjb25zdCBjb2xEYXRhID0gdGhpcy5nZXRDb2xEYXRhKGRhdGEsIGNvbERlZik7XHJcbiAgICAgIHJldHVybiBzdW1tYXJ5KGNvbERhdGEsIGNvbERlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhR3JpZFNydjogTXR4R3JpZFNlcnZpY2UpIHsgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBpc1N0cmluZyhmbjogYW55KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGZuKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbiAgfVxyXG5cclxuICBpc0Z1bmN0aW9uKGZuOiBhbnkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgLy8gV2FpdGluZyBmb3IgYXN5bmMgZGF0YVxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5jb3VudFBpbm5lZFBvc2l0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihpdGVtID0+ICFpdGVtLmhpZGUpLm1hcChpdGVtID0+IGl0ZW0uZmllbGQpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3dDb2x1bW5NZW51QnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuY29sdW1uTWVudURhdGEgPSB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbDogaXRlbS5oZWFkZXIgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgZmllbGQ6IGl0ZW0uZmllbGQsXHJcbiAgICAgICAgICBzaG93OiAhaXRlbS5oaWRlLFxyXG4gICAgICAgICAgaGlkZTogaXRlbS5oaWRlLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucm93U2VsZWN0YWJsZSAmJiAhdGhpcy5oaWRlUm93U2VsZWN0aW9uQ2hlY2tib3gpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ010eEdyaWRDaGVja2JveENvbHVtbkRlZicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFdlIHNob3VsZCBjb3B5IGVhY2ggaXRlbSBvZiBkYXRhIGZvciBleHBhbnNpb24gZGF0YVxyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLmV4cGFuc2lvblJvd1N0YXRlcyA9IFtdOyAvLyByZXNldFxyXG5cclxuICAgICAgdGhpcy5kYXRhPy5mb3JFYWNoKF8gPT4ge1xyXG4gICAgICAgIHRoaXMuZXhwYW5zaW9uUm93U3RhdGVzLnB1c2goeyBleHBhbmRlZDogZmFsc2UgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4odGhpcy5kYXRhKTtcclxuXHJcbiAgICBpZiAodGhpcy5wYWdlT25Gcm9udCkge1xyXG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc29ydE9uRnJvbnQpIHtcclxuICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucm93U2VsZWN0YWJsZSkge1xyXG4gICAgICB0aGlzLnJvd1NlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxhbnk+KHRoaXMubXVsdGlTZWxlY3RhYmxlLCB0aGlzLnJvd1NlbGVjdGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkgeyB9XHJcblxyXG4gIGNvdW50UGlubmVkUG9zaXRpb24oKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IChhY2M6IG51bWJlciwgY3VyOiBNdHhHcmlkQ29sdW1uKSA9PiBhY2MgKyBwYXJzZUZsb2F0KGN1ci53aWR0aCB8fCAnODBweCcpO1xyXG5cclxuICAgIGNvbnN0IHBpbm5lZExlZnRDb2xzID0gdGhpcy5jb2x1bW5zLmZpbHRlcihjb2wgPT4gY29sLnBpbm5lZCAmJiBjb2wucGlubmVkID09PSAnbGVmdCcpO1xyXG4gICAgcGlubmVkTGVmdENvbHMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgIGl0ZW0ubGVmdCA9IHBpbm5lZExlZnRDb2xzLnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50LCAwKSArICdweCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBwaW5uZWRSaWdodENvbHMgPSB0aGlzLmNvbHVtbnNcclxuICAgICAgLmZpbHRlcihjb2wgPT4gY29sLnBpbm5lZCAmJiBjb2wucGlubmVkID09PSAncmlnaHQnKVxyXG4gICAgICAucmV2ZXJzZSgpO1xyXG4gICAgcGlubmVkUmlnaHRDb2xzLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICBpdGVtLnJpZ2h0ID0gcGlubmVkUmlnaHRDb2xzLnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50LCAwKSArICdweCc7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzT2RkUm93KGluZGV4OiBudW1iZXIsIGRhdGFJbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJyA/IGRhdGFJbmRleCAlIDIgOiBpbmRleCAlIDI7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleChpbmRleDogbnVtYmVyLCBkYXRhSW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcgPyBkYXRhSW5kZXggOiBpbmRleDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNvcnRDaGFuZ2Uoc29ydDogU29ydCkge1xyXG4gICAgdGhpcy5zb3J0Q2hhbmdlLmVtaXQoc29ydCk7XHJcbiAgfVxyXG5cclxuICAvKiogRXhwYW5zaW9uIGNoYW5nZSBldmVudCAqL1xyXG4gIGhhbmRsZUV4cGFuc2lvbkNoYW5nZShcclxuICAgIGV4cGFuc2lvblJlZjogTXR4R3JpZEV4cGFuc2lvblRvZ2dsZURpcmVjdGl2ZSxcclxuICAgIHJvd0RhdGE6IGFueSxcclxuICAgIGNvbHVtbjogYW55LFxyXG4gICAgaW5kZXg6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICB0aGlzLmV4cGFuc2lvblJvd1N0YXRlc1tpbmRleF0uZXhwYW5kZWQgPSAhdGhpcy5leHBhbnNpb25Sb3dTdGF0ZXNbaW5kZXhdLmV4cGFuZGVkO1xyXG4gICAgfVxyXG4gICAgdGhpcy5leHBhbnNpb25DaGFuZ2UuZW1pdCh7IG9wZW5lZDogZXhwYW5zaW9uUmVmLmV4cGVuZGVkLCBkYXRhOiByb3dEYXRhLCBpbmRleCwgY29sdW1uIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIENlbGwgc2VsZWN0IGV2ZW50ICovXHJcbiAgaGFuZGxlQ2VsbFNlbGVjdChjZWxsUmVmOiBNdHhHcmlkQ2VsbFNlbGVjdGlvbkRpcmVjdGl2ZSwgcm93RGF0YTogYW55LCBjb2xEZWY6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gSWYgbm90IHRoZSBzYW1lIGNlbGxcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZENlbGwgIT09IGNlbGxSZWYpIHtcclxuICAgICAgY29uc3QgY29sVmFsdWUgPSB0aGlzLl9kYXRhR3JpZFNydi5nZXRDZWxsVmFsdWUocm93RGF0YSwgY29sRGVmKTtcclxuICAgICAgdGhpcy5jZWxsU2VsZWN0aW9uID0gW107IC8vIHJlc2V0XHJcbiAgICAgIHRoaXMuY2VsbFNlbGVjdGlvbi5wdXNoKHsgY2VsbERhdGE6IGNvbFZhbHVlLCByb3dEYXRhLCBjb2xEZWYgfSk7XHJcblxyXG4gICAgICB0aGlzLmNlbGxTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLmNlbGxTZWxlY3Rpb24pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkQ2VsbCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2VsbC51bnNlbGVjdCgpOyAvLyB0aGUgc2VsZWN0ZWRDZWxsIHdpbGwgYmUgdW5kZWZpbmVkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zZWxlY3RlZENlbGwgPSBjZWxsUmVmLnNlbGVjdGVkID8gY2VsbFJlZiA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIC8qKiBSb3cgc2VsZWN0IGV2ZW50ICovXHJcbiAgaGFuZGxlUm93U2VsZWN0KGV2ZW50OiBNb3VzZUV2ZW50LCByb3dEYXRhOiBhbnkpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5yb3dTZWxlY3RhYmxlICYmXHJcbiAgICAgICEodGhpcy5yb3dTZWxlY3Rpb25Gb3JtYXR0ZXIuZGlzYWJsZWQgJiYgdGhpcy5yb3dTZWxlY3Rpb25Gb3JtYXR0ZXIuZGlzYWJsZWQocm93RGF0YSkpICYmXHJcbiAgICAgICEodGhpcy5yb3dTZWxlY3Rpb25Gb3JtYXR0ZXIuaGlkZUNoZWNrYm94ICYmIHRoaXMucm93U2VsZWN0aW9uRm9ybWF0dGVyLmhpZGVDaGVja2JveChyb3dEYXRhKSlcclxuICAgICkge1xyXG4gICAgICAvLyBtZXRhS2V5IC0+IGNvbW1hbmQga2V5XHJcbiAgICAgIGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgIHRoaXMucm93U2VsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaGFuZGxlU2luZ2xlVG9nZ2xlKHJvd0RhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cclxuICBpc0FsbFNlbGVjdGVkKCkge1xyXG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnJvd1NlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xyXG4gICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cclxuICBoYW5kbGVNYXN0ZXJUb2dnbGUoKSB7XHJcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKVxyXG4gICAgICA/IHRoaXMucm93U2VsZWN0aW9uLmNsZWFyKClcclxuICAgICAgOiB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnJvd1NlbGVjdGlvbi5zZWxlY3Qocm93KSk7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMucm93U2VsZWN0aW9uLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIC8qKiBTZWxlY3Qgc2luZ2xlIHJvdyAqL1xyXG4gIGhhbmRsZVNpbmdsZVRvZ2dsZShyb3c6IGFueSkge1xyXG4gICAgdGhpcy5yb3dTZWxlY3Rpb24udG9nZ2xlKHJvdyk7XHJcbiAgICB0aGlzLnJvd1NlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMucm93U2VsZWN0aW9uLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIC8qKiBDb2x1bW4gY2hhbmdlIGV2ZW50ICovXHJcblxyXG4gIGhhbmRsZUNvbHVtbkhpZGluZ0NoYW5nZShjb2x1bW5zOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5jb2x1bW5IaWRpbmdDaGFuZ2UuZW1pdChjb2x1bW5zKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBPYmplY3QuYXNzaWduKFtdLCBjb2x1bW5zKTtcclxuXHJcbiAgICBpZiAodGhpcy5yb3dTZWxlY3RhYmxlICYmICF0aGlzLmhpZGVSb3dTZWxlY3Rpb25DaGVja2JveCkge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnTXR4R3JpZENoZWNrYm94Q29sdW1uRGVmJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb2x1bW5Nb3ZpbmdDaGFuZ2UoY29sdW1uczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuY29sdW1uTW92aW5nQ2hhbmdlLmVtaXQoY29sdW1ucyk7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gT2JqZWN0LmFzc2lnbihbXSwgY29sdW1ucyk7XHJcblxyXG4gICAgaWYgKHRoaXMucm93U2VsZWN0YWJsZSAmJiAhdGhpcy5oaWRlUm93U2VsZWN0aW9uQ2hlY2tib3gpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ010eEdyaWRDaGVja2JveENvbHVtbkRlZicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEN1c3RvbWl6ZSBleHBhbnNpb24gZXZlbnQgKi9cclxuICB0b2dnbGVFeHBhbnNpb24oaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLmV4cGFuZGFibGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYGV4cGFuZGFibGVgIHNob3VsZCBiZSBzZXQgdHJ1ZS4nKTtcclxuICAgIH1cclxuICAgIHRoaXMuZXhwYW5zaW9uUm93U3RhdGVzW2luZGV4XS5leHBhbmRlZCA9ICF0aGlzLmV4cGFuc2lvblJvd1N0YXRlc1tpbmRleF0uZXhwYW5kZWQ7XHJcbiAgICByZXR1cm4gdGhpcy5leHBhbnNpb25Sb3dTdGF0ZXNbaW5kZXhdLmV4cGFuZGVkO1xyXG4gIH1cclxufVxyXG4iXX0=