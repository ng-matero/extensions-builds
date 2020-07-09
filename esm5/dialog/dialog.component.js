/**
 * @fileoverview added by tsickle
 * Generated from: dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
var MtxDialogComponent = /** @class */ (function () {
    function MtxDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    MtxDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} fn
     * @return {?}
     */
    MtxDialogComponent.prototype.onClick = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        fn.call(this);
        this.onClose();
    };
    /**
     * @return {?}
     */
    MtxDialogComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    MtxDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mtx-dialog',
                    exportAs: 'mtxDialog',
                    template: "<h1 class=\"mtx-dialog-title\" *ngIf=\"data.title\">{{data.title}}</h1>\n<div class=\"mtx-dialog-content\" *ngIf=\"data.description\">\n  <p>{{data.description}}</p>\n</div>\n<div class=\"mtx-dialog-actions\">\n  <button *ngFor=\"let btn of data.buttons\"\n          mat-button\n          [color]=\"btn.type\"\n          (click)=\"onClick(btn.onClick)\">\n    {{btn.text}}\n  </button>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".mtx-dialog-title{display:block;margin:0 0 20px;font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mtx-dialog-content{display:block;max-height:65vh;padding:0 24px;margin:0 -24px;overflow:auto;-webkit-overflow-scrolling:touch}.mtx-dialog-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;min-height:52px;padding:8px 0;margin-bottom:-24px}"]
                }] }
    ];
    /** @nocollapse */
    MtxDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return MtxDialogComponent;
}());
export { MtxDialogComponent };
if (false) {
    /** @type {?} */
    MtxDialogComponent.prototype.dialogRef;
    /** @type {?} */
    MtxDialogComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUl6RTtJQVNFLDRCQUNTLFNBQTJDLEVBQ2xCLElBQW1CO1FBRDVDLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQWU7SUFDakQsQ0FBQzs7OztJQUVMLHFDQUFROzs7SUFBUixjQUFhLENBQUM7Ozs7O0lBRWQsb0NBQU87Ozs7SUFBUCxVQUFRLEVBQWM7UUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsV0FBVztvQkFDckIsdVpBQXNDO29CQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFYUSxZQUFZO2dEQWVoQixNQUFNLFNBQUMsZUFBZTs7SUFhM0IseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWhCWSxrQkFBa0I7OztJQUUzQix1Q0FBa0Q7O0lBQ2xELGtDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBNdHhEaWFsb2dEYXRhIH0gZnJvbSAnLi9kaWFsb2cuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXR4LWRpYWxvZycsXG4gIGV4cG9ydEFzOiAnbXR4RGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXR4RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE10eERpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBNdHhEaWFsb2dEYXRhXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBvbkNsaWNrKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgZm4uY2FsbCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIl19