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
let nextUniqueId = 0;
export class MtxSelectComponent {
    /**
     * @param {?} _focusMonitor
     * @param {?} _elementRef
     * @param {?} _changeDetectorRef
     * @param {?} ngControl
     */
    constructor(_focusMonitor, _elementRef, _changeDetectorRef, ngControl) {
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
        (_) => true);
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
        this._uid = `mtx-select-${nextUniqueId++}`;
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
        () => { });
        /**
         * `View -> model callback called when select has been touched`
         */
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        _focusMonitor.monitor(_elementRef, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            if (this._focused && !origin) {
                this._onTouched();
            }
            this._focused = !!origin;
            this.stateChanges.next();
        }));
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * Value of the select control.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        this._value = newValue;
        this._onChange(newValue);
        this.stateChanges.next();
    }
    /**
     * Unique id of the element.
     * @return {?}
     */
    get id() { return this._id; }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
    }
    /**
     * Placeholder to be shown if value is empty.
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * Whether the input is focused.
     * @return {?}
     */
    get focused() { return this._focused; }
    /**
     * @return {?}
     */
    get empty() {
        return !this.value || (Array.isArray(this.value) && this.value.length === 0);
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() { return this.focused || !this.empty; }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this.readonly = this._disabled;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.ngControl) {
            this.errorState = this.ngControl.invalid && this.ngControl.touched;
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @return {?}
     */
    onContainerClick() { }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
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
MtxSelectComponent.ctorParameters = () => [
    { type: FocusMonitor },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLEtBQUssRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUNMLGdDQUFnQyxFQUNoQywrQkFBK0IsRUFDL0IsZ0NBQWdDLEVBQ2hDLGdDQUFnQyxFQUNoQyxrQ0FBa0MsRUFDbEMsa0NBQWtDLEVBQ2xDLHNDQUFzQyxFQUN0QyxxQ0FBcUMsRUFDckMsb0NBQW9DLEVBQ3BDLDZCQUE2QixFQUM3Qix3Q0FBd0MsRUFDekMsTUFBTSx1QkFBdUIsQ0FBQzs7SUFLM0IsWUFBWSxHQUFHLENBQUM7QUFpQnBCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7SUFpSjdCLFlBQ1UsYUFBMkIsRUFDM0IsV0FBb0MsRUFDcEMsa0JBQXFDLEVBQ2xCLFNBQW9CO1FBSHZDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7UUFySXhDLFdBQU0sR0FBcUQsS0FBSyxDQUFDO1FBQ2pFLGVBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEIsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUl6QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLElBQUksQ0FBQzs7UUFFeEIscUJBQWdCLEdBQThCLE1BQU0sQ0FBQztRQUdyRCxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QiwyQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDOUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVYLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxZQUFZLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNoQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZUFBVSxHQUE4QixFQUFFLENBQUM7UUFFM0MsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsY0FBUzs7OztRQUFHLENBQUMsQ0FBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDO1FBQ3ZDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBR25DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQUM1RCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQixRQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFDNUQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBVW5DLFdBQU0sR0FBRyxJQUFJLENBQUM7Ozs7UUFHYixpQkFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDOzs7O1FBWW5ELFNBQUksR0FBRyxjQUFjLFlBQVksRUFBRSxFQUFFLENBQUM7UUFhdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBU2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFMUIsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQUduQixnQkFBVyxHQUFHLFlBQVksQ0FBQzs7OztRQU0zQixjQUFTOzs7UUFBeUIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFDOzs7O1FBRzVDLGVBQVU7OztRQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztRQVFyQixhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7SUEzRkQsSUFDSSxLQUFLLEtBQVUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDeEMsSUFBSSxLQUFLLENBQUMsUUFBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFPRCxJQUNJLEVBQUUsS0FBYSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7OztJQUNyQyxJQUFJLEVBQUUsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQU9ELElBQ0ksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUlELElBQUksT0FBTyxLQUFjLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7SUFHaEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7O0lBRUQsSUFBSSxnQkFBZ0IsS0FBYyxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7OztJQUV2RSxJQUNJLFFBQVEsS0FBYyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzs7OztJQUNsRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBR0QsSUFDSSxRQUFRLEtBQWMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDbEQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFvQ0QsUUFBUSxLQUFLLENBQUM7Ozs7SUFFZCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsR0FBYTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUdELGdCQUFnQixLQUFLLENBQUM7Ozs7Ozs7O0lBUXRCLFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7Ozs7SUFTRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7OztJQVNELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7O1lBN09GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsWUFBWTtvQkFDckIsNkJBQTZCLEVBQUUsa0JBQWtCO29CQUNqRCxXQUFXLEVBQUUsSUFBSTtvQkFDakIseUJBQXlCLEVBQUUsMEJBQTBCO2lCQUN0RDtnQkFDRCwyM0tBQXNDO2dCQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzthQUMvRTs7OztZQXBDUSxZQUFZO1lBWm5CLFVBQVU7WUFDVixpQkFBaUI7WUFRWSxTQUFTLHVCQTZMbkMsUUFBUSxZQUFJLElBQUk7Ozs2QkFsSmxCLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBQ3BFLFlBQVksU0FBQyxrQ0FBa0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NEJBQ3RFLFlBQVksU0FBQywrQkFBK0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBQ25FLFlBQVksU0FBQyxvQ0FBb0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NkJBQ3hFLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NkJBQ3BFLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBQ3BFLFlBQVksU0FBQyxrQ0FBa0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7bUNBQ3RFLFlBQVksU0FBQyxzQ0FBc0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7a0NBQzFFLFlBQVksU0FBQyxxQ0FBcUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7MEJBQ3pFLFlBQVksU0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7cUNBQ2pFLFlBQVksU0FBQyx3Q0FBd0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7cUJBRzVFLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FDQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFFTCxNQUFNO29CQUNOLE1BQU07cUJBQ04sTUFBTTttQkFDTixNQUFNO29CQUNOLE1BQU07cUJBQ04sTUFBTTtvQkFDTixNQUFNO2tCQUNOLE1BQU07cUJBQ04sTUFBTTtxQkFDTixNQUFNOzBCQUNOLE1BQU07b0JBR04sS0FBSztpQkFhTCxLQUFLOzBCQVlMLEtBQUs7dUJBa0JMLEtBQUs7dUJBUUwsS0FBSzs7OztJQXZITiw0Q0FBd0c7O0lBQ3hHLDhDQUE0Rzs7SUFDNUcsMkNBQXNHOztJQUN0RyxnREFBZ0g7O0lBQ2hILDRDQUF3Rzs7SUFDeEcsNENBQXdHOztJQUN4Ryw4Q0FBNEc7O0lBQzVHLGtEQUFvSDs7SUFDcEgsaURBQWtIOztJQUNsSCx5Q0FBa0c7O0lBQ2xHLG9EQUF3SDs7Ozs7SUFHeEgsb0NBQTBFOztJQUMxRSx3Q0FBaUM7O0lBQ2pDLHdDQUFrQzs7SUFDbEMsc0NBQTBCOztJQUMxQix1Q0FBMkI7O0lBQzNCLHVDQUEyQjs7SUFDM0IsMkNBQThCOztJQUM5QiwwQ0FBb0M7O0lBQ3BDLHVDQUEwQjs7SUFDMUIsOENBQWlDOztJQUNqQyx5Q0FBb0M7O0lBQ3BDLDhDQUE4RDs7SUFDOUQscUNBQXNDOztJQUN0Qyx3Q0FBa0M7O0lBQ2xDLDZDQUFpQzs7SUFDakMsb0RBQXVDOztJQUN2QywwQ0FBOEI7O0lBQzlCLG1DQUFvQjs7SUFDcEIsb0NBQXlCOztJQUN6QixxQ0FBeUI7O0lBQ3pCLHlDQUFvQzs7SUFDcEMsd0NBQTJCOztJQUMzQix1Q0FBMEI7O0lBQzFCLDhDQUFrQzs7SUFDbEMsc0NBQTBCOztJQUMxQiwwQ0FBeUM7O0lBQ3pDLHdDQUEyQjs7SUFDM0Isc0NBQTBCOztJQUMxQixzQ0FBeUI7O0lBQ3pCLGtEQUFxQzs7SUFDckMsOENBQWlDOztJQUNqQyx5Q0FBNkI7O0lBQzdCLHVDQUEwQjs7SUFDMUIsd0NBQW9EOztJQUNwRCxzQ0FBMEI7O0lBQzFCLHlDQUE0Qjs7SUFDNUIsMkNBQTJCOztJQUMzQix1Q0FBZ0Q7O0lBQ2hELDJDQUErQjs7SUFDL0IsOENBQTZDOztJQUM3Qyx1Q0FBb0M7O0lBRXBDLGtDQUFvQzs7SUFDcEMsbUNBQXFDOztJQUNyQyxvQ0FBc0M7O0lBQ3RDLGtDQUFvQzs7SUFDcEMsbUNBQXFDOztJQUNyQyxvQ0FBc0U7O0lBQ3RFLG1DQUFxQzs7SUFDckMsaUNBQW1DOztJQUNuQyxvQ0FBc0M7O0lBQ3RDLG9DQUFzRTs7SUFDdEUseUNBQTJDOzs7OztJQVUzQyxvQ0FBc0I7Ozs7O0lBR3RCLDBDQUEyRDs7Ozs7SUFTM0QsaUNBQW9COzs7Ozs7SUFHcEIsa0NBQThDOzs7OztJQVM5QywwQ0FBNkI7Ozs7O0lBSTdCLHNDQUF5Qjs7Ozs7SUFjekIsdUNBQTBCOzs7OztJQVMxQix1Q0FBMEI7O0lBRTFCLHdDQUFtQjs7Ozs7SUFHbkIseUNBQTJCOzs7OztJQUczQiw4Q0FBeUI7Ozs7O0lBR3pCLHVDQUE0Qzs7Ozs7SUFHNUMsd0NBQXVCOzs7OztJQUdyQiwyQ0FBbUM7Ozs7O0lBQ25DLHlDQUE0Qzs7Ozs7SUFDNUMsZ0RBQTZDOztJQUM3Qyx1Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBNdHhTZWxlY3RPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0TGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0SGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3ROb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0TG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0TXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0TG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL3RlbXBsYXRlcy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgdHlwZSBDb21wYXJlV2l0aEZuID0gKGE6IGFueSwgYjogYW55KSA9PiBib29sZWFuO1xuZXhwb3J0IHR5cGUgR3JvdXBWYWx1ZUZuID0gKGtleTogc3RyaW5nIHwgb2JqZWN0LCBjaGlsZHJlbjogYW55W10pID0+IHN0cmluZyB8IG9iamVjdDtcblxubGV0IG5leHRVbmlxdWVJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ210eC1zZWxlY3QnLFxuICBleHBvcnRBczogJ210eFNlbGVjdCcsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnbXR4LXNlbGVjdCcsXG4gICAgJ1tjbGFzcy5tdHgtc2VsZWN0LWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcbiAgICAnW2F0dHIuaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIuYXJpYS1kZXNjcmliZWRieV0nOiAnX2FyaWFEZXNjcmliZWRieSB8fCBudWxsJyxcbiAgfSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTXR4U2VsZWN0Q29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNdHhTZWxlY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgRG9DaGVjaywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8YW55PiB7XG4gIC8vIE10eFNlbGVjdCBjdXN0b20gdGVtcGxhdGVzXG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0T3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0T3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdExhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbXVsdGlMYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGZvb3RlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKE10eFNlbGVjdE5vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgbm90Rm91bmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0eXBlVG9TZWFyY2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChNdHhTZWxlY3RMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxvYWRpbmdUZXh0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0VGFnVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGFnVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoTXR4U2VsZWN0TG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nU3Bpbm5lclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKiBNdHhTZWxlY3Qgb3B0aW9ucyAqL1xuICBASW5wdXQoKSBhZGRUYWc6IGJvb2xlYW4gfCAoKHRlcm06IHN0cmluZykgPT4gYW55IHwgUHJvbWlzZTxhbnk+KSA9IGZhbHNlO1xuICBASW5wdXQoKSBhZGRUYWdUZXh0ID0gJ0FkZCBpdGVtJztcbiAgQElucHV0KCkgYXBwZWFyYW5jZSA9ICd1bmRlcmxpbmUnO1xuICBASW5wdXQoKSBhcHBlbmRUbzogc3RyaW5nO1xuICBASW5wdXQoKSBiaW5kTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgYmluZFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsb3NlT25TZWxlY3QgPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhckFsbFRleHQgPSAnQ2xlYXIgYWxsJztcbiAgQElucHV0KCkgY2xlYXJhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xlYXJPbkJhY2tzcGFjZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiBDb21wYXJlV2l0aEZuOyAvLyBUT0RPOlxuICBASW5wdXQoKSBkcm9wZG93blBvc2l0aW9uOiAnYm90dG9tJyB8ICd0b3AnIHwgJ2F1dG8nID0gJ2F1dG8nO1xuICBASW5wdXQoKSBncm91cEJ5OiAoKSA9PiB2b2lkIHwgc3RyaW5nO1xuICBASW5wdXQoKSBncm91cFZhbHVlOiBHcm91cFZhbHVlRm47XG4gIEBJbnB1dCgpIHNlbGVjdGFibGVHcm91cCA9IGZhbHNlO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlR3JvdXBBc01vZGVsID0gdHJ1ZTtcbiAgQElucHV0KCkgaGlkZVNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGl0ZW1zID0gW107XG4gIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBsb2FkaW5nVGV4dCA9ICdMb2FkaW5nLi4uJztcbiAgQElucHV0KCkgbGFiZWxGb3JJZCA9IG51bGw7XG4gIEBJbnB1dCgpIG1hcmtGaXJzdCA9IHRydWU7XG4gIEBJbnB1dCgpIG1heFNlbGVjdGVkSXRlbXM6IG51bWJlcjtcbiAgQElucHV0KCkgbXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbm90Rm91bmRUZXh0ID0gJ05vIGl0ZW1zIGZvdW5kJztcbiAgQElucHV0KCkgc2VhcmNoYWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlYXJjaEZuID0gbnVsbDtcbiAgQElucHV0KCkgc2VhcmNoV2hpbGVDb21wb3NpbmcgPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhclNlYXJjaE9uQWRkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2VsZWN0T25UYWIgPSBmYWxzZTtcbiAgQElucHV0KCkgdHJhY2tCeUZuID0gbnVsbDtcbiAgQElucHV0KCkgaW5wdXRBdHRyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBvcGVuT25FbnRlciA9IHRydWU7XG4gIEBJbnB1dCgpIG1pblRlcm1MZW5ndGggPSAwO1xuICBASW5wdXQoKSBrZXlEb3duRm4gPSAoXzogS2V5Ym9hcmRFdmVudCkgPT4gdHJ1ZTtcbiAgQElucHV0KCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlVG9TZWFyY2hUZXh0ID0gJ1R5cGUgdG8gc2VhcmNoJztcbiAgQElucHV0KCkgdHlwZWFoZWFkOiBTdWJqZWN0PHN0cmluZz47XG5cbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB0ZXJtOiBzdHJpbmc7IGl0ZW1zOiBhbnlbXSB9PigpO1xuICBAT3V0cHV0KCkgY2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcbiAgQE91dHB1dCgpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgc2VsZWN0IGNvbnRyb2wuICovXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuX29uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWUgPSBudWxsO1xuXG4gIC8qKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuICovXG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlczogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqIFVuaXF1ZSBpZCBvZiB0aGUgZWxlbWVudC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWUgfHwgdGhpcy5fdWlkO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuXG4gIC8qKiBVbmlxdWUgaWQgZm9yIHRoaXMgaW5wdXQuICovXG4gIHByaXZhdGUgX3VpZCA9IGBtdHgtc2VsZWN0LSR7bmV4dFVuaXF1ZUlkKyt9YDtcblxuICAvKiogUGxhY2Vob2xkZXIgdG8gYmUgc2hvd24gaWYgdmFsdWUgaXMgZW1wdHkuICovXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBmb2N1c2VkLiAqL1xuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7IH1cbiAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xuXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudmFsdWUgfHwgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkgJiYgdGhpcy52YWx1ZS5sZW5ndGggPT09IDApO1xuICB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7IH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLl9kaXNhYmxlZDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBlcnJvclN0YXRlID0gZmFsc2U7XG5cbiAgLyoqIEEgbmFtZSBmb3IgdGhpcyBjb250cm9sIHRoYXQgY2FuIGJlIHVzZWQgYnkgYG1hdC1mb3JtLWZpZWxkYC4gKi9cbiAgY29udHJvbFR5cGUgPSAnbXR4LXNlbGVjdCc7XG5cbiAgLyoqIFRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZSBvbiB0aGUgc2VsZWN0IGZvciBpbXByb3ZlZCBhMTF5LiAqL1xuICBfYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XG5cbiAgLyoqIGBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXNgICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgLyoqIGBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHNlbGVjdCBoYXMgYmVlbiB0b3VjaGVkYCAqL1xuICBfb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbFxuICApIHtcbiAgICBfZm9jdXNNb25pdG9yLm1vbml0b3IoX2VsZW1lbnRSZWYsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgaWYgKHRoaXMuX2ZvY3VzZWQgJiYgIW9yaWdpbikge1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHsgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcbiAgICAgIHRoaXMuZXJyb3JTdGF0ZSA9IHRoaXMubmdDb250cm9sLmludmFsaWQgJiYgdGhpcy5uZ0NvbnRyb2wudG91Y2hlZDtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIC8qKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE1hdEZvcm1GaWVsZENvbnRyb2wuICovXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl9hcmlhRGVzY3JpYmVkYnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgLyoqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC4gKi9cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICAvKiogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLiAqL1xuICBvbkNvbnRhaW5lckNsaWNrKCkgeyB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdCdzIHZhbHVlLiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgICogcmVxdWlyZWQgdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIHRvIGJlIHdyaXR0ZW4gdG8gdGhlIG1vZGVsLlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB0aGUgc2VsZWN0J3MgdmFsdWVcbiAgICogY2hhbmdlcyBmcm9tIHVzZXIgaW5wdXQuIFBhcnQgb2YgdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICAgKiByZXF1aXJlZCB0byBpbnRlZ3JhdGUgd2l0aCBBbmd1bGFyJ3MgY29yZSBmb3JtcyBBUEkuXG4gICAqXG4gICAqIEBwYXJhbSBmbiBDYWxsYmFjayB0byBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIHNlbGVjdCBpcyBibHVycmVkXG4gICAqIGJ5IHRoZSB1c2VyLiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgcmVxdWlyZWRcbiAgICogdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiB0b3VjaGVkLlxuICAgKi9cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=