/**
 * @fileoverview added by tsickle
 * Generated from: cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridService } from './grid.service';
import PhotoViewer from 'photoviewer';
var MtxGridCellComponent = /** @class */ (function () {
    function MtxGridCellComponent(_dialog, _dataGridSrv) {
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
    MtxGridCellComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.colValue = this._dataGridSrv.getCellValue(this.rowData, this.colDef);
    };
    /**
     * @param {?} event
     * @param {?} title
     * @param {?=} fn
     * @param {?=} data
     * @return {?}
     */
    MtxGridCellComponent.prototype.confirm = /**
     * @param {?} event
     * @param {?} title
     * @param {?=} fn
     * @param {?=} data
     * @return {?}
     */
    function (event, title, fn, data) {
        event.preventDefault();
        event.stopPropagation();
        this._dialog.confirm(title, (/**
         * @return {?}
         */
        function () { return fn(data); }));
    };
    /**
     * @param {?} event
     * @param {?} btn
     * @param {?} rowData
     * @return {?}
     */
    MtxGridCellComponent.prototype.handleOptionClick = /**
     * @param {?} event
     * @param {?} btn
     * @param {?} rowData
     * @return {?}
     */
    function (event, btn, rowData) {
        event.preventDefault();
        event.stopPropagation();
        btn.click(rowData);
    };
    /** Preview the image */
    /**
     * Preview the image
     * @param {?} urlStr
     * @param {?=} multi
     * @return {?}
     */
    MtxGridCellComponent.prototype.preview = /**
     * Preview the image
     * @param {?} urlStr
     * @param {?=} multi
     * @return {?}
     */
    function (urlStr, multi) {
        if (multi === void 0) { multi = false; }
        /** @type {?} */
        var imgs = [];
        /** @type {?} */
        var options = {};
        if (multi) {
            this._dataGridSrv.str2arr(urlStr).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            function (url, index) {
                imgs.push({ title: index + 1, src: url });
            }));
        }
        else {
            this._dataGridSrv.str2arr(urlStr).forEach((/**
             * @param {?} url
             * @param {?} index
             * @return {?}
             */
            function (url, index) {
                imgs.push({ src: url });
            }));
            options = {
                title: false,
                footToolbar: ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'],
            };
        }
        this.viewer = new PhotoViewer(imgs, options);
    };
    MtxGridCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mtx-grid-cell',
                    exportAs: 'mtxGridCell',
                    template: "<!-- Formatting -->\r\n<ng-container *ngIf=\"colDef.formatter; else defaultFormattingTpl\">\r\n  <span [innerHTML]=\"colDef.formatter(rowData, colDef)\"></span>\r\n</ng-container>\r\n\r\n<!-- TODO: -->\r\n<ng-template #defaultFormattingTpl>\r\n  <ng-container [ngSwitch]=\"colDef.type\">\r\n    <!-- Tag -->\r\n    <ng-container *ngSwitchCase=\"'tag'\">\r\n      <mat-chip-list *ngIf=\"colDef.tag[colValue]; else tagEmptyTpl\">\r\n        <mat-chip color=\"primary\" [ngClass]=\"['bg-' + colDef.tag[colValue].color]\">\r\n          {{colDef.tag[colValue].text}}\r\n        </mat-chip>\r\n      </mat-chip-list>\r\n      <ng-template #tagEmptyTpl>{{colValue}}</ng-template>\r\n    </ng-container>\r\n    <!-- Image -->\r\n    <ng-container *ngSwitchCase=\"'image'\">\r\n      <img class=\"mat-cell-img\" [src]=\"colValue\" (click)=\"preview(colValue)\">\r\n    </ng-container>\r\n    <!-- Link -->\r\n    <ng-container *ngSwitchCase=\"'link'\">\r\n      <a [href]=\"colValue\" target=\"_blank\">{{colValue}}</a>\r\n    </ng-container>\r\n    <!-- Buttons -->\r\n    <ng-container *ngSwitchCase=\"'button'\">\r\n      <ng-container *ngFor=\"let btn of colDef.buttons; index as i; last as isLast;\">\r\n        <ng-container *ngIf=\"!btn.iif || btn.iif(rowData)\">\r\n          <ng-container *ngIf=\"btn.pop; else btnDefaultTpl\">\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"btn.type==='basic'\"\r\n                    mat-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"confirm($event, btn.popTitle, btn.click, rowData)\">\r\n              <mat-icon *ngIf=\"btn.icon\">{{btn.icon}}</mat-icon> {{btn.text}}\r\n            </button>\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"!btn.type || btn.type==='icon'\"\r\n                    mat-icon-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"confirm($event, btn.popTitle, btn.click, rowData)\">\r\n              <mat-icon>{{btn.icon}}</mat-icon>\r\n            </button>\r\n          </ng-container>\r\n          <ng-template #btnDefaultTpl>\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"btn.type==='basic'\"\r\n                    mat-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"handleOptionClick($event, btn, rowData)\">\r\n              <mat-icon *ngIf=\"btn.icon\">{{btn.icon}}</mat-icon> {{btn.text}}\r\n            </button>\r\n            <button class=\"mat-cell-option-button\"\r\n                    *ngIf=\"!btn.type || btn.type==='icon'\"\r\n                    mat-icon-button\r\n                    [color]=\"btn.color || 'primary'\"\r\n                    [matTooltip]=\"btn.tooltip\"\r\n                    (click)=\"handleOptionClick($event, btn, rowData)\">\r\n              <mat-icon>{{btn.icon}}</mat-icon>\r\n            </button>\r\n          </ng-template>\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n    <!-- Number -->\r\n    <ng-container *ngSwitchCase=\"'number'\">\r\n      {{(colValue | number) || '--'}}\r\n    </ng-container>\r\n    <!-- Currency -->\r\n    <ng-container *ngSwitchCase=\"'currency'\">\r\n      {{(colValue | currency) || '--'}}\r\n    </ng-container>\r\n    <!-- Percent -->\r\n    <ng-container *ngSwitchCase=\"'percent'\">\r\n      {{(colValue | percent) || '--'}}\r\n    </ng-container>\r\n    <!-- Boolean -->\r\n    <ng-container *ngSwitchCase=\"'boolean'\">\r\n      {{colValue}}\r\n    </ng-container>\r\n    <!-- Default -->\r\n    <ng-container *ngSwitchDefault>\r\n      {{colValue || '--'}}\r\n    </ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n"
                }] }
    ];
    /** @nocollapse */
    MtxGridCellComponent.ctorParameters = function () { return [
        { type: MtxDialog },
        { type: MtxGridService }
    ]; };
    MtxGridCellComponent.propDecorators = {
        rowData: [{ type: Input }],
        colDef: [{ type: Input }]
    };
    return MtxGridCellComponent;
}());
export { MtxGridCellComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctbWF0ZXJvL2V4dGVuc2lvbnMvZGF0YS1ncmlkLyIsInNvdXJjZXMiOlsiY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sV0FBVyxNQUFNLGFBQWEsQ0FBQztBQUV0QztJQWdCRSw4QkFBb0IsT0FBa0IsRUFBVSxZQUE0QjtRQUF4RCxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWdCOzs7O1FBVG5FLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFLdEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUlrRSxDQUFDOzs7O0lBRWpGLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7Ozs7SUFFRCxzQ0FBTzs7Ozs7OztJQUFQLFVBQVEsS0FBaUIsRUFBRSxLQUFhLEVBQUUsRUFBcUIsRUFBRSxJQUFVO1FBQ3pFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSzs7O1FBQUUsY0FBTSxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBUixDQUFRLEVBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7O0lBRUQsZ0RBQWlCOzs7Ozs7SUFBakIsVUFBa0IsS0FBaUIsRUFBRSxHQUF3QixFQUFFLE9BQVk7UUFDekUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3QkFBd0I7Ozs7Ozs7SUFDeEIsc0NBQU87Ozs7OztJQUFQLFVBQVEsTUFBYyxFQUFFLEtBQWE7UUFBYixzQkFBQSxFQUFBLGFBQWE7O1lBQzdCLElBQUksR0FBRyxFQUFFOztZQUVYLE9BQU8sR0FBd0IsRUFBRTtRQUVyQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLENBQUMsRUFBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztnQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBQyxDQUFDO1lBRUgsT0FBTyxHQUFHO2dCQUNSLEtBQUssRUFBRSxLQUFLO2dCQUNaLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDOUUsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHMySEFBb0M7aUJBQ3JDOzs7O2dCQVRRLFNBQVM7Z0JBRVQsY0FBYzs7OzBCQVVwQixLQUFLO3lCQUdMLEtBQUs7O0lBK0NSLDJCQUFDO0NBQUEsQUF6REQsSUF5REM7U0FwRFksb0JBQW9COzs7Ozs7SUFFL0IsdUNBQXNCOzs7OztJQUd0QixzQ0FBK0I7O0lBRS9CLHdDQUFjOztJQUVkLHNDQUFvQjs7Ozs7SUFFUix1Q0FBMEI7Ozs7O0lBQUUsNENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE10eERpYWxvZyB9IGZyb20gJ0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNdHhHcmlkQ29sdW1uLCBNdHhHcmlkQ29sdW1uQnV0dG9uIH0gZnJvbSAnLi9ncmlkLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE10eEdyaWRTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLnNlcnZpY2UnO1xyXG5pbXBvcnQgUGhvdG9WaWV3ZXIgZnJvbSAncGhvdG92aWV3ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtdHgtZ3JpZC1jZWxsJyxcclxuICBleHBvcnRBczogJ210eEdyaWRDZWxsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2VsbC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdHhHcmlkQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIFJvdyBkYXRhICovXHJcbiAgQElucHV0KCkgcm93RGF0YSA9IHt9O1xyXG5cclxuICAvKiogQ29sdW1uIGRlZmluaXRpb24gKi9cclxuICBASW5wdXQoKSBjb2xEZWY6IE10eEdyaWRDb2x1bW47XHJcblxyXG4gIGNvbFZhbHVlID0gJyc7XHJcblxyXG4gIHZpZXdlcjogUGhvdG9WaWV3ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RpYWxvZzogTXR4RGlhbG9nLCBwcml2YXRlIF9kYXRhR3JpZFNydjogTXR4R3JpZFNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY29sVmFsdWUgPSB0aGlzLl9kYXRhR3JpZFNydi5nZXRDZWxsVmFsdWUodGhpcy5yb3dEYXRhLCB0aGlzLmNvbERlZik7XHJcbiAgfVxyXG5cclxuICBjb25maXJtKGV2ZW50OiBNb3VzZUV2ZW50LCB0aXRsZTogc3RyaW5nLCBmbj86IChwOiBhbnkpID0+IHZvaWQsIGRhdGE/OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuX2RpYWxvZy5jb25maXJtKHRpdGxlLCAoKSA9PiBmbihkYXRhKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPcHRpb25DbGljayhldmVudDogTW91c2VFdmVudCwgYnRuOiBNdHhHcmlkQ29sdW1uQnV0dG9uLCByb3dEYXRhOiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGJ0bi5jbGljayhyb3dEYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKiBQcmV2aWV3IHRoZSBpbWFnZSAqL1xyXG4gIHByZXZpZXcodXJsU3RyOiBzdHJpbmcsIG11bHRpID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGltZ3MgPSBbXTtcclxuXHJcbiAgICBsZXQgb3B0aW9uczogUGhvdG9WaWV3ZXIuT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgIGlmIChtdWx0aSkge1xyXG4gICAgICB0aGlzLl9kYXRhR3JpZFNydi5zdHIyYXJyKHVybFN0cikuZm9yRWFjaCgodXJsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGltZ3MucHVzaCh7IHRpdGxlOiBpbmRleCArIDEsIHNyYzogdXJsIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RhdGFHcmlkU3J2LnN0cjJhcnIodXJsU3RyKS5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaW1ncy5wdXNoKHsgc3JjOiB1cmwgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICB0aXRsZTogZmFsc2UsXHJcbiAgICAgICAgZm9vdFRvb2xiYXI6IFsnem9vbUluJywgJ3pvb21PdXQnLCAncm90YXRlUmlnaHQnLCAncm90YXRlTGVmdCcsICdhY3R1YWxTaXplJ10sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52aWV3ZXIgPSBuZXcgUGhvdG9WaWV3ZXIoaW1ncywgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==