/**
 * @fileoverview added by tsickle
 * Generated from: checkbox-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectorRef, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class MtxCheckboxGroupComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLW1hdGVyby9leHRlbnNpb25zL2NoZWNrYm94LWdyb3VwLyIsInNvdXJjZXMiOlsiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLGlCQUFpQixFQUNqQixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBc0J6RSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBaUJwQyxZQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQWhCaEQsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUcvQixDQUFDO1FBRUwsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFFL0IsWUFBTyxHQUE2QixFQUFFLENBQUM7UUFFdkMsYUFBUTs7O1FBQThDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBQztRQUNqRSxjQUFTOzs7UUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7SUFFMEIsQ0FBQzs7OztJQUU5RCxRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZCxVQUFVLENBQUMsS0FBK0I7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pDLENBQUM7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eUJBQXlCLEVBQUM7d0JBQ3hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOzthQUNGOzs7O1lBeEJDLGlCQUFpQjs7OzZCQTBCaEIsS0FBSzs0QkFDTCxLQUFLO3FCQUVMLE1BQU07Ozs7SUFIUCxtREFBdUM7O0lBQ3ZDLGtEQUE4Qjs7SUFFOUIsMkNBR0s7O0lBRUwsOENBQWtCOztJQUNsQiwyREFBK0I7O0lBRS9CLDRDQUF1Qzs7SUFFdkMsNkNBQWlFOztJQUNqRSw4Q0FBbUM7Ozs7O0lBRXZCLHVEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNdHhDaGVja2JveEdyb3VwT3B0aW9uIH0gZnJvbSAnLi9jaGVja2JveC1ncm91cC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdHgtY2hlY2tib3gtZ3JvdXAnLFxuICBleHBvcnRBczogJ210eENoZWNrYm94R3JvdXAnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdtdHgtY2hlY2tib3gtZ3JvdXAnXG4gIH0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE10eENoZWNrYm94R3JvdXBDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTXR4Q2hlY2tib3hHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcbiAgQElucHV0KCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG1vZGVsOiBNdHhDaGVja2JveEdyb3VwT3B0aW9uW107XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgfT4oKTtcblxuICBzZWxlY3RBbGwgPSBmYWxzZTtcbiAgc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIG9wdGlvbnM6IE10eENoZWNrYm94R3JvdXBPcHRpb25bXSA9IFtdO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE10eENoZWNrYm94R3JvdXBPcHRpb25bXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IE10eENoZWNrYm94R3JvdXBPcHRpb25bXSk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlU2luZ2xlQ2hlY2tlZCgpO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogTXR4Q2hlY2tib3hHcm91cE9wdGlvbltdKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB1cGRhdGVTaW5nbGVDaGVja2VkKGU/OiBib29sZWFuLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkIHx8ICFpdGVtLmRpc2FibGVkKS5ldmVyeShpdGVtID0+ICFpdGVtLmNoZWNrZWQpKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgfHwgIWl0ZW0uZGlzYWJsZWQpLmV2ZXJ5KGl0ZW0gPT4gaXRlbS5jaGVja2VkKVxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RBbGwgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RBbGxJbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICBtb2RlbDogdGhpcy5vcHRpb25zLFxuICAgICAgaW5kZXgsXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBbGxDaGVja2VkKGU/OiBib29sZWFuLCBpbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0QWxsID0gIXRoaXMuc2VsZWN0QWxsO1xuICAgIHRoaXMuc2VsZWN0QWxsSW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgfHwgIWl0ZW0uZGlzYWJsZWQpXG4gICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgfHwgIWl0ZW0uZGlzYWJsZWQpXG4gICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9ICEhaXRlbS5kaXNhYmxlZCkpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgbW9kZWw6IHRoaXMub3B0aW9ucyxcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9XG59XG4iXX0=