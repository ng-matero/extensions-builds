/**
 * @fileoverview added by tsickle
 * Generated from: cell-selection.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, } from '@angular/core';
import { MtxGridComponent } from './grid.component';
var MtxGridCellSelectionDirective = /** @class */ (function () {
    function MtxGridCellSelectionDirective(_dataGrid) {
        this._dataGrid = _dataGrid;
        this._selected = false;
        this._active = false;
        this.shiftKeyPressed = false;
        this.ctrlKeyPressed = false;
        this.cellSelectionChange = new EventEmitter();
    }
    Object.defineProperty(MtxGridCellSelectionDirective.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxGridCellSelectionDirective.prototype, "matSelectableRowData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._rowData) {
                this._rowData = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    MtxGridCellSelectionDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.ctrlKeyPressed = event.ctrlKey;
        this.shiftKeyPressed = event.shiftKey;
        if (this._dataGrid.cellSelectable) {
            this.select();
        }
    };
    /**
     * @return {?}
     */
    MtxGridCellSelectionDirective.prototype.select = /**
     * @return {?}
     */
    function () {
        this._selected = true;
        this.cellSelectionChange.emit(this);
    };
    /**
     * @return {?}
     */
    MtxGridCellSelectionDirective.prototype.unselect = /**
     * @return {?}
     */
    function () {
        this._selected = false;
        this.cellSelectionChange.emit(this);
    };
    /**
     * @return {?}
     */
    MtxGridCellSelectionDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this._selected = !this._selected;
        this.cellSelectionChange.emit(this);
    };
    MtxGridCellSelectionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mtx-selectable-cell]',
                },] }
    ];
    /** @nocollapse */
    MtxGridCellSelectionDirective.ctorParameters = function () { return [
        { type: MtxGridComponent }
    ]; };
    MtxGridCellSelectionDirective.propDecorators = {
        selected: [{ type: HostBinding, args: ['class.selected',] }],
        matSelectableRowData: [{ type: Input }],
        cellSelectionChange: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MtxGridCellSelectionDirective;
}());
export { MtxGridCellSelectionDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1zZWxlY3Rpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2RhdGEtZ3JpZC8iLCJzb3VyY2VzIjpbImNlbGwtc2VsZWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRDtJQTBCRSx1Q0FBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUF0QnZDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUl4QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQWNiLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFpQyxDQUFDO0lBRS9CLENBQUM7SUFkcEQsc0JBQ0ksbURBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLCtEQUFvQjs7Ozs7UUFEeEIsVUFDeUIsS0FBVTtZQUNqQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQUFBOzs7OztJQU9ELCtDQUFPOzs7O0lBRFAsVUFDUSxLQUFpQjtRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsOENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsOENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDOzs7O2dCQUpRLGdCQUFnQjs7OzJCQWN0QixXQUFXLFNBQUMsZ0JBQWdCO3VDQUs1QixLQUFLO3NDQU9MLE1BQU07MEJBSU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3Qm5DLG9DQUFDO0NBQUEsQUFwREQsSUFvREM7U0FqRFksNkJBQTZCOzs7Ozs7SUFDeEMsa0RBQTBCOzs7OztJQUMxQixnREFBd0I7Ozs7O0lBQ3hCLG1EQUFnQzs7Ozs7SUFDaEMsaURBQXNCOztJQUV0Qix3REFBd0I7O0lBQ3hCLHVEQUF1Qjs7SUFjdkIsNERBQWtGOzs7OztJQUV0RSxrREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE10eEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW210eC1zZWxlY3RhYmxlLWNlbGxdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE10eEdyaWRDZWxsU2VsZWN0aW9uRGlyZWN0aXZlIHtcclxuICBwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3BhcmVudFJvdzogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfcm93RGF0YTogYW55O1xyXG5cclxuICBzaGlmdEtleVByZXNzZWQgPSBmYWxzZTtcclxuICBjdHJsS2V5UHJlc3NlZCA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcclxuICBnZXQgc2VsZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXRTZWxlY3RhYmxlUm93RGF0YSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Jvd0RhdGEpIHtcclxuICAgICAgdGhpcy5fcm93RGF0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIGNlbGxTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE10eEdyaWRDZWxsU2VsZWN0aW9uRGlyZWN0aXZlPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhR3JpZDogTXR4R3JpZENvbXBvbmVudCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmN0cmxLZXlQcmVzc2VkID0gZXZlbnQuY3RybEtleTtcclxuICAgIHRoaXMuc2hpZnRLZXlQcmVzc2VkID0gZXZlbnQuc2hpZnRLZXk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2RhdGFHcmlkLmNlbGxTZWxlY3RhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLmNlbGxTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHVuc2VsZWN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2VsbFNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWQgPSAhdGhpcy5fc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmNlbGxTZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl19