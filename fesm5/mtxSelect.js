import { Directive, TemplateRef, EventEmitter, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Optional, Self, ContentChild, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldControl } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: templates.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MtxSelectOptionTemplateDirective = /** @class */ (function () {
    function MtxSelectOptionTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectOptionTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-option-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectOptionTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectOptionTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectOptionTemplateDirective.prototype.template;
}
var MtxSelectOptgroupTemplateDirective = /** @class */ (function () {
    function MtxSelectOptgroupTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectOptgroupTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectOptgroupTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectOptgroupTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectOptgroupTemplateDirective.prototype.template;
}
var MtxSelectLabelTemplateDirective = /** @class */ (function () {
    function MtxSelectLabelTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectLabelTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-label-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectLabelTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectLabelTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectLabelTemplateDirective.prototype.template;
}
var MtxSelectMultiLabelTemplateDirective = /** @class */ (function () {
    function MtxSelectMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectMultiLabelTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectMultiLabelTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectMultiLabelTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectMultiLabelTemplateDirective.prototype.template;
}
var MtxSelectHeaderTemplateDirective = /** @class */ (function () {
    function MtxSelectHeaderTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectHeaderTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-header-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectHeaderTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectHeaderTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectHeaderTemplateDirective.prototype.template;
}
var MtxSelectFooterTemplateDirective = /** @class */ (function () {
    function MtxSelectFooterTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectFooterTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-footer-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectFooterTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectFooterTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectFooterTemplateDirective.prototype.template;
}
var MtxSelectNotFoundTemplateDirective = /** @class */ (function () {
    function MtxSelectNotFoundTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectNotFoundTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectNotFoundTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectNotFoundTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectNotFoundTemplateDirective.prototype.template;
}
var MtxSelectTypeToSearchTemplateDirective = /** @class */ (function () {
    function MtxSelectTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectTypeToSearchTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectTypeToSearchTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectTypeToSearchTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectTypeToSearchTemplateDirective.prototype.template;
}
var MtxSelectLoadingTextTemplateDirective = /** @class */ (function () {
    function MtxSelectLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectLoadingTextTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectLoadingTextTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectLoadingTextTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectLoadingTextTemplateDirective.prototype.template;
}
var MtxSelectTagTemplateDirective = /** @class */ (function () {
    function MtxSelectTagTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectTagTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-tag-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectTagTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectTagTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectTagTemplateDirective.prototype.template;
}
var MtxSelectLoadingSpinnerTemplateDirective = /** @class */ (function () {
    function MtxSelectLoadingSpinnerTemplateDirective(template) {
        this.template = template;
    }
    MtxSelectLoadingSpinnerTemplateDirective.decorators = [
        { type: Directive, args: [{ selector: '[ng-loadingspinner-tmp]' },] }
    ];
    /** @nocollapse */
    MtxSelectLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return MtxSelectLoadingSpinnerTemplateDirective;
}());
if (false) {
    /** @type {?} */
    MtxSelectLoadingSpinnerTemplateDirective.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * Generated from: select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
var MtxSelectComponent = /** @class */ (function () {
    function MtxSelectComponent(_focusMonitor, _elementRef, _changeDetectorRef, ngControl) {
        var _this = this;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.ngControl = ngControl;
        /**
         * MtxSelect options
         */
        this.addTag = false;
        this.addTagText = 'Add item';
        this.appearance = 'underline';
        this.closeOnSelect = true;
        this.clearAllText = 'Clear all';
        this.clearable = true;
        this.clearOnBackspace = true;
        // TODO:
        this.dropdownPosition = 'auto';
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.hideSelected = false;
        this.items = [];
        this.loading = false;
        this.loadingText = 'Loading...';
        this.labelForId = null;
        this.markFirst = true;
        this.multiple = false;
        this.notFoundText = 'No items found';
        this.searchable = true;
        this.readonly = false;
        this.searchFn = null;
        this.searchWhileComposing = true;
        this.clearSearchOnAdd = true;
        this.selectOnTab = false;
        this.trackByFn = null;
        this.inputAttrs = {};
        this.openOnEnter = true;
        this.minTermLength = 0;
        this.keyDownFn = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return true; });
        this.virtualScroll = false;
        this.typeToSearchText = 'Type to search';
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.change = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.search = new EventEmitter();
        this.clear = new EventEmitter();
        this.add = new EventEmitter();
        this.remove = new EventEmitter();
        this.scroll = new EventEmitter();
        this.scrollToEnd = new EventEmitter();
        this._value = null;
        /**
         * Implemented as part of MatFormFieldControl.
         */
        this.stateChanges = new Subject();
        /**
         * Unique id for this input.
         */
        this._uid = "mtx-select-" + nextUniqueId++;
        this._focused = false;
        this._required = false;
        this._disabled = false;
        this.errorState = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */
        this.controlType = 'mtx-select';
        /**
         * `View -> model callback called when value changes`
         */
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        /**
         * `View -> model callback called when select has been touched`
         */
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        _focusMonitor.monitor(_elementRef, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            if (_this._focused && !origin) {
                _this._onTouched();
            }
            _this._focused = !!origin;
            _this.stateChanges.next();
        }));
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    Object.defineProperty(MtxSelectComponent.prototype, "value", {
        /** Value of the select control. */
        get: /**
         * Value of the select control.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._value = newValue;
            this._onChange(newValue);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "id", {
        /** Unique id of the element. */
        get: /**
         * Unique id of the element.
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value || this._uid;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "placeholder", {
        /** Placeholder to be shown if value is empty. */
        get: /**
         * Placeholder to be shown if value is empty.
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "focused", {
        /** Whether the input is focused. */
        get: /**
         * Whether the input is focused.
         * @return {?}
         */
        function () { return this._focused; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.value || (Array.isArray(this.value) && this.value.length === 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "shouldLabelFloat", {
        get: /**
         * @return {?}
         */
        function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = coerceBooleanProperty(value);
            this.readonly = this._disabled;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MtxSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MtxSelectComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this.errorState = this.ngControl.invalid && this.ngControl.touched;
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MtxSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Implemented as part of MatFormFieldControl. */
    /**
     * Implemented as part of MatFormFieldControl.
     * @param {?} ids
     * @return {?}
     */
    MtxSelectComponent.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this._ariaDescribedby = ids.join(' ');
    };
    /** Implemented as part of MatFormFieldControl. */
    /**
     * Implemented as part of MatFormFieldControl.
     * @param {?} isDisabled
     * @return {?}
     */
    MtxSelectComponent.prototype.setDisabledState = /**
     * Implemented as part of MatFormFieldControl.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Implemented as part of MatFormFieldControl. */
    /**
     * Implemented as part of MatFormFieldControl.
     * @return {?}
     */
    MtxSelectComponent.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * @return {?}
     */
    function () { };
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    MtxSelectComponent.prototype.writeValue = /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    function (value) {
        this._value = value;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    MtxSelectComponent.prototype.registerOnChange = /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    MtxSelectComponent.prototype.registerOnTouched = /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    MtxSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mtx-select',
                    exportAs: 'mtxSelect',
                    host: {
                        'class': 'mtx-select',
                        '[class.mtx-select-floating]': 'shouldLabelFloat',
                        '[attr.id]': 'id',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                    },
                    template: "<ng-select #ngSelect\n           [(ngModel)]=\"value\"\n           [placeholder]=\"placeholder\"\n           [items]=\"items\"\n           [addTag]=\"addTag\"\n           [addTagText]=\"addTagText\"\n           [appendTo]=\"appendTo\"\n           [appearance]=\"appearance\"\n           [bindLabel]=\"bindLabel\"\n           [bindValue]=\"bindValue\"\n           [closeOnSelect]=\"closeOnSelect\"\n           [clearAllText]=\"clearAllText\"\n           [clearable]=\"clearable\"\n           [clearOnBackspace]=\"clearOnBackspace\"\n           [dropdownPosition]=\"dropdownPosition\"\n           [groupBy]=\"groupBy\"\n           [groupValue]=\"groupValue\"\n           [hideSelected]=\"hideSelected\"\n           [isOpen]=\"isOpen\"\n           [inputAttrs]=\"inputAttrs\"\n           [loading]=\"loading\"\n           [loadingText]=\"loadingText\"\n           [labelForId]=\"labelForId\"\n           [markFirst]=\"markFirst\"\n           [maxSelectedItems]=\"maxSelectedItems\"\n           [multiple]=\"multiple\"\n           [notFoundText]=\"notFoundText\"\n           [readonly]=\"readonly\"\n           [typeahead]=\"typeahead\"\n           [typeToSearchText]=\"typeToSearchText\"\n           [trackByFn]=\"trackByFn\"\n           [searchable]=\"searchable\"\n           [searchFn]=\"searchFn\"\n           [searchWhileComposing]=\"searchWhileComposing\"\n           [clearSearchOnAdd]=\"clearSearchOnAdd\"\n           [selectableGroup]=\"selectableGroup\"\n           [selectableGroupAsModel]=\"selectableGroupAsModel\"\n           [selectOnTab]=\"selectOnTab\"\n           [tabIndex]=\"tabIndex\"\n           [openOnEnter]=\"openOnEnter\"\n           [minTermLength]=\"minTermLength\"\n           [keyDownFn]=\"keyDownFn\"\n           [virtualScroll]=\"virtualScroll\"\n           (blur)=\"blur.emit($event)\"\n           (focus)=\"focus.emit($event)\"\n           (change)=\"change.emit($event)\"\n           (open)=\"open.emit($event)\"\n           (close)=\"close.emit($event)\"\n           (search)=\"search.emit($event)\"\n           (clear)=\"clear.emit($event)\"\n           (add)=\"add.emit($event)\"\n           (remove)=\"remove.emit($event)\"\n           (scroll)=\"scroll.emit($event)\"\n           (scrollToEnd)=\"scrollToEnd.emit($event)\">\n\n  <ng-container *ngIf=\"optionTemplate\">\n    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-searchTerm=\"searchTerm\">\n      <ng-template [ngTemplateOutlet]=\"optionTemplate\"\n                   [ngTemplateOutletContext]=\"{ item: item, item$: item, index: index, searchTerm: searchTerm }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"optgroupTemplate\">\n    <ng-template ng-optgroup-tmp let-item=\"item\" let-index=\"index\" let-searchTerm=\"searchTerm\">\n      <ng-template [ngTemplateOutlet]=\"optgroupTemplate\"\n                   [ngTemplateOutletContext]=\"{ item: item, item$: item, index: index, searchTerm: searchTerm }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"labelTemplate\">\n    <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\" let-label=\"label\">\n      <ng-template [ngTemplateOutlet]=\"labelTemplate\"\n                   [ngTemplateOutletContext]=\"{ item: item, clear: clear, label: label }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"multiLabelTemplate\">\n    <ng-template ng-multi-label-tmp let-items=\"items\" let-clear=\"clear\">\n      <ng-template [ngTemplateOutlet]=\"multiLabelTemplate\"\n                   [ngTemplateOutletContext]=\"{ items: items, clear: clear }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"headerTemplate\">\n    <ng-template ng-header-tmp>\n      <ng-template [ngTemplateOutlet]=\"headerTemplate\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"footerTemplate\">\n    <ng-template ng-footer-tmp>\n      <ng-template [ngTemplateOutlet]=\"footerTemplate\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"notFoundTemplate\">\n    <ng-template ng-notfound-tmp let-searchTerm=\"searchTerm\">\n      <ng-template [ngTemplateOutlet]=\"notFoundTemplate\"\n                   [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"typeToSearchTemplate\">\n    <ng-template ng-typetosearch-tmp>\n      <ng-template [ngTemplateOutlet]=\"typeToSearchTemplate\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"loadingTextTemplate\">\n    <ng-template ng-loadingtext-tmp let-searchTerm=\"searchTerm\">\n      <ng-template [ngTemplateOutlet]=\"loadingTextTemplate\"\n                   [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"tagTemplate\">\n    <ng-template ng-tag-tmp let-searchTerm=\"searchTerm\">\n      <ng-template [ngTemplateOutlet]=\"tagTemplate\"\n                   [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n  <ng-container *ngIf=\"loadingSpinnerTemplate\">\n    <ng-template ng-loadingspinner-tmp>\n      <ng-template [ngTemplateOutlet]=\"loadingSpinnerTemplate\">\n      </ng-template>\n    </ng-template>\n  </ng-container>\n\n</ng-select>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: MatFormFieldControl, useExisting: MtxSelectComponent }],
                    styles: [".ng-select{padding-top:calc(.4375em + .84375em);margin-top:calc(-.4375em - .84375em);padding-bottom:.4375em;margin-bottom:-.4375em}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent rgba(0,0,0,.54);border-width:0 5px 5px}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{align-items:center;color:rgba(0,0,0,.87)}.ng-select .ng-select-container .ng-value-container{align-items:center}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:rgba(102,102,102,.87);opacity:0;transition:opacity .2s}.mtx-select-floating .ng-select .ng-select-container .ng-value-container .ng-placeholder{opacity:1}.ng-select.ng-select-disabled .ng-value{color:rgba(0,0,0,.38)}.ng-select.ng-select-single.ng-select-filtered .ng-placeholder{display:initial;visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-placeholder::after,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value::after{display:inline-block;content:\"\"}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{margin:-4px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin:4px;border-radius:16px;line-height:18px;font-size:.875em;background-color:#e8eaf7}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:rgba(0,0,0,.38)}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;margin:0 8px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:inline-block;width:18px;height:18px;border-radius:100%;background-color:#d9dcf2;text-align:center}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#c9cfec}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{margin-left:-4px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right,[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{margin-right:-4px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{margin-left:-4px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input>input{font:inherit;padding:0}.ng-select .ng-clear-wrapper{height:18px;color:rgba(0,0,0,.54);text-align:center}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#f44336}.ng-select .ng-arrow-wrapper{width:18px}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:rgba(0,0,0,.54) transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{left:0;background:#fff}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-left-radius:4px;border-top-right-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.ng-dropdown-panel.multiple .ng-option.selected{background:#fff}.ng-dropdown-panel.multiple .ng-option.marked{background:rgba(0,0,0,.04)}.ng-dropdown-panel .ng-dropdown-header{min-height:3em;padding:0 16px;border-bottom:1px solid rgba(0,0,0,.12);line-height:3em}.ng-dropdown-panel .ng-dropdown-footer{min-height:3em;padding:0 16px;border-top:1px solid rgba(0,0,0,.12);line-height:3em}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{height:3em;padding:0 16px;font-weight:500;line-height:3em;color:rgba(0,0,0,.54);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background:rgba(0,0,0,.04)}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected{background:rgba(0,0,0,.12);color:#3f51b5}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{position:relative;min-height:3em;padding:0 16px;color:rgba(0,0,0,.87);line-height:3em;text-overflow:ellipsis;text-decoration:none;text-align:left;white-space:nowrap;overflow:hidden}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{text-align:right}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected{background:rgba(0,0,0,.12);color:#3f51b5}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:rgba(0,0,0,.38)}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:32px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:32px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-right:5px;font-size:80%;font-weight:400;color:rgba(0,0,0,.38)}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}"]
                }] }
    ];
    /** @nocollapse */
    MtxSelectComponent.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    MtxSelectComponent.propDecorators = {
        optionTemplate: [{ type: ContentChild, args: [MtxSelectOptionTemplateDirective, { read: TemplateRef },] }],
        optgroupTemplate: [{ type: ContentChild, args: [MtxSelectOptgroupTemplateDirective, { read: TemplateRef },] }],
        labelTemplate: [{ type: ContentChild, args: [MtxSelectLabelTemplateDirective, { read: TemplateRef },] }],
        multiLabelTemplate: [{ type: ContentChild, args: [MtxSelectMultiLabelTemplateDirective, { read: TemplateRef },] }],
        headerTemplate: [{ type: ContentChild, args: [MtxSelectHeaderTemplateDirective, { read: TemplateRef },] }],
        footerTemplate: [{ type: ContentChild, args: [MtxSelectFooterTemplateDirective, { read: TemplateRef },] }],
        notFoundTemplate: [{ type: ContentChild, args: [MtxSelectNotFoundTemplateDirective, { read: TemplateRef },] }],
        typeToSearchTemplate: [{ type: ContentChild, args: [MtxSelectTypeToSearchTemplateDirective, { read: TemplateRef },] }],
        loadingTextTemplate: [{ type: ContentChild, args: [MtxSelectLoadingTextTemplateDirective, { read: TemplateRef },] }],
        tagTemplate: [{ type: ContentChild, args: [MtxSelectTagTemplateDirective, { read: TemplateRef },] }],
        loadingSpinnerTemplate: [{ type: ContentChild, args: [MtxSelectLoadingSpinnerTemplateDirective, { read: TemplateRef },] }],
        addTag: [{ type: Input }],
        addTagText: [{ type: Input }],
        appearance: [{ type: Input }],
        appendTo: [{ type: Input }],
        bindLabel: [{ type: Input }],
        bindValue: [{ type: Input }],
        closeOnSelect: [{ type: Input }],
        clearAllText: [{ type: Input }],
        clearable: [{ type: Input }],
        clearOnBackspace: [{ type: Input }],
        compareWith: [{ type: Input }],
        dropdownPosition: [{ type: Input }],
        groupBy: [{ type: Input }],
        groupValue: [{ type: Input }],
        selectableGroup: [{ type: Input }],
        selectableGroupAsModel: [{ type: Input }],
        hideSelected: [{ type: Input }],
        items: [{ type: Input }],
        isOpen: [{ type: Input }],
        loading: [{ type: Input }],
        loadingText: [{ type: Input }],
        labelForId: [{ type: Input }],
        markFirst: [{ type: Input }],
        maxSelectedItems: [{ type: Input }],
        multiple: [{ type: Input }],
        notFoundText: [{ type: Input }],
        searchable: [{ type: Input }],
        readonly: [{ type: Input }],
        searchFn: [{ type: Input }],
        searchWhileComposing: [{ type: Input }],
        clearSearchOnAdd: [{ type: Input }],
        selectOnTab: [{ type: Input }],
        trackByFn: [{ type: Input }],
        inputAttrs: [{ type: Input }],
        tabIndex: [{ type: Input }],
        openOnEnter: [{ type: Input }],
        minTermLength: [{ type: Input }],
        keyDownFn: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        typeToSearchText: [{ type: Input }],
        typeahead: [{ type: Input }],
        blur: [{ type: Output }],
        focus: [{ type: Output }],
        change: [{ type: Output }],
        open: [{ type: Output }],
        close: [{ type: Output }],
        search: [{ type: Output }],
        clear: [{ type: Output }],
        add: [{ type: Output }],
        remove: [{ type: Output }],
        scroll: [{ type: Output }],
        scrollToEnd: [{ type: Output }],
        value: [{ type: Input }],
        id: [{ type: Input }],
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return MtxSelectComponent;
}());
if (false) {
    /** @type {?} */
    MtxSelectComponent.prototype.optionTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.optgroupTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.labelTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.multiLabelTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.headerTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.footerTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.notFoundTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.typeToSearchTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.loadingTextTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.tagTemplate;
    /** @type {?} */
    MtxSelectComponent.prototype.loadingSpinnerTemplate;
    /**
     * MtxSelect options
     * @type {?}
     */
    MtxSelectComponent.prototype.addTag;
    /** @type {?} */
    MtxSelectComponent.prototype.addTagText;
    /** @type {?} */
    MtxSelectComponent.prototype.appearance;
    /** @type {?} */
    MtxSelectComponent.prototype.appendTo;
    /** @type {?} */
    MtxSelectComponent.prototype.bindLabel;
    /** @type {?} */
    MtxSelectComponent.prototype.bindValue;
    /** @type {?} */
    MtxSelectComponent.prototype.closeOnSelect;
    /** @type {?} */
    MtxSelectComponent.prototype.clearAllText;
    /** @type {?} */
    MtxSelectComponent.prototype.clearable;
    /** @type {?} */
    MtxSelectComponent.prototype.clearOnBackspace;
    /** @type {?} */
    MtxSelectComponent.prototype.compareWith;
    /** @type {?} */
    MtxSelectComponent.prototype.dropdownPosition;
    /** @type {?} */
    MtxSelectComponent.prototype.groupBy;
    /** @type {?} */
    MtxSelectComponent.prototype.groupValue;
    /** @type {?} */
    MtxSelectComponent.prototype.selectableGroup;
    /** @type {?} */
    MtxSelectComponent.prototype.selectableGroupAsModel;
    /** @type {?} */
    MtxSelectComponent.prototype.hideSelected;
    /** @type {?} */
    MtxSelectComponent.prototype.items;
    /** @type {?} */
    MtxSelectComponent.prototype.isOpen;
    /** @type {?} */
    MtxSelectComponent.prototype.loading;
    /** @type {?} */
    MtxSelectComponent.prototype.loadingText;
    /** @type {?} */
    MtxSelectComponent.prototype.labelForId;
    /** @type {?} */
    MtxSelectComponent.prototype.markFirst;
    /** @type {?} */
    MtxSelectComponent.prototype.maxSelectedItems;
    /** @type {?} */
    MtxSelectComponent.prototype.multiple;
    /** @type {?} */
    MtxSelectComponent.prototype.notFoundText;
    /** @type {?} */
    MtxSelectComponent.prototype.searchable;
    /** @type {?} */
    MtxSelectComponent.prototype.readonly;
    /** @type {?} */
    MtxSelectComponent.prototype.searchFn;
    /** @type {?} */
    MtxSelectComponent.prototype.searchWhileComposing;
    /** @type {?} */
    MtxSelectComponent.prototype.clearSearchOnAdd;
    /** @type {?} */
    MtxSelectComponent.prototype.selectOnTab;
    /** @type {?} */
    MtxSelectComponent.prototype.trackByFn;
    /** @type {?} */
    MtxSelectComponent.prototype.inputAttrs;
    /** @type {?} */
    MtxSelectComponent.prototype.tabIndex;
    /** @type {?} */
    MtxSelectComponent.prototype.openOnEnter;
    /** @type {?} */
    MtxSelectComponent.prototype.minTermLength;
    /** @type {?} */
    MtxSelectComponent.prototype.keyDownFn;
    /** @type {?} */
    MtxSelectComponent.prototype.virtualScroll;
    /** @type {?} */
    MtxSelectComponent.prototype.typeToSearchText;
    /** @type {?} */
    MtxSelectComponent.prototype.typeahead;
    /** @type {?} */
    MtxSelectComponent.prototype.blur;
    /** @type {?} */
    MtxSelectComponent.prototype.focus;
    /** @type {?} */
    MtxSelectComponent.prototype.change;
    /** @type {?} */
    MtxSelectComponent.prototype.open;
    /** @type {?} */
    MtxSelectComponent.prototype.close;
    /** @type {?} */
    MtxSelectComponent.prototype.search;
    /** @type {?} */
    MtxSelectComponent.prototype.clear;
    /** @type {?} */
    MtxSelectComponent.prototype.add;
    /** @type {?} */
    MtxSelectComponent.prototype.remove;
    /** @type {?} */
    MtxSelectComponent.prototype.scroll;
    /** @type {?} */
    MtxSelectComponent.prototype.scrollToEnd;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._value;
    /**
     * Implemented as part of MatFormFieldControl.
     * @type {?}
     */
    MtxSelectComponent.prototype.stateChanges;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._id;
    /**
     * Unique id for this input.
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._uid;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._focused;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._required;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._disabled;
    /** @type {?} */
    MtxSelectComponent.prototype.errorState;
    /**
     * A name for this control that can be used by `mat-form-field`.
     * @type {?}
     */
    MtxSelectComponent.prototype.controlType;
    /**
     * The aria-describedby attribute on the select for improved a11y.
     * @type {?}
     */
    MtxSelectComponent.prototype._ariaDescribedby;
    /**
     * `View -> model callback called when value changes`
     * @type {?}
     */
    MtxSelectComponent.prototype._onChange;
    /**
     * `View -> model callback called when select has been touched`
     * @type {?}
     */
    MtxSelectComponent.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MtxSelectComponent.prototype._changeDetectorRef;
    /** @type {?} */
    MtxSelectComponent.prototype.ngControl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MtxSelectModule = /** @class */ (function () {
    function MtxSelectModule() {
    }
    MtxSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
                    exports: [
                        MtxSelectComponent,
                        MtxSelectOptgroupTemplateDirective,
                        MtxSelectOptionTemplateDirective,
                        MtxSelectLabelTemplateDirective,
                        MtxSelectMultiLabelTemplateDirective,
                        MtxSelectHeaderTemplateDirective,
                        MtxSelectFooterTemplateDirective,
                        MtxSelectNotFoundTemplateDirective,
                        MtxSelectTypeToSearchTemplateDirective,
                        MtxSelectLoadingTextTemplateDirective,
                        MtxSelectTagTemplateDirective,
                        MtxSelectLoadingSpinnerTemplateDirective
                    ],
                    declarations: [
                        MtxSelectComponent,
                        MtxSelectOptgroupTemplateDirective,
                        MtxSelectOptionTemplateDirective,
                        MtxSelectLabelTemplateDirective,
                        MtxSelectMultiLabelTemplateDirective,
                        MtxSelectHeaderTemplateDirective,
                        MtxSelectFooterTemplateDirective,
                        MtxSelectNotFoundTemplateDirective,
                        MtxSelectTypeToSearchTemplateDirective,
                        MtxSelectLoadingTextTemplateDirective,
                        MtxSelectTagTemplateDirective,
                        MtxSelectLoadingSpinnerTemplateDirective,
                    ],
                },] }
    ];
    return MtxSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxSelect.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxSelectComponent, MtxSelectModule, MtxSelectOptionTemplateDirective as ɵa, MtxSelectOptgroupTemplateDirective as ɵb, MtxSelectLabelTemplateDirective as ɵc, MtxSelectMultiLabelTemplateDirective as ɵd, MtxSelectHeaderTemplateDirective as ɵe, MtxSelectFooterTemplateDirective as ɵf, MtxSelectNotFoundTemplateDirective as ɵg, MtxSelectTypeToSearchTemplateDirective as ɵh, MtxSelectLoadingTextTemplateDirective as ɵi, MtxSelectTagTemplateDirective as ɵj, MtxSelectLoadingSpinnerTemplateDirective as ɵk };
//# sourceMappingURL=mtxSelect.js.map
