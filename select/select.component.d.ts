import { OnInit, OnDestroy, DoCheck, ElementRef, ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
export declare type CompareWithFn = (a: any, b: any) => boolean;
export declare type GroupValueFn = (key: string | object, children: any[]) => string | object;
export declare class MtxSelectComponent implements OnInit, OnDestroy, DoCheck, ControlValueAccessor, MatFormFieldControl<any> {
    private _focusMonitor;
    private _elementRef;
    private _changeDetectorRef;
    ngControl: NgControl;
    optionTemplate: TemplateRef<any>;
    optgroupTemplate: TemplateRef<any>;
    labelTemplate: TemplateRef<any>;
    multiLabelTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    notFoundTemplate: TemplateRef<any>;
    typeToSearchTemplate: TemplateRef<any>;
    loadingTextTemplate: TemplateRef<any>;
    tagTemplate: TemplateRef<any>;
    loadingSpinnerTemplate: TemplateRef<any>;
    /** MtxSelect options */
    addTag: boolean | ((term: string) => any | Promise<any>);
    addTagText: string;
    appearance: string;
    appendTo: string;
    bindLabel: string;
    bindValue: string;
    closeOnSelect: boolean;
    clearAllText: string;
    clearable: boolean;
    clearOnBackspace: boolean;
    compareWith: CompareWithFn;
    dropdownPosition: 'bottom' | 'top' | 'auto';
    groupBy: () => void | string;
    groupValue: GroupValueFn;
    selectableGroup: boolean;
    selectableGroupAsModel: boolean;
    hideSelected: boolean;
    items: any[];
    isOpen: boolean;
    loading: boolean;
    loadingText: string;
    labelForId: any;
    markFirst: boolean;
    maxSelectedItems: number;
    multiple: boolean;
    notFoundText: string;
    searchable: boolean;
    readonly: boolean;
    searchFn: any;
    searchWhileComposing: boolean;
    clearSearchOnAdd: boolean;
    selectOnTab: boolean;
    trackByFn: any;
    inputAttrs: {
        [key: string]: string;
    };
    tabIndex: number;
    openOnEnter: boolean;
    minTermLength: number;
    keyDownFn: (_: KeyboardEvent) => boolean;
    virtualScroll: boolean;
    typeToSearchText: string;
    typeahead: Subject<string>;
    blur: EventEmitter<any>;
    focus: EventEmitter<any>;
    change: EventEmitter<any>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    search: EventEmitter<{
        term: string;
        items: any[];
    }>;
    clear: EventEmitter<any>;
    add: EventEmitter<any>;
    remove: EventEmitter<any>;
    scroll: EventEmitter<{
        start: number;
        end: number;
    }>;
    scrollToEnd: EventEmitter<any>;
    /** Value of the select control. */
    get value(): any;
    set value(newValue: any);
    private _value;
    /** Implemented as part of MatFormFieldControl. */
    readonly stateChanges: Subject<void>;
    /** Unique id of the element. */
    get id(): string;
    set id(value: string);
    private _id;
    /** Unique id for this input. */
    private _uid;
    /** Placeholder to be shown if value is empty. */
    get placeholder(): string;
    set placeholder(value: string);
    private _placeholder;
    /** Whether the input is focused. */
    get focused(): boolean;
    private _focused;
    get empty(): boolean;
    get shouldLabelFloat(): boolean;
    get required(): boolean;
    set required(value: boolean);
    private _required;
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    errorState: boolean;
    /** A name for this control that can be used by `mat-form-field`. */
    controlType: string;
    /** The aria-describedby attribute on the select for improved a11y. */
    _ariaDescribedby: string;
    /** `View -> model callback called when value changes` */
    _onChange: (value: any) => void;
    /** `View -> model callback called when select has been touched` */
    _onTouched: () => void;
    constructor(_focusMonitor: FocusMonitor, _elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef, ngControl: NgControl);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    /** Implemented as part of MatFormFieldControl. */
    setDescribedByIds(ids: string[]): void;
    /** Implemented as part of MatFormFieldControl. */
    setDisabledState(isDisabled: boolean): void;
    /** Implemented as part of MatFormFieldControl. */
    onContainerClick(): void;
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value: any): void;
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn: any): void;
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn: any): void;
}
