/**
 * @fileoverview added by tsickle
 * Generated from: alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectorRef, } from '@angular/core';
export class MtxAlertComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
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
    ngOnInit() { }
    /**
     * @return {?}
     */
    handleClose() {
        this.isOpen = false;
        this._changeDetectorRef.markForCheck();
        this.closed.emit(this);
    }
}
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
MtxAlertComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MtxAlertComponent.propDecorators = {
    type: [{ type: Input }],
    isOpen: [{ type: Input }],
    dismissible: [{ type: Input }],
    color: [{ type: Input }],
    elevation: [{ type: Input }],
    closed: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2FsZXJ0LyIsInNvdXJjZXMiOlsiYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQWF2QixNQUFNLE9BQU8saUJBQWlCOzs7O0lBc0I1QixZQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7Ozs7UUFqQmhELFNBQUksR0FBRyxTQUFTLENBQUM7Ozs7UUFHakIsV0FBTSxHQUFHLElBQUksQ0FBQzs7OztRQVNkLGNBQVMsR0FBRyxDQUFDLENBQUM7Ozs7UUFHYixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7SUFFSSxDQUFDOzs7O0lBRTlELFFBQVEsS0FBSyxDQUFDOzs7O0lBRWQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxXQUFXO2lCQUNuQjtnQkFDRCw4aUJBQXFDO2dCQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBYkMsaUJBQWlCOzs7bUJBbUJoQixLQUFLO3FCQUdMLEtBQUs7MEJBR0wsS0FBSztvQkFHTCxLQUFLO3dCQUdMLEtBQUs7cUJBR0wsTUFBTTs7Ozs7Ozs7SUFmUCxpQ0FBMEI7Ozs7O0lBRzFCLG1DQUF1Qjs7Ozs7SUFHdkIsd0NBQThCOzs7OztJQUc5QixrQ0FBdUI7Ozs7O0lBR3ZCLHNDQUF1Qjs7Ozs7SUFHdkIsbUNBQXlEOzs7OztJQUU3QywrQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXR4LWFsZXJ0JyxcbiAgZXhwb3J0QXM6ICdtdHhBbGVydCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ210eC1hbGVydCcsXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNdHhBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBBbGVydCB0eXBlc1xuICAgKiBgZGVmYXVsdGAsIGBpbmZvYCwgYHN1Y2Nlc3NgLCBgd2FybmluZ2AgYW5kIGBkYW5nZXJgXG4gICAqL1xuICBASW5wdXQoKSB0eXBlID0gJ2RlZmF1bHQnO1xuXG4gIC8qKiBXaGV0aGVyIGFsZXJ0IHZpc2libGUgKi9cbiAgQElucHV0KCkgaXNPcGVuID0gdHJ1ZTtcblxuICAvKiogV2hldGhlciBkaXNwbGF5cyBhbiBpbmxpbmUgXCJDbG9zZVwiIGJ1dHRvbiAqL1xuICBASW5wdXQoKSBkaXNtaXNzaWJsZTogYm9vbGVhbjtcblxuICAvKiogVGV4dCBjb2xvciAqL1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuXG4gIC8qKiBNYXRlcmlhbCBlbGV2YXRpb24gKi9cbiAgQElucHV0KCkgZWxldmF0aW9uID0gMDtcblxuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGFsZXJ0IGNsb3NlZCwgJGV2ZW50IGlzIGFuIGluc3RhbmNlIG9mIEFsZXJ0IGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxNdHhBbGVydENvbXBvbmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgaGFuZGxlQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmNsb3NlZC5lbWl0KHRoaXMpO1xuICB9XG59XG4iXX0=