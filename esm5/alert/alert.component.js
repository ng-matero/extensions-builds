/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectorRef, } from '@angular/core';
var MtxAlertComponent = /** @class */ (function () {
    function MtxAlertComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Alert types
         * `default`, `info`, `success`, `warning` and `danger`
         */
        this.type = 'default';
        /**
         * Whether alert visible
         */
        this.isOpen = true;
        /**
         * Material elevation
         */
        this.elevation = 0;
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.closed = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MtxAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MtxAlertComponent.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        this.isOpen = false;
        this._changeDetectorRef.markForCheck();
        this.closed.emit(this);
    };
    MtxAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mtx-alert',
                    exportAs: 'mtxAlert',
                    host: {
                        class: 'mtx-alert',
                    },
                    template: "<ng-template [ngIf]=\"isOpen\">\n  <div [ngClass]=\"['mtx-alert-ref',\n                   'mtx-alert-' + type,\n                   'mat-elevation-z' + elevation,\n                    dismissible ? 'mtx-alert-dismissible' : '']\"\n       role=\"alert\">\n    <ng-content></ng-content>\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"mtx-alert-close\" aria-label=\"Close\" (click)=\"handleClose()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </ng-template>\n  </div>\n</ng-template>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mtx-alert-ref{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.mtx-alert-close{position:absolute;top:0;bottom:0;right:0;padding:0 1.25rem;font-size:1.5rem;line-height:1;color:inherit;opacity:.5;background-color:transparent;border:0;cursor:pointer}[dir=rtl] .mtx-alert-close{right:unset;left:0}.mtx-alert-close:hover{opacity:.75}.mtx-alert-dismissible{padding-right:4rem}.mtx-alert-success{background-color:#4caf50;border-color:#4caf50;color:#fff}.mtx-alert-info{background-color:#2196f3;border-color:#2196f3;color:#fff}.mtx-alert-warning{background-color:#fb8c00;border-color:#fb8c00;color:#fff}.mtx-alert-danger{background-color:#ff5252;border-color:#ff5252;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    MtxAlertComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    MtxAlertComponent.propDecorators = {
        type: [{ type: Input }],
        isOpen: [{ type: Input }],
        dismissible: [{ type: Input }],
        color: [{ type: Input }],
        elevation: [{ type: Input }],
        closed: [{ type: Output }]
    };
    return MtxAlertComponent;
}());
export { MtxAlertComponent };
if (false) {
    /**
     * Alert types
     * `default`, `info`, `success`, `warning` and `danger`
     * @type {?}
     */
    MtxAlertComponent.prototype.type;
    /**
     * Whether alert visible
     * @type {?}
     */
    MtxAlertComponent.prototype.isOpen;
    /**
     * Whether displays an inline "Close" button
     * @type {?}
     */
    MtxAlertComponent.prototype.dismissible;
    /**
     * Text color
     * @type {?}
     */
    MtxAlertComponent.prototype.color;
    /**
     * Material elevation
     * @type {?}
     */
    MtxAlertComponent.prototype.elevation;
    /**
     * This event fires when alert closed, $event is an instance of Alert component
     * @type {?}
     */
    MtxAlertComponent.prototype.closed;
    /**
     * @type {?}
     * @private
     */
    MtxAlertComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2FsZXJ0LyIsInNvdXJjZXMiOlsiYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQWlDRSwyQkFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Ozs7O1FBakJoRCxTQUFJLEdBQUcsU0FBUyxDQUFDOzs7O1FBR2pCLFdBQU0sR0FBRyxJQUFJLENBQUM7Ozs7UUFTZCxjQUFTLEdBQUcsQ0FBQyxDQUFDOzs7O1FBR2IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFxQixDQUFDO0lBRUksQ0FBQzs7OztJQUU5RCxvQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7O0lBRWQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLFdBQVc7cUJBQ25CO29CQUNELDhpQkFBcUM7b0JBRXJDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWJDLGlCQUFpQjs7O3VCQW1CaEIsS0FBSzt5QkFHTCxLQUFLOzhCQUdMLEtBQUs7d0JBR0wsS0FBSzs0QkFHTCxLQUFLO3lCQUdMLE1BQU07O0lBV1Qsd0JBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQS9CWSxpQkFBaUI7Ozs7Ozs7SUFLNUIsaUNBQTBCOzs7OztJQUcxQixtQ0FBdUI7Ozs7O0lBR3ZCLHdDQUE4Qjs7Ozs7SUFHOUIsa0NBQXVCOzs7OztJQUd2QixzQ0FBdUI7Ozs7O0lBR3ZCLG1DQUF5RDs7Ozs7SUFFN0MsK0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ210eC1hbGVydCcsXG4gIGV4cG9ydEFzOiAnbXR4QWxlcnQnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtdHgtYWxlcnQnLFxuICB9LFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXR4QWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQWxlcnQgdHlwZXNcbiAgICogYGRlZmF1bHRgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgIGFuZCBgZGFuZ2VyYFxuICAgKi9cbiAgQElucHV0KCkgdHlwZSA9ICdkZWZhdWx0JztcblxuICAvKiogV2hldGhlciBhbGVydCB2aXNpYmxlICovXG4gIEBJbnB1dCgpIGlzT3BlbiA9IHRydWU7XG5cbiAgLyoqIFdoZXRoZXIgZGlzcGxheXMgYW4gaW5saW5lIFwiQ2xvc2VcIiBidXR0b24gKi9cbiAgQElucHV0KCkgZGlzbWlzc2libGU6IGJvb2xlYW47XG5cbiAgLyoqIFRleHQgY29sb3IgKi9cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICAvKiogTWF0ZXJpYWwgZWxldmF0aW9uICovXG4gIEBJbnB1dCgpIGVsZXZhdGlvbiA9IDA7XG5cbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgd2hlbiBhbGVydCBjbG9zZWQsICRldmVudCBpcyBhbiBpbnN0YW5jZSBvZiBBbGVydCBjb21wb25lbnQgKi9cbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TXR4QWxlcnRDb21wb25lbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIGhhbmRsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5jbG9zZWQuZW1pdCh0aGlzKTtcbiAgfVxufVxuIl19