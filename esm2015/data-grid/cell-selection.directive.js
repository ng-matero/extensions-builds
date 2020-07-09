/**
 * @fileoverview added by tsickle
 * Generated from: cell-selection.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { MtxGridComponent } from './grid.component';
export class MtxGridCellSelectionDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1zZWxlY3Rpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2RhdGEtZ3JpZC8iLCJzb3VyY2VzIjpbImNlbGwtc2VsZWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtwRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBdUJ4QyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQXRCdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSXhCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBY2Isd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQWlDLENBQUM7SUFFL0IsQ0FBQzs7OztJQWRwRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLG9CQUFvQixDQUFDLEtBQVU7UUFDakMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBT0QsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7OztZQUpRLGdCQUFnQjs7O3VCQWN0QixXQUFXLFNBQUMsZ0JBQWdCO21DQUs1QixLQUFLO2tDQU9MLE1BQU07c0JBSU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQXhCakMsa0RBQTBCOzs7OztJQUMxQixnREFBd0I7Ozs7O0lBQ3hCLG1EQUFnQzs7Ozs7SUFDaEMsaURBQXNCOztJQUV0Qix3REFBd0I7O0lBQ3hCLHVEQUF1Qjs7SUFjdkIsNERBQWtGOzs7OztJQUV0RSxrREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE10eEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW210eC1zZWxlY3RhYmxlLWNlbGxdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE10eEdyaWRDZWxsU2VsZWN0aW9uRGlyZWN0aXZlIHtcclxuICBwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3BhcmVudFJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfcm93RGF0YTogYW55O1xyXG5cclxuICBzaGlmdEtleVByZXNzZWQgPSBmYWxzZTtcclxuICBjdHJsS2V5UHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcclxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXRTZWxlY3RhYmxlUm93RGF0YSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Jvd0RhdGEpIHtcclxuICAgICAgdGhpcy5fcm93RGF0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIGNlbGxTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE10eEdyaWRDZWxsU2VsZWN0aW9uRGlyZWN0aXZlPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhR3JpZDogTXR4R3JpZENvbXBvbmVudCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmN0cmxLZXlQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcclxuICAgIHRoaXMuc2hpZnRLZXlQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhdGFHcmlkLmNlbGxTZWxlY3RhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNlbGxTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVuc2VsZWN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2VsbFNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmNlbGxTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl19