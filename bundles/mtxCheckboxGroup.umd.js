(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/checkbox')) :
    typeof define === 'function' && define.amd ? define('@ng-matero/extensions/checkbox-group', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/checkbox'], factory) :
    (global = global || self, factory((global['ng-matero'] = global['ng-matero'] || {}, global['ng-matero'].extensions = global['ng-matero'].extensions || {}, global['ng-matero'].extensions['checkbox-group'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.checkbox));
}(this, (function (exports, core, common, forms, checkbox) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: checkbox-group.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MtxCheckboxGroupComponent = /** @class */ (function () {
        function MtxCheckboxGroupComponent(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
            this.selectAllLabel = 'Select All';
            this.showSelectAll = true;
            this.change = new core.EventEmitter();
            this.selectAll = false;
            this.selectAllIndeterminate = false;
            this.options = [];
            this.onChange = (/**
             * @return {?}
             */
            function () { return null; });
            this.onTouched = (/**
             * @return {?}
             */
            function () { return null; });
        }
        /**
         * @return {?}
         */
        MtxCheckboxGroupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        /**
         * @param {?} value
         * @return {?}
         */
        MtxCheckboxGroupComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.options = value;
            if (this.options) {
                this.updateSingleChecked();
            }
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        MtxCheckboxGroupComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        MtxCheckboxGroupComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
         * @param {?=} e
         * @param {?=} index
         * @return {?}
         */
        MtxCheckboxGroupComponent.prototype.updateSingleChecked = /**
         * @param {?=} e
         * @param {?=} index
         * @return {?}
         */
        function (e, index) {
            if (this.options.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked || !item.disabled; })).every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.checked; }))) {
                this.selectAll = false;
                this.selectAllIndeterminate = false;
            }
            else if (this.options.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked || !item.disabled; })).every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.checked; }))) {
                this.selectAll = true;
                this.selectAllIndeterminate = false;
            }
            else {
                this.selectAllIndeterminate = true;
            }
            this.change.emit({
                model: this.options,
                index: index,
            });
        };
        /**
         * @param {?=} e
         * @param {?=} index
         * @return {?}
         */
        MtxCheckboxGroupComponent.prototype.updateAllChecked = /**
         * @param {?=} e
         * @param {?=} index
         * @return {?}
         */
        function (e, index) {
            this.selectAll = !this.selectAll;
            this.selectAllIndeterminate = false;
            if (this.selectAll) {
                this.options
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.checked || !item.disabled; }))
                    .forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return (item.checked = true); }));
            }
            else {
                this.options
                    .filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.checked || !item.disabled; }))
                    .forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return (item.checked = !!item.disabled); }));
            }
            this.change.emit({
                model: this.options,
                index: index,
            });
        };
        MtxCheckboxGroupComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mtx-checkbox-group',
                        exportAs: 'mtxCheckboxGroup',
                        host: {
                            class: 'mtx-checkbox-group'
                        },
                        template: "<mat-checkbox class=\"mtx-checkbox-select-all\"\n              *ngIf=\"showSelectAll\"\n              [checked]=\"selectAll\"\n              [(indeterminate)]=\"selectAllIndeterminate\"\n              (change)=\"updateAllChecked($event, -1);\">\n  {{selectAllLabel}}\n</mat-checkbox>\n\n<mat-checkbox class=\"mtx-checkbox-single\"\n              *ngFor=\"let item of options; let i = index;\"\n              [(ngModel)]=\"item.checked\"\n              [disabled]=\"item.disabled\"\n              (change)=\"updateSingleChecked($event, i)\">\n  {{item.label}}\n</mat-checkbox>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return MtxCheckboxGroupComponent; })),
                                multi: true,
                            },
                        ],
                        styles: [".mtx-checkbox-group{display:block}.mtx-checkbox-group .mat-checkbox{margin-right:16px}[dir=rtl] .mtx-checkbox-group .mat-checkbox{margin-right:auto;margin-left:16px}"]
                    }] }
        ];
        /** @nocollapse */
        MtxCheckboxGroupComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        MtxCheckboxGroupComponent.propDecorators = {
            selectAllLabel: [{ type: core.Input }],
            showSelectAll: [{ type: core.Input }],
            change: [{ type: core.Output }]
        };
        return MtxCheckboxGroupComponent;
    }());
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
    var MtxCheckboxGroupModule = /** @class */ (function () {
        function MtxCheckboxGroupModule() {
        }
        MtxCheckboxGroupModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, checkbox.MatCheckboxModule],
                        exports: [MtxCheckboxGroupComponent],
                        declarations: [MtxCheckboxGroupComponent],
                    },] }
        ];
        return MtxCheckboxGroupModule;
    }());

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

    exports.MtxCheckboxGroupComponent = MtxCheckboxGroupComponent;
    exports.MtxCheckboxGroupModule = MtxCheckboxGroupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mtxCheckboxGroup.umd.js.map
