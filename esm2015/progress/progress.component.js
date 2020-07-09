/**
 * @fileoverview added by tsickle
 * Generated from: progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
export class MtxProgressComponent {
    constructor() {
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
    ngOnInit() { }
}
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
MtxProgressComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsicHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQWV2QixNQUFNLE9BQU8sb0JBQW9CO0lBNEIvQjs7Ozs7UUF2QlMsU0FBSSxHQUFHLE1BQU0sQ0FBQzs7OztRQUdkLFVBQUssR0FBRyxDQUFDLENBQUM7SUFvQkgsQ0FBQzs7OztJQUVqQixRQUFRLEtBQUssQ0FBQzs7O1lBM0NmLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsY0FBYztvQkFDdkIsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIseUJBQXlCLEVBQUUsWUFBWTtpQkFDeEM7Z0JBQ0QsMFRBQXdDO2dCQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7OzttQkFNRSxLQUFLO29CQUdMLEtBQUs7cUJBR0wsS0FBSztvQkFHTCxLQUFLO3lCQUdMLEtBQUs7eUJBR0wsS0FBSztzQkFHTCxLQUFLO3NCQUdMLEtBQUs7Ozs7Ozs7O0lBckJOLG9DQUF1Qjs7Ozs7SUFHdkIscUNBQW1COzs7OztJQUduQixzQ0FBd0I7Ozs7O0lBR3hCLHFDQUF1Qjs7Ozs7SUFHdkIsMENBQTRCOzs7OztJQUc1QiwwQ0FBNEI7Ozs7O0lBRzVCLHVDQUEwQjs7Ozs7SUFHMUIsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdHgtcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ210eFByb2dyZXNzJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtdHgtcHJvZ3Jlc3MnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnLFxuICAgICdbc3R5bGUuYmFja2dyb3VuZENvbG9yXSc6ICdiYWNrZ3JvdW5kJ1xuICB9LFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXR4UHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogUHJvZ3Jlc3MgdHlwZXNcbiAgICogYGRlZmF1bHRgLCBgaW5mb2AsIGBzdWNjZXNzYCwgYHdhcm5pbmdgIGFuZCBgZGFuZ2VyYFxuICAgKi9cbiAgQElucHV0KCkgdHlwZSA9ICdpbmZvJztcblxuICAvKiogVGhlIHByb2dyZXNzIHZhbHVlICovXG4gIEBJbnB1dCgpIHZhbHVlID0gMDtcblxuICAvKiogVGhlIHByb2dyZXNzIGhlaWdodCAqL1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcblxuICAvKiogVGhlIHByb2dyZXNzIHRleHQgY29sb3IgKi9cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcblxuICAvKiogVGhlIHByb2dyZXNzIGJhciBjb2xvciAqL1xuICBASW5wdXQoKSBmb3JlZ3JvdW5kOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBwcm9ncmVzcyB0cmFjayBjb2xvciAqL1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgYXBwbGllcyBzdHJpcGVkIGNsYXNzICovXG4gIEBJbnB1dCgpIHN0cmlwZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgYXBwbGllcyBhbmltYXRlZCBjbGFzcyAqL1xuICBASW5wdXQoKSBhbmltYXRlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbn1cbiJdfQ==