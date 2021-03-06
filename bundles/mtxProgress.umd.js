(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ng-matero/extensions/progress', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-matero'] = global['ng-matero'] || {}, global['ng-matero'].extensions = global['ng-matero'].extensions || {}, global['ng-matero'].extensions.progress = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'mtx-progress',
                        exportAs: 'mtxProgress',
                        host: {
                            'class': 'mtx-progress',
                            '[style.height]': 'height',
                            '[style.backgroundColor]': 'background'
                        },
                        template: "<div [class]=\"'mtx-progress-fill mtx-progress-fill-' + type\"\n     [ngClass]=\"{'mtx-progress-fill-striped': striped, 'mtx-progress-fill-animated': animate}\"\n     [ngStyle]=\"{ 'width.%': value, 'background-color': foreground }\"\n     role=\"progress-fill\">\n  <ng-content></ng-content>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".mtx-progress{display:flex;height:1rem;margin:8px 0;overflow:hidden;font-size:.75rem;background-color:rgba(140,150,160,.15);border-radius:.25rem}.mtx-progress-fill{display:flex;flex-direction:column;justify-content:center;text-align:center;transition:width .6s}.mtx-progress-fill-success{color:#fff;background-color:#4caf50}.mtx-progress-fill-info{color:#fff;background-color:#2196f3}.mtx-progress-fill-warning{color:#fff;background-color:#fb8c00}.mtx-progress-fill-danger{color:#fff;background-color:#ff5252}.mtx-progress-fill-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.mtx-progress-fill-animated{-webkit-animation:1s linear infinite mtx-progress-fill-stripes;animation:1s linear infinite mtx-progress-fill-stripes}@media (prefers-reduced-motion:reduce){.mtx-progress-fill-animated{-webkit-animation:none;animation:none}}@-webkit-keyframes mtx-progress-fill-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes mtx-progress-fill-stripes{from{background-position:1rem 0}to{background-position:0 0}}"]
                    }] }
        ];
        /** @nocollapse */
        MtxProgressComponent.ctorParameters = function () { return []; };
        MtxProgressComponent.propDecorators = {
            type: [{ type: core.Input }],
            value: [{ type: core.Input }],
            height: [{ type: core.Input }],
            color: [{ type: core.Input }],
            foreground: [{ type: core.Input }],
            background: [{ type: core.Input }],
            striped: [{ type: core.Input }],
            animate: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [MtxProgressComponent],
                        declarations: [MtxProgressComponent],
                    },] }
        ];
        return MtxProgressModule;
    }());

    exports.MtxProgressComponent = MtxProgressComponent;
    exports.MtxProgressModule = MtxProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mtxProgress.umd.js.map
