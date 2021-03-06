import { Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, TemplateRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: text3d.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxText3dComponent {
    constructor() {
        this.text = '';
        this.num = 20;
        this.rotateX = 60;
        this.rotateY = 0;
        this.rotateZ = 0;
        this.arr = [];
        for (let i = 1; i <= this.num; i++) {
            this.arr.push(i);
        }
    }
    /**
     * @return {?}
     */
    get transform() {
        return `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
MtxText3dComponent.decorators = [
    { type: Component, args: [{
                selector: 'mtx-text3d',
                exportAs: 'mtxText3d',
                host: {
                    'class': 'mtx-text3d',
                    '[style.transform]': 'transform'
                },
                template: "<span class=\"mtx-text3d-layer\"\n      [ngStyle]=\"{'z-index': -i, 'transform': 'translate3d(0, 0,'+ -i + 'px)'}\"\n      *ngFor=\"let i of arr\">\n  {{text}}\n  <ng-container [ngTemplateOutlet]=\"template\"></ng-container>\n</span>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mtx-text3d{display:block;transform-style:preserve-3d;-webkit-animation:5s infinite rotate;animation:5s infinite rotate;font-weight:700}.mtx-text3d .mtx-text3d-layer{display:block;text-align:center;font-size:10rem;text-shadow:0 0 1px rgba(0,0,0,.5)}.mtx-text3d .mtx-text3d-layer:not(:first-child){position:absolute;top:0;left:0;right:0;margin:auto;transform-style:preserve-3d;color:#fbfbfb;text-shadow:0 0 20px rgba(124,124,124,.4)}.mtx-text3d .mtx-text3d-layer:first-child{color:#171717}"]
            }] }
];
/** @nocollapse */
MtxText3dComponent.ctorParameters = () => [];
MtxText3dComponent.propDecorators = {
    template: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
    text: [{ type: Input }],
    num: [{ type: Input }],
    rotateX: [{ type: Input }],
    rotateY: [{ type: Input }],
    rotateZ: [{ type: Input }]
};
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
class MtxText3dModule {
}
MtxText3dModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [MtxText3dComponent],
                declarations: [MtxText3dComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxText3d.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxText3dComponent, MtxText3dModule };
//# sourceMappingURL=mtxText3d.js.map
