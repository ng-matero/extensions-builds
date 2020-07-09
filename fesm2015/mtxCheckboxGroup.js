import { EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxCheckboxGroupComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.selectAllLabel = 'Select All';
        this.showSelectAll = true;
        this.change = new EventEmitter();
        this.selectAll = false;
        this.selectAllIndeterminate = false;
        this.options = [];
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.options = value;
        if (this.options) {
            this.updateSingleChecked();
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?=} e
     * @param {?=} index
     * @return {?}
     */
    updateSingleChecked(e, index) {
        if (this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked || !item.disabled)).every((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.checked))) {
            this.selectAll = false;
            this.selectAllIndeterminate = false;
        }
        else if (this.options.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked || !item.disabled)).every((/**
         * @param {?} item
         * @return {?}
         */
        item => item.checked))) {
            this.selectAll = true;
            this.selectAllIndeterminate = false;
        }
        else {
            this.selectAllIndeterminate = true;
        }
        this.change.emit({
            model: this.options,
            index,
        });
    }
    /**
     * @param {?=} e
     * @param {?=} index
     * @return {?}
     */
    updateAllChecked(e, index) {
        this.selectAll = !this.selectAll;
        this.selectAllIndeterminate = false;
        if (this.selectAll) {
            this.options
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.checked || !item.disabled))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.checked = true)));
        }
        else {
            this.options
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.checked || !item.disabled))
                .forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => (item.checked = !!item.disabled)));
        }
        this.change.emit({
            model: this.options,
            index,
        });
    }
}
MtxCheckboxGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mtx-checkbox-group',
                exportAs: 'mtxCheckboxGroup',
                host: {
                    class: 'mtx-checkbox-group'
                },
                template: "<mat-checkbox class=\"mtx-checkbox-select-all\"\n              *ngIf=\"showSelectAll\"\n              [checked]=\"selectAll\"\n              [(indeterminate)]=\"selectAllIndeterminate\"\n              (change)=\"updateAllChecked($event, -1);\">\n  {{selectAllLabel}}\n</mat-checkbox>\n\n<mat-checkbox class=\"mtx-checkbox-single\"\n              *ngFor=\"let item of options; let i = index;\"\n              [(ngModel)]=\"item.checked\"\n              [disabled]=\"item.disabled\"\n              (change)=\"updateSingleChecked($event, i)\">\n  {{item.label}}\n</mat-checkbox>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => MtxCheckboxGroupComponent)),
                        multi: true,
                    },
                ],
                styles: [".mtx-checkbox-group{display:block}.mtx-checkbox-group .mat-checkbox{margin-right:16px}[dir=rtl] .mtx-checkbox-group .mat-checkbox{margin-right:auto;margin-left:16px}"]
            }] }
];
/** @nocollapse */
MtxCheckboxGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
MtxCheckboxGroupComponent.propDecorators = {
    selectAllLabel: [{ type: Input }],
    showSelectAll: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.selectAllLabel;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.showSelectAll;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.change;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.selectAll;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.selectAllIndeterminate;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.options;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.onChange;
    /** @type {?} */
    MtxCheckboxGroupComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MtxCheckboxGroupComponent.prototype._changeDetectorRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-group.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxCheckboxGroupModule {
}
MtxCheckboxGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, MatCheckboxModule],
                exports: [MtxCheckboxGroupComponent],
                declarations: [MtxCheckboxGroupComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-group.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MtxCheckboxGroupOption() { }
if (false) {
    /** @type {?} */
    MtxCheckboxGroupOption.prototype.label;
    /** @type {?} */
    MtxCheckboxGroupOption.prototype.value;
    /** @type {?|undefined} */
    MtxCheckboxGroupOption.prototype.checked;
    /** @type {?|undefined} */
    MtxCheckboxGroupOption.prototype.disabled;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxCheckboxGroup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxCheckboxGroupComponent, MtxCheckboxGroupModule };
//# sourceMappingURL=mtxCheckboxGroup.js.map
