import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MtxProgressComponent = /** @class */ (function () {
    function MtxProgressComponent() {
        /**
         * Progress types
         * `default`, `info`, `success`, `warning` and `danger`
         */
        this.type = 'info';
        /**
         * The progress value
         */
        this.value = 0;
    }
    /**
     * @return {?}
     */
    MtxProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    MtxProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mtx-progress',
                    exportAs: 'mtxProgress',
                    host: {
                        'class': 'mtx-progress',
                        '[style.height]': 'height',
                        '[style.backgroundColor]': 'background'
                    },
                    template: "<div [class]=\"'mtx-progress-fill mtx-progress-fill-' + type\"\n     [ngClass]=\"{'mtx-progress-fill-striped': striped, 'mtx-progress-fill-animated': animate}\"\n     [ngStyle]=\"{ 'width.%': value, 'background-color': foreground }\"\n     role=\"progress-fill\">\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mtx-progress{display:flex;height:1rem;margin:8px 0;overflow:hidden;font-size:.75rem;background-color:rgba(140,150,160,.15);border-radius:.25rem}.mtx-progress-fill{display:flex;flex-direction:column;justify-content:center;text-align:center;transition:width .6s}.mtx-progress-fill-success{color:#fff;background-color:#4caf50}.mtx-progress-fill-info{color:#fff;background-color:#2196f3}.mtx-progress-fill-warning{color:#fff;background-color:#fb8c00}.mtx-progress-fill-danger{color:#fff;background-color:#ff5252}.mtx-progress-fill-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.mtx-progress-fill-animated{-webkit-animation:1s linear infinite mtx-progress-fill-stripes;animation:1s linear infinite mtx-progress-fill-stripes}@media (prefers-reduced-motion:reduce){.mtx-progress-fill-animated{-webkit-animation:none;animation:none}}@-webkit-keyframes mtx-progress-fill-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes mtx-progress-fill-stripes{from{background-position:1rem 0}to{background-position:0 0}}"]
                }] }
    ];
    /** @nocollapse */
    MtxProgressComponent.ctorParameters = function () { return []; };
    MtxProgressComponent.propDecorators = {
        type: [{ type: Input }],
        value: [{ type: Input }],
        height: [{ type: Input }],
        color: [{ type: Input }],
        foreground: [{ type: Input }],
        background: [{ type: Input }],
        striped: [{ type: Input }],
        animate: [{ type: Input }]
    };
    return MtxProgressComponent;
}());
if (false) {
    /**
     * Progress types
     * `default`, `info`, `success`, `warning` and `danger`
     * @type {?}
     */
    MtxProgressComponent.prototype.type;
    /**
     * The progress value
     * @type {?}
     */
    MtxProgressComponent.prototype.value;
    /**
     * The progress height
     * @type {?}
     */
    MtxProgressComponent.prototype.height;
    /**
     * The progress text color
     * @type {?}
     */
    MtxProgressComponent.prototype.color;
    /**
     * The progress bar color
     * @type {?}
     */
    MtxProgressComponent.prototype.foreground;
    /**
     * The progress track color
     * @type {?}
     */
    MtxProgressComponent.prototype.background;
    /**
     * Whether applies striped class
     * @type {?}
     */
    MtxProgressComponent.prototype.striped;
    /**
     * Whether applies animated class
     * @type {?}
     */
    MtxProgressComponent.prototype.animate;
}

/**
 * @fileoverview added by tsickle
 * Generated from: progress.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MtxProgressModule = /** @class */ (function () {
    function MtxProgressModule() {
    }
    MtxProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [MtxProgressComponent],
                    declarations: [MtxProgressComponent],
                },] }
    ];
    return MtxProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxProgress.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxProgressComponent, MtxProgressModule };
//# sourceMappingURL=mtxProgress.js.map
