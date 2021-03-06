import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: alert.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MtxAlertModule = /** @class */ (function () {
    function MtxAlertModule() {
    }
    MtxAlertModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [MtxAlertComponent],
                    declarations: [MtxAlertComponent],
                },] }
    ];
    return MtxAlertModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxAlert.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxAlertComponent, MtxAlertModule };
//# sourceMappingURL=mtxAlert.js.map
