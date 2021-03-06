(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@ng-matero/extensions/text3d', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-matero'] = global['ng-matero'] || {}, global['ng-matero'].extensions = global['ng-matero'].extensions || {}, global['ng-matero'].extensions.text3d = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: text3d.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MtxText3dComponent = /** @class */ (function () {
        function MtxText3dComponent() {
            this.text = '';
            this.num = 20;
            this.rotateX = 60;
            this.rotateY = 0;
            this.rotateZ = 0;
            this.arr = [];
            for (var i = 1; i <= this.num; i++) {
                this.arr.push(i);
            }
        }
        Object.defineProperty(MtxText3dComponent.prototype, "transform", {
            get: /**
             * @return {?}
             */
            function () {
                return "rotateX(" + this.rotateX + "deg) rotateY(" + this.rotateY + "deg) rotateZ(" + this.rotateZ + "deg)";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MtxText3dComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        MtxText3dComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mtx-text3d',
                        exportAs: 'mtxText3d',
                        host: {
                            'class': 'mtx-text3d',
                            '[style.transform]': 'transform'
                        },
                        template: "<span class=\"mtx-text3d-layer\"\n      [ngStyle]=\"{'z-index': -i, 'transform': 'translate3d(0, 0,'+ -i + 'px)'}\"\n      *ngFor=\"let i of arr\">\n  {{text}}\n  <ng-container [ngTemplateOutlet]=\"template\"></ng-container>\n</span>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".mtx-text3d{display:block;transform-style:preserve-3d;-webkit-animation:5s infinite rotate;animation:5s infinite rotate;font-weight:700}.mtx-text3d .mtx-text3d-layer{display:block;text-align:center;font-size:10rem;text-shadow:0 0 1px rgba(0,0,0,.5)}.mtx-text3d .mtx-text3d-layer:not(:first-child){position:absolute;top:0;left:0;right:0;margin:auto;transform-style:preserve-3d;color:#fbfbfb;text-shadow:0 0 20px rgba(124,124,124,.4)}.mtx-text3d .mtx-text3d-layer:first-child{color:#171717}"]
                    }] }
        ];
        /** @nocollapse */
        MtxText3dComponent.ctorParameters = function () { return []; };
        MtxText3dComponent.propDecorators = {
            template: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }],
            text: [{ type: core.Input }],
            num: [{ type: core.Input }],
            rotateX: [{ type: core.Input }],
            rotateY: [{ type: core.Input }],
            rotateZ: [{ type: core.Input }]
        };
        return MtxText3dComponent;
    }());
    if (false) {
        /** @type {?} */
        MtxText3dComponent.prototype.template;
        /** @type {?} */
        MtxText3dComponent.prototype.text;
        /** @type {?} */
        MtxText3dComponent.prototype.num;
        /** @type {?} */
        MtxText3dComponent.prototype.rotateX;
        /** @type {?} */
        MtxText3dComponent.prototype.rotateY;
        /** @type {?} */
        MtxText3dComponent.prototype.rotateZ;
        /** @type {?} */
        MtxText3dComponent.prototype.arr;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: text3d.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MtxText3dModule = /** @class */ (function () {
        function MtxText3dModule() {
        }
        MtxText3dModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [MtxText3dComponent],
                        declarations: [MtxText3dComponent],
                    },] }
        ];
        return MtxText3dModule;
    }());

    exports.MtxText3dComponent = MtxText3dComponent;
    exports.MtxText3dModule = MtxText3dModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mtxText3d.umd.js.map
