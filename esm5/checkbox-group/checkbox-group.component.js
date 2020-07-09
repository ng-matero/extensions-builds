/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var MtxCheckboxGroupComponent = /** @class */ (function () {
    function MtxCheckboxGroupComponent(_changeDetectorRef) {
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
                            function () { return MtxCheckboxGroupComponent; })),
                            multi: true,
                        },
                    ],
                    styles: [".mtx-checkbox-group{display:block}.mtx-checkbox-group .mat-checkbox{margin-right:16px}[dir=rtl] .mtx-checkbox-group .mat-checkbox{margin-right:auto;margin-left:16px}"]
                }] }
    ];
    /** @nocollapse */
    MtxCheckboxGroupComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    MtxCheckboxGroupComponent.propDecorators = {
        selectAllLabel: [{ type: Input }],
        showSelectAll: [{ type: Input }],
        change: [{ type: Output }]
    };
    return MtxCheckboxGroupComponent;
}());
export { MtxCheckboxGroupComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2NoZWNrYm94LWdyb3VwLyIsInNvdXJjZXMiOlsiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBSXpFO0lBbUNFLG1DQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWhCaEQsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUcvQixDQUFDO1FBRUwsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFFL0IsWUFBTyxHQUE2QixFQUFFLENBQUM7UUFFdkMsYUFBUTs7O1FBQThDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBQ2pFLGNBQVM7OztRQUFlLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO0lBRTBCLENBQUM7Ozs7SUFFOUQsNENBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Ozs7SUFFZCw4Q0FBVTs7OztJQUFWLFVBQVcsS0FBK0I7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pD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QWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixFQUFDOzRCQUN4RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7Z0JBeEJDLGlCQUFpQjs7O2lDQTBCaEIsS0FBSztnQ0FDTCxLQUFLO3lCQUVMLE1BQU07O0lBc0VULGdDQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0ExRVkseUJBQXlCOzs7SUFDcEMsbURBQXVDOztJQUN2QyxrREFBOEI7O0lBRTlCLDJDQUdLOztJQUVMLDhDQUFrQjs7SUFDbEIsMkRBQStCOztJQUUvQiw0Q0FBdUM7O0lBRXZDLDZDQUFpRTs7SUFDakUsOENBQW1DOzs7OztJQUV2Qix1REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTXR4Q2hlY2tib3hHcm91cE9wdGlvbiB9IGZyb20gJy4vY2hlY2tib3gtZ3JvdXAuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXR4LWNoZWNrYm94LWdyb3VwJyxcbiAgZXhwb3J0QXM6ICdtdHhDaGVja2JveEdyb3VwJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbXR4LWNoZWNrYm94LWdyb3VwJ1xuICB9LFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNdHhDaGVja2JveEdyb3VwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE10eENoZWNrYm94R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBtb2RlbDogTXR4Q2hlY2tib3hHcm91cE9wdGlvbltdO1xuICAgIGluZGV4OiBudW1iZXI7XG4gIH0+KCk7XG5cbiAgc2VsZWN0QWxsID0gZmFsc2U7XG4gIHNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcblxuICBvcHRpb25zOiBNdHhDaGVja2JveEdyb3VwT3B0aW9uW10gPSBbXTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBNdHhDaGVja2JveEdyb3VwT3B0aW9uW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBNdHhDaGVja2JveEdyb3VwT3B0aW9uW10pOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNpbmdsZUNoZWNrZWQoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IE10eENoZWNrYm94R3JvdXBPcHRpb25bXSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdXBkYXRlU2luZ2xlQ2hlY2tlZChlPzogYm9vbGVhbiwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCB8fCAhaXRlbS5kaXNhYmxlZCkuZXZlcnkoaXRlbSA9PiAhaXRlbS5jaGVja2VkKSkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkIHx8ICFpdGVtLmRpc2FibGVkKS5ldmVyeShpdGVtID0+IGl0ZW0uY2hlY2tlZClcbiAgICApIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgbW9kZWw6IHRoaXMub3B0aW9ucyxcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQWxsQ2hlY2tlZChlPzogYm9vbGVhbiwgaW5kZXg/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdEFsbCA9ICF0aGlzLnNlbGVjdEFsbDtcbiAgICB0aGlzLnNlbGVjdEFsbEluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zZWxlY3RBbGwpIHtcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkIHx8ICFpdGVtLmRpc2FibGVkKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkIHx8ICFpdGVtLmRpc2FibGVkKVxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSAhIWl0ZW0uZGlzYWJsZWQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgIG1vZGVsOiB0aGlzLm9wdGlvbnMsXG4gICAgICBpbmRleCxcbiAgICB9KTtcbiAgfVxufVxuIl19