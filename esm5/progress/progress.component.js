/**
 * @fileoverview added by tsickle
 * Generated from: progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
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
export { MtxProgressComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL3Byb2dyZXNzLyIsInNvdXJjZXMiOlsicHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQXlDRTs7Ozs7UUF2QlMsU0FBSSxHQUFHLE1BQU0sQ0FBQzs7OztRQUdkLFVBQUssR0FBRyxDQUFDLENBQUM7SUFvQkgsQ0FBQzs7OztJQUVqQix1Q0FBUTs7O0lBQVIsY0FBYSxDQUFDOztnQkEzQ2YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRSxjQUFjO3dCQUN2QixnQkFBZ0IsRUFBRSxRQUFRO3dCQUMxQix5QkFBeUIsRUFBRSxZQUFZO3FCQUN4QztvQkFDRCwwVEFBd0M7b0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7Ozt1QkFNRSxLQUFLO3dCQUdMLEtBQUs7eUJBR0wsS0FBSzt3QkFHTCxLQUFLOzZCQUdMLEtBQUs7NkJBR0wsS0FBSzswQkFHTCxLQUFLOzBCQUdMLEtBQUs7O0lBS1IsMkJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQS9CWSxvQkFBb0I7Ozs7Ozs7SUFLL0Isb0NBQXVCOzs7OztJQUd2QixxQ0FBbUI7Ozs7O0lBR25CLHNDQUF3Qjs7Ozs7SUFHeEIscUNBQXVCOzs7OztJQUd2QiwwQ0FBNEI7Ozs7O0lBRzVCLDBDQUE0Qjs7Ozs7SUFHNUIsdUNBQTBCOzs7OztJQUcxQix1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ210eC1wcm9ncmVzcycsXG4gIGV4cG9ydEFzOiAnbXR4UHJvZ3Jlc3MnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ210eC1wcm9ncmVzcycsXG4gICAgJ1tzdHlsZS5oZWlnaHRdJzogJ2hlaWdodCcsXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdJzogJ2JhY2tncm91bmQnXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNdHhQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBQcm9ncmVzcyB0eXBlc1xuICAgKiBgZGVmYXVsdGAsIGBpbmZvYCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AgYW5kIGBkYW5nZXJgXG4gICAqL1xuICBASW5wdXQoKSB0eXBlID0gJ2luZm8nO1xuXG4gIC8qKiBUaGUgcHJvZ3Jlc3MgdmFsdWUgKi9cbiAgQElucHV0KCkgdmFsdWUgPSAwO1xuXG4gIC8qKiBUaGUgcHJvZ3Jlc3MgaGVpZ2h0ICovXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuXG4gIC8qKiBUaGUgcHJvZ3Jlc3MgdGV4dCBjb2xvciAqL1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qKiBUaGUgcHJvZ3Jlc3MgYmFyIGNvbG9yICovXG4gIEBJbnB1dCgpIGZvcmVncm91bmQ6IHN0cmluZztcblxuICAvKiogVGhlIHByb2dyZXNzIHRyYWNrIGNvbG9yICovXG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcblxuICAvKiogV2hldGhlciBhcHBsaWVzIHN0cmlwZWQgY2xhc3MgKi9cbiAgQElucHV0KCkgc3RyaXBlZDogYm9vbGVhbjtcblxuICAvKiogV2hldGhlciBhcHBsaWVzIGFuaW1hdGVkIGNsYXNzICovXG4gIEBJbnB1dCgpIGFuaW1hdGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxufVxuIl19