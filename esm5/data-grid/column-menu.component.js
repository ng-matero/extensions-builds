/**
 * @fileoverview added by tsickle
 * Generated from: column-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
var MtxGridColumnMenuComponent = /** @class */ (function () {
    function MtxGridColumnMenuComponent() {
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
    Object.defineProperty(MtxGridColumnMenuComponent.prototype, "buttonText", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var defaultText = "Columns " + (this.selectedType === 'show' ? 'Shown' : 'Hidden');
            /** @type {?} */
            var text = this._buttonText ? this._buttonText : defaultText;
            return text;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._buttonText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxGridColumnMenuComponent.prototype, "columnFields", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var fields = this.columns
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.selectedType === 'show' ? item.show : !item.hide;
            }))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.field; }));
            return fields;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MtxGridColumnMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    MtxGridColumnMenuComponent.prototype.handleDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
        this.sortChange.emit(this.columnFields);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MtxGridColumnMenuComponent.prototype.handleSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.selectionChange.emit(this.columnFields);
    };
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
    MtxGridColumnMenuComponent.ctorParameters = function () { return []; };
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
    return MtxGridColumnMenuComponent;
}());
export { MtxGridColumnMenuComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2RhdGEtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbHVtbi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHdEU7SUEwQ0U7UUFqQ1MsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBb0IsTUFBTSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFVcEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFaEIsZUFBVSxHQUFxRSxTQUFTLENBQUM7UUFDekYsZ0JBQVcsR0FBdUMsRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFZixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7SUFXckMsQ0FBQztJQTNCaEIsc0JBQWEsa0RBQVU7Ozs7UUFBdkI7O2dCQUNRLFdBQVcsR0FBRyxjQUFXLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRTs7Z0JBQzVFLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1lBQzlELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7Ozs7UUFDRCxVQUFlLEtBQWE7WUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSEE7SUFjRCxzQkFBSSxvREFBWTs7OztRQUFoQjtZQUFBLGlCQU9DOztnQkFOTyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3hCLE1BQU07Ozs7WUFBQyxVQUFDLElBQWdDO2dCQUN2QyxPQUFBLEtBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQXJELENBQXFELEVBQ3REO2lCQUNBLEdBQUc7Ozs7WUFBQyxVQUFDLElBQWdDLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQztZQUN4RCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDOzs7T0FBQTs7OztJQUlELDZDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7O0lBRWIsK0NBQVU7Ozs7SUFBVixVQUFXLEtBQTRCO1FBQ3JDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGlEQUFZOzs7O0lBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHdrSEFBMkM7b0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7OzswQkFFRSxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBRUwsS0FBSzs2QkFVTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUVMLE1BQU07NkJBQ04sTUFBTTs7SUF1QlQsaUNBQUM7Q0FBQSxBQXRERCxJQXNEQztTQTlDWSwwQkFBMEI7OztJQUNyQyw2Q0FBc0I7O0lBQ3RCLGdEQUEyQjs7SUFDM0Isa0RBQWdEOztJQUNoRCw4Q0FBeUI7O0lBQ3pCLGlEQUE0Qjs7Ozs7SUFVNUIsaURBQXlCOztJQUV6QixnREFBa0c7O0lBQ2xHLGlEQUE4RDs7SUFDOUQsaURBQTBCOztJQUMxQixnREFBeUI7O0lBRXpCLHFEQUF5RDs7SUFDekQsZ0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgTXR4R3JpZENvbHVtblNlbGVjdGlvbkl0ZW0gfSBmcm9tICcuL2dyaWQuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXR4LWdyaWQtY29sdW1uLW1lbnUnLFxyXG4gIGV4cG9ydEFzOiAnbXR4R3JpZENvbHVtbk1lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2x1bW4tbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29sdW1uLW1lbnUuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXR4R3JpZENvbHVtbk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGNvbHVtbnMgPSBbXTtcclxuICBASW5wdXQoKSBzZWxlY3RhYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFR5cGU6ICdzaG93JyB8ICdoaWRlJyA9ICdzaG93JztcclxuICBASW5wdXQoKSBzb3J0YWJsZSA9IHRydWU7XHJcbiAgQElucHV0KCkgZG5kU29ydGFibGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBnZXQgYnV0dG9uVGV4dCgpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRUZXh0ID0gYENvbHVtbnMgJHt0aGlzLnNlbGVjdGVkVHlwZSA9PT0gJ3Nob3cnID8gJ1Nob3duJyA6ICdIaWRkZW4nfWA7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5fYnV0dG9uVGV4dCA/IHRoaXMuX2J1dHRvblRleHQgOiBkZWZhdWx0VGV4dDtcclxuICAgIHJldHVybiB0ZXh0O1xyXG4gIH1cclxuICBzZXQgYnV0dG9uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9idXR0b25UZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2J1dHRvblRleHQgPSAnJztcclxuXHJcbiAgQElucHV0KCkgYnV0dG9uVHlwZTogJ3JhaXNlZCcgfCAnc3Ryb2tlZCcgfCAnZmxhdCcgfCAnaWNvbicgfCAnZmFiJyB8ICdtaW5pLWZhYicgfCAnJyA9ICdzdHJva2VkJztcclxuICBASW5wdXQoKSBidXR0b25Db2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgfCAnJyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzID0gJyc7XHJcbiAgQElucHV0KCkgYnV0dG9uSWNvbiA9ICcnO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIGdldCBjb2x1bW5GaWVsZHMoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgZmllbGRzID0gdGhpcy5jb2x1bW5zXHJcbiAgICAgIC5maWx0ZXIoKGl0ZW06IE10eEdyaWRDb2x1bW5TZWxlY3Rpb25JdGVtKSA9PlxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUeXBlID09PSAnc2hvdycgPyBpdGVtLnNob3cgOiAhaXRlbS5oaWRlXHJcbiAgICAgIClcclxuICAgICAgLm1hcCgoaXRlbTogTXR4R3JpZENvbHVtblNlbGVjdGlvbkl0ZW0pID0+IGl0ZW0uZmllbGQpO1xyXG4gICAgcmV0dXJuIGZpZWxkcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBoYW5kbGVEcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmNvbHVtbnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh0aGlzLmNvbHVtbkZpZWxkcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWxlY3QoZTogYW55KSB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuY29sdW1uRmllbGRzKTtcclxuICB9XHJcbn1cclxuIl19