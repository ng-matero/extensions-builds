/**
 * @fileoverview added by tsickle
 * Generated from: text3d.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
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
    MtxText3dComponent.ctorParameters = function () { return []; };
    MtxText3dComponent.propDecorators = {
        template: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
        text: [{ type: Input }],
        num: [{ type: Input }],
        rotateX: [{ type: Input }],
        rotateY: [{ type: Input }],
        rotateZ: [{ type: Input }]
    };
    return MtxText3dComponent;
}());
export { MtxText3dComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dDNkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy90ZXh0M2QvIiwic291cmNlcyI6WyJ0ZXh0M2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBNkJFO1FBZFMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFFVCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFFckIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQU9QLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQVJELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLGFBQVcsSUFBSSxDQUFDLE9BQU8scUJBQWdCLElBQUksQ0FBQyxPQUFPLHFCQUFnQixJQUFJLENBQUMsT0FBTyxTQUFNLENBQUM7UUFDL0YsQ0FBQzs7O09BQUE7Ozs7SUFRRCxxQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkFuQ2YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxZQUFZO3dCQUNyQixtQkFBbUIsRUFBRSxXQUFXO3FCQUNqQztvQkFDRCx1UEFBc0M7b0JBRXRDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7OzsyQkFFRSxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt1QkFFM0MsS0FBSztzQkFFTCxLQUFLOzBCQUVMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQWVSLHlCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0F4Qlksa0JBQWtCOzs7SUFDN0Isc0NBQXlFOztJQUV6RSxrQ0FBbUI7O0lBRW5CLGlDQUFrQjs7SUFFbEIscUNBQXNCOztJQUN0QixxQ0FBcUI7O0lBQ3JCLHFDQUFxQjs7SUFFckIsaUNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ210eC10ZXh0M2QnLFxuICBleHBvcnRBczogJ210eFRleHQzZCcsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbXR4LXRleHQzZCcsXG4gICAgJ1tzdHlsZS50cmFuc2Zvcm1dJzogJ3RyYW5zZm9ybSdcbiAgfSxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQzZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQzZC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXR4VGV4dDNkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHRleHQgPSAnJztcblxuICBASW5wdXQoKSBudW0gPSAyMDtcblxuICBASW5wdXQoKSByb3RhdGVYID0gNjA7XG4gIEBJbnB1dCgpIHJvdGF0ZVkgPSAwO1xuICBASW5wdXQoKSByb3RhdGVaID0gMDtcblxuICBhcnIgPSBbXTtcblxuICBnZXQgdHJhbnNmb3JtKCkge1xuICAgIHJldHVybiBgcm90YXRlWCgke3RoaXMucm90YXRlWH1kZWcpIHJvdGF0ZVkoJHt0aGlzLnJvdGF0ZVl9ZGVnKSByb3RhdGVaKCR7dGhpcy5yb3RhdGVafWRlZylgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdGhpcy5udW07IGkrKykge1xuICAgICAgdGhpcy5hcnIucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxufVxuIl19