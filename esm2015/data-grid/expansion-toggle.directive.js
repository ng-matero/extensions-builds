/**
 * @fileoverview added by tsickle
 * Generated from: expansion-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef, } from '@angular/core';
export class MtxGridExpansionToggleDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctbWF0ZXJvL2V4dGVuc2lvbnMvZGF0YS1ncmlkLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE1BQU0sT0FBTywrQkFBK0I7SUEwQjFDO1FBekJRLFlBQU8sR0FBRyxLQUFLLENBQUM7UUF1QmQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBbUMsQ0FBQztJQUU3RCxDQUFDOzs7O0lBckJqQixJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQXVCO1FBQ2xDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQU9ELE9BQU8sQ0FBQyxLQUFpQjtRQUN2QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU8sTUFBTSxLQUFXLENBQUM7OztZQTNDM0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7O3VCQU1FLFdBQVcsU0FBQyxnQkFBZ0I7NEJBSzVCLEtBQUs7dUJBT0wsS0FBSyxTQUFDLGlCQUFpQjsyQkFPdkIsTUFBTTtzQkFJTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBM0JqQyxrREFBd0I7Ozs7O0lBQ3hCLCtDQUFrQjs7Ozs7SUFDbEIsa0RBQWtDOztJQXFCbEMsdURBQTZFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ttdHgtZXhwYW5zaW9uLXRvZ2dsZV0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXR4R3JpZEV4cGFuc2lvblRvZ2dsZURpcmVjdGl2ZSB7XHJcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfcm93OiBhbnk7XHJcbiAgcHJpdmF0ZSBfdHBsUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGVkJylcclxuICBnZXQgZXhwZW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZXhwYW5kYWJsZVJvdyh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Jvdykge1xyXG4gICAgICB0aGlzLl9yb3cgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZXhwYW5zaW9uUm93VHBsJylcclxuICBzZXQgdGVtcGxhdGUodmFsdWU6IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdHBsUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RwbFJlZiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHRvZ2dsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TXR4R3JpZEV4cGFuc2lvblRvZ2dsZURpcmVjdGl2ZT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vcGVuZWQgPSAhdGhpcy5fb3BlbmVkO1xyXG4gICAgdGhpcy50b2dnbGVDaGFuZ2UuZW1pdCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQgeyB9XHJcbn1cclxuIl19