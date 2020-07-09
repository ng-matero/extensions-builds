/**
 * @fileoverview added by tsickle
 * Generated from: text3d.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
export class MtxText3dComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dDNkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy90ZXh0M2QvIiwic291cmNlcyI6WyJ0ZXh0M2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBY3ZCLE1BQU0sT0FBTyxrQkFBa0I7SUFpQjdCO1FBZFMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFFVCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFFckIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQU9QLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQVJELElBQUksU0FBUztRQUNYLE9BQU8sV0FBVyxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQztJQUMvRixDQUFDOzs7O0lBUUQsUUFBUSxLQUFLLENBQUM7OztZQW5DZixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLG1CQUFtQixFQUFFLFdBQVc7aUJBQ2pDO2dCQUNELHVQQUFzQztnQkFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7Ozs7dUJBRUUsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7bUJBRTNDLEtBQUs7a0JBRUwsS0FBSztzQkFFTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQVJOLHNDQUF5RTs7SUFFekUsa0NBQW1COztJQUVuQixpQ0FBa0I7O0lBRWxCLHFDQUFzQjs7SUFDdEIscUNBQXFCOztJQUNyQixxQ0FBcUI7O0lBRXJCLGlDQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdHgtdGV4dDNkJyxcbiAgZXhwb3J0QXM6ICdtdHhUZXh0M2QnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ210eC10ZXh0M2QnLFxuICAgICdbc3R5bGUudHJhbnNmb3JtXSc6ICd0cmFuc2Zvcm0nXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0M2QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0M2QuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE10eFRleHQzZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiBmYWxzZSB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSB0ZXh0ID0gJyc7XG5cbiAgQElucHV0KCkgbnVtID0gMjA7XG5cbiAgQElucHV0KCkgcm90YXRlWCA9IDYwO1xuICBASW5wdXQoKSByb3RhdGVZID0gMDtcbiAgQElucHV0KCkgcm90YXRlWiA9IDA7XG5cbiAgYXJyID0gW107XG5cbiAgZ2V0IHRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gYHJvdGF0ZVgoJHt0aGlzLnJvdGF0ZVh9ZGVnKSByb3RhdGVZKCR7dGhpcy5yb3RhdGVZfWRlZykgcm90YXRlWigke3RoaXMucm90YXRlWn1kZWcpYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMubnVtOyBpKyspIHtcbiAgICAgIHRoaXMuYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==