/**
 * @fileoverview added by tsickle
 * Generated from: column-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class MtxGridColumnMenuComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2RhdGEtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbHVtbi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFXdEUsTUFBTSxPQUFPLDBCQUEwQjtJQWtDckM7UUFqQ1MsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBb0IsTUFBTSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFVcEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFaEIsZUFBVSxHQUFxRSxTQUFTLENBQUM7UUFDekYsZ0JBQVcsR0FBdUMsRUFBRSxDQUFDO1FBQ3JELGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFZixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7SUFXckMsQ0FBQzs7OztJQTNCaEIsSUFBYSxVQUFVOztjQUNmLFdBQVcsR0FBRyxXQUFXLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTs7Y0FDNUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVc7UUFDOUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7OztJQVdELElBQUksWUFBWTs7Y0FDUixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU87YUFDeEIsTUFBTTs7OztRQUFDLENBQUMsSUFBZ0MsRUFBRSxFQUFFLENBQzNDLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ3REO2FBQ0EsR0FBRzs7OztRQUFDLENBQUMsSUFBZ0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztRQUN4RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7O0lBSUQsUUFBUSxLQUFJLENBQUM7Ozs7O0lBRWIsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxDQUFNO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHdrSEFBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7O3NCQUVFLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFFTCxLQUFLO3lCQVVMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBRUwsTUFBTTt5QkFDTixNQUFNOzs7O0lBdEJQLDZDQUFzQjs7SUFDdEIsZ0RBQTJCOztJQUMzQixrREFBZ0Q7O0lBQ2hELDhDQUF5Qjs7SUFDekIsaURBQTRCOzs7OztJQVU1QixpREFBeUI7O0lBRXpCLGdEQUFrRzs7SUFDbEcsaURBQThEOztJQUM5RCxpREFBMEI7O0lBQzFCLGdEQUF5Qjs7SUFFekIscURBQXlEOztJQUN6RCxnREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBNdHhHcmlkQ29sdW1uU2VsZWN0aW9uSXRlbSB9IGZyb20gJy4vZ3JpZC5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtdHgtZ3JpZC1jb2x1bW4tbWVudScsXHJcbiAgZXhwb3J0QXM6ICdtdHhHcmlkQ29sdW1uTWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbHVtbi1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb2x1bW4tbWVudS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdHhHcmlkQ29sdW1uTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29sdW1ucyA9IFtdO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGFibGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVHlwZTogJ3Nob3cnIHwgJ2hpZGUnID0gJ3Nob3cnO1xyXG4gIEBJbnB1dCgpIHNvcnRhYmxlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkbmRTb3J0YWJsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpIGdldCBidXR0b25UZXh0KCkge1xyXG4gICAgY29uc3QgZGVmYXVsdFRleHQgPSBgQ29sdW1ucyAke3RoaXMuc2VsZWN0ZWRUeXBlID09PSAnc2hvdycgPyAnU2hvd24nIDogJ0hpZGRlbid9YDtcclxuICAgIGNvbnN0IHRleHQgPSB0aGlzLl9idXR0b25UZXh0ID8gdGhpcy5fYnV0dG9uVGV4dCA6IGRlZmF1bHRUZXh0O1xyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG4gIHNldCBidXR0b25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2J1dHRvblRleHQgPSB2YWx1ZTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYnV0dG9uVGV4dCA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBidXR0b25UeXBlOiAncmFpc2VkJyB8ICdzdHJva2VkJyB8ICdmbGF0JyB8ICdpY29uJyB8ICdmYWInIHwgJ21pbmktZmFiJyB8ICcnID0gJ3N0cm9rZWQnO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkNvbG9yOiAncHJpbWFyeScgfCAnYWNjZW50JyB8ICd3YXJuJyB8ICcnID0gJyc7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3MgPSAnJztcclxuICBASW5wdXQoKSBidXR0b25JY29uID0gJyc7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgZ2V0IGNvbHVtbkZpZWxkcygpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmNvbHVtbnNcclxuICAgICAgLmZpbHRlcigoaXRlbTogTXR4R3JpZENvbHVtblNlbGVjdGlvbkl0ZW0pID0+XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFR5cGUgPT09ICdzaG93JyA/IGl0ZW0uc2hvdyA6ICFpdGVtLmhpZGVcclxuICAgICAgKVxyXG4gICAgICAubWFwKChpdGVtOiBNdHhHcmlkQ29sdW1uU2VsZWN0aW9uSXRlbSkgPT4gaXRlbS5maWVsZCk7XHJcbiAgICByZXR1cm4gZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIGhhbmRsZURyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuY29sdW1ucywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHRoaXMuY29sdW1uRmllbGRzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNlbGVjdChlOiBhbnkpIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5jb2x1bW5GaWVsZHMpO1xyXG4gIH1cclxufVxyXG4iXX0=