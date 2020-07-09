/**
 * @fileoverview added by tsickle
 * Generated from: select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ElementRef, ChangeDetectorRef, Optional, Self, Output, EventEmitter, TemplateRef, ContentChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { MtxSelectOptionTemplateDirective, MtxSelectLabelTemplateDirective, MtxSelectHeaderTemplateDirective, MtxSelectFooterTemplateDirective, MtxSelectOptgroupTemplateDirective, MtxSelectNotFoundTemplateDirective, MtxSelectTypeToSearchTemplateDirective, MtxSelectLoadingTextTemplateDirective, MtxSelectMultiLabelTemplateDirective, MtxSelectTagTemplateDirective, MtxSelectLoadingSpinnerTemplateDirective } from './templates.directive';
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
export { MtxSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUNMLGdDQUFnQyxFQUNoQywrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQ2hDLGdDQUFnQyxFQUNoQyxrQ0FBa0MsRUFDbEMsa0NBQWtDLEVBQ2xDLHNDQUFzQyxFQUN0QyxxQ0FBcUMsRUFDckMsb0NBQW9DLEVBQ3BDLDZCQUE2QixFQUM3Qix3Q0FBd0MsRUFDekMsTUFBTSx1QkFBdUIsQ0FBQzs7SUFLM0IsWUFBWSxHQUFHLENBQUM7QUFFcEI7SUFnS0UsNEJBQ1UsYUFBMkIsRUFDM0IsV0FBb0MsRUFDcEMsa0JBQXFDLEVBQ2xCLFNBQW9CO1FBSmpELGlCQWlCQztRQWhCUyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNsQixjQUFT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QUc1Qyx3Q0FBdUI7Ozs7O0lBR3JCLDJDQUFtQzs7Ozs7SUFDbkMseUNBQTRDOzs7OztJQUM1QyxnREFBNkM7O0lBQzdDLHVDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIE10eFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0Rm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdE9wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdE5vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdFR5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdFRhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG59IGZyb20gJy4vdGVtcGxhdGVzLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIENvbXBhcmVXaXRoRm4gPSAoYTogYW55LCBiOiBhbnkpID0+IGJvb2xlYW47XG5leHBvcnQgdHlwZSBHcm91cFZhbHVlRm4gPSAoa2V5OiBzdHJpbmcgfCBvYmplY3QsIGNoaWxkcmVuOiBhbnlbXSkgPT4gc3RyaW5nIHwgb2JqZWN0O1xuXG5sZXQgbmV4dFVuaXF1ZUlkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXR4LXNlbGVjdCcsXG4gIGV4cG9ydEFzOiAnbXR4U2VsZWN0JyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdtdHgtc2VsZWN0JyxcbiAgICAnW2NsYXNzLm10eC1zZWxlY3QtZmxvYXRpbmddJzogJ3Nob3VsZExhYmVsRmxvYXQnLFxuICAgICdbYXR0ci5pZF0nOiAnaWQnLFxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdfYXJpYURlc2NyaWJlZGJ5IHx8IG51bGwnLFxuICB9LFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNdHhTZWxlY3RDb21wb25lbnQgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE10eFNlbGVjdENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxhbnk+IHtcbiAgLy8gTXR4U2VsZWN0IGN1c3RvbSB0ZW1wbGF0ZXNcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIG9wdGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0TGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdE11bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBtdWx0aUxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0Rm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0Tm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBub3RGb3VuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdFR5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHR5cGVUb1NlYXJjaFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdExvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbG9hZGluZ1RleHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RUYWdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0YWdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxvYWRpbmdTcGlubmVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqIE10eFNlbGVjdCBvcHRpb25zICovXG4gIEBJbnB1dCgpIGFkZFRhZzogYm9vbGVhbiB8ICgodGVybTogc3RyaW5nKSA9PiBhbnkgfCBQcm9taXNlPGFueT4pID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFkZFRhZ1RleHQgPSAnQWRkIGl0ZW0nO1xuICBASW5wdXQoKSBhcHBlYXJhbmNlID0gJ3VuZGVybGluZSc7XG4gIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJpbmRMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBiaW5kVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgY2xvc2VPblNlbGVjdCA9IHRydWU7XG4gIEBJbnB1dCgpIGNsZWFyQWxsVGV4dCA9ICdDbGVhciBhbGwnO1xuICBASW5wdXQoKSBjbGVhcmFibGUgPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhck9uQmFja3NwYWNlID0gdHJ1ZTtcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IENvbXBhcmVXaXRoRm47IC8vIFRPRE86XG4gIEBJbnB1dCgpIGRyb3Bkb3duUG9zaXRpb246ICdib3R0b20nIHwgJ3RvcCcgfCAnYXV0bycgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGdyb3VwQnk6ICgpID0+IHZvaWQgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGdyb3VwVmFsdWU6IEdyb3VwVmFsdWVGbjtcbiAgQElucHV0KCkgc2VsZWN0YWJsZUdyb3VwID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGVHcm91cEFzTW9kZWwgPSB0cnVlO1xuICBASW5wdXQoKSBoaWRlU2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaXRlbXMgPSBbXTtcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxvYWRpbmdUZXh0ID0gJ0xvYWRpbmcuLi4nO1xuICBASW5wdXQoKSBsYWJlbEZvcklkID0gbnVsbDtcbiAgQElucHV0KCkgbWFya0ZpcnN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgbWF4U2VsZWN0ZWRJdGVtczogbnVtYmVyO1xuICBASW5wdXQoKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBub3RGb3VuZFRleHQgPSAnTm8gaXRlbXMgZm91bmQnO1xuICBASW5wdXQoKSBzZWFyY2hhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgc2VhcmNoRm4gPSBudWxsO1xuICBASW5wdXQoKSBzZWFyY2hXaGlsZUNvbXBvc2luZyA9IHRydWU7XG4gIEBJbnB1dCgpIGNsZWFyU2VhcmNoT25BZGQgPSB0cnVlO1xuICBASW5wdXQoKSBzZWxlY3RPblRhYiA9IGZhbHNlO1xuICBASW5wdXQoKSB0cmFja0J5Rm4gPSBudWxsO1xuICBASW5wdXQoKSBpbnB1dEF0dHJzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIHRhYkluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9wZW5PbkVudGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluVGVybUxlbmd0aCA9IDA7XG4gIEBJbnB1dCgpIGtleURvd25GbiA9IChfOiBLZXlib2FyZEV2ZW50KSA9PiB0cnVlO1xuICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGVUb1NlYXJjaFRleHQgPSAnVHlwZSB0byBzZWFyY2gnO1xuICBASW5wdXQoKSB0eXBlYWhlYWQ6IFN1YmplY3Q8c3RyaW5nPjtcblxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjx7IHRlcm06IHN0cmluZzsgaXRlbXM6IGFueVtdIH0+KCk7XG4gIEBPdXRwdXQoKSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFkZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlciB9PigpO1xuICBAT3V0cHV0KCkgc2Nyb2xsVG9FbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqIFZhbHVlIG9mIHRoZSBzZWxlY3QgY29udHJvbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5fb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF92YWx1ZSA9IG51bGw7XG5cbiAgLyoqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC4gKi9cbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogVW5pcXVlIGlkIG9mIHRoZSBlbGVtZW50LiAqL1xuICBASW5wdXQoKVxuICBnZXQgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2lkOyB9XG4gIHNldCBpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faWQgPSB2YWx1ZSB8fCB0aGlzLl91aWQ7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XG5cbiAgLyoqIFVuaXF1ZSBpZCBmb3IgdGhpcyBpbnB1dC4gKi9cbiAgcHJpdmF0ZSBfdWlkID0gYG10eC1zZWxlY3QtJHtuZXh0VW5pcXVlSWQrK31gO1xuXG4gIC8qKiBQbGFjZWhvbGRlciB0byBiZSBzaG93biBpZiB2YWx1ZSBpcyBlbXB0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGZvY3VzZWQuICovXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZm9jdXNlZDsgfVxuICBwcml2YXRlIF9mb2N1c2VkID0gZmFsc2U7XG5cbiAgZ2V0IGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy52YWx1ZSB8fCAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5yZWFkb25seSA9IHRoaXMuX2Rpc2FibGVkO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcblxuICAvKiogQSBuYW1lIGZvciB0aGlzIGNvbnRyb2wgdGhhdCBjYW4gYmUgdXNlZCBieSBgbWF0LWZvcm0tZmllbGRgLiAqL1xuICBjb250cm9sVHlwZSA9ICdtdHgtc2VsZWN0JztcblxuICAvKiogVGhlIGFyaWEtZGVzY3JpYmVkYnkgYXR0cmlidXRlIG9uIHRoZSBzZWxlY3QgZm9yIGltcHJvdmVkIGExMXkuICovXG4gIF9hcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcblxuICAvKiogYFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlc2AgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAvKiogYFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gc2VsZWN0IGhhcyBiZWVuIHRvdWNoZWRgICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXG4gICkge1xuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICBpZiAodGhpcy5fZm9jdXNlZCAmJiAhb3JpZ2luKSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICB9XG5cbiAgLyoqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC4gKi9cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FyaWFEZXNjcmliZWRieSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICAvKiogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLiAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuICovXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7IH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2VsZWN0J3MgdmFsdWUuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICAgKiByZXF1aXJlZCB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgdG8gYmUgd3JpdHRlbiB0byB0aGUgbW9kZWwuXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSBzZWxlY3QncyB2YWx1ZVxuICAgKiBjaGFuZ2VzIGZyb20gdXNlciBpbnB1dC4gUGFydCBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gICAqIHJlcXVpcmVkIHRvIGludGVncmF0ZSB3aXRoIEFuZ3VsYXIncyBjb3JlIGZvcm1zIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB0aGUgc2VsZWN0IGlzIGJsdXJyZWRcbiAgICogYnkgdGhlIHVzZXIuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSByZXF1aXJlZFxuICAgKiB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIHRvdWNoZWQuXG4gICAqL1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==