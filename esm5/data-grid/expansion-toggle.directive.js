/**
 * @fileoverview added by tsickle
 * Generated from: expansion-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef, } from '@angular/core';
var MtxGridExpansionToggleDirective = /** @class */ (function () {
    function MtxGridExpansionToggleDirective() {
        this._opened = false;
        this.toggleChange = new EventEmitter();
    }
    Object.defineProperty(MtxGridExpansionToggleDirective.prototype, "expended", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxGridExpansionToggleDirective.prototype, "expandableRow", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._row) {
                this._row = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxGridExpansionToggleDirective.prototype, "template", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._tplRef) {
                this._tplRef = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    MtxGridExpansionToggleDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.toggle();
    };
    /**
     * @return {?}
     */
    MtxGridExpansionToggleDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this._opened = !this._opened;
        this.toggleChange.emit(this);
    };
    /**
     * @private
     * @return {?}
     */
    MtxGridExpansionToggleDirective.prototype.render = /**
     * @private
     * @return {?}
     */
    function () { };
    MtxGridExpansionToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mtx-expansion-toggle]',
                },] }
    ];
    /** @nocollapse */
    MtxGridExpansionToggleDirective.ctorParameters = function () { return []; };
    MtxGridExpansionToggleDirective.propDecorators = {
        expended: [{ type: HostBinding, args: ['class.expanded',] }],
        expandableRow: [{ type: Input }],
        template: [{ type: Input, args: ['expansionRowTpl',] }],
        toggleChange: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MtxGridExpansionToggleDirective;
}());
export { MtxGridExpansionToggleDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctbWF0ZXJvL2V4dGVuc2lvbnMvZGF0YS1ncmlkLyIsInNvdXJjZXMiOlsiZXhwYW5zaW9uLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBNkJFO1FBekJRLFlBQU8sR0FBRyxLQUFLLENBQUM7UUF1QmQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBbUMsQ0FBQztJQUU3RCxDQUFDO0lBckJqQixzQkFDSSxxREFBUTs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksMERBQWE7Ozs7O1FBRGpCLFVBQ2tCLEtBQVU7WUFDMUIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7YUFDbkI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHFEQUFROzs7OztRQURaLFVBQ2EsS0FBdUI7WUFDbEMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7SUFPRCxpREFBTzs7OztJQURQLFVBQ1EsS0FBaUI7UUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELGdEQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU8sZ0RBQU07Ozs7SUFBZCxjQUF5QixDQUFDOztnQkEzQzNCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzs7Ozs7MkJBTUUsV0FBVyxTQUFDLGdCQUFnQjtnQ0FLNUIsS0FBSzsyQkFPTCxLQUFLLFNBQUMsaUJBQWlCOytCQU92QixNQUFNOzBCQUlOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBYW5DLHNDQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F6Q1ksK0JBQStCOzs7Ozs7SUFDMUMsa0RBQXdCOzs7OztJQUN4QiwrQ0FBa0I7Ozs7O0lBQ2xCLGtEQUFrQzs7SUFxQmxDLHVEQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbXR4LWV4cGFuc2lvbi10b2dnbGVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE10eEdyaWRFeHBhbnNpb25Ub2dnbGVEaXJlY3RpdmUge1xyXG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3JvdzogYW55O1xyXG4gIHByaXZhdGUgX3RwbFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRlZCcpXHJcbiAgZ2V0IGV4cGVuZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4cGFuZGFibGVSb3codmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9yb3cpIHtcclxuICAgICAgdGhpcy5fcm93ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2V4cGFuc2lvblJvd1RwbCcpXHJcbiAgc2V0IHRlbXBsYXRlKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3RwbFJlZikge1xyXG4gICAgICB0aGlzLl90cGxSZWYgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSB0b2dnbGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE10eEdyaWRFeHBhbnNpb25Ub2dnbGVEaXJlY3RpdmU+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3BlbmVkID0gIXRoaXMuX29wZW5lZDtcclxuICAgIHRoaXMudG9nZ2xlQ2hhbmdlLmVtaXQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHsgfVxyXG59XHJcbiJdfQ==