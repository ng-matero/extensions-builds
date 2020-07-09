/**
 * @fileoverview added by tsickle
 * Generated from: color-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Self, ElementRef, Input, Output, EventEmitter, Inject, ViewChild, Host, NgZone, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { _supportsShadowDom } from '@angular/cdk/platform';
import { Subject, merge, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatFormFieldControl, MatFormField } from '@angular/material/form-field';
import { MatMenuTrigger } from '@angular/material/menu';
/** @type {?} */
var nextUniqueId = 0;
var MtxColorPickerComponent = /** @class */ (function () {
    function MtxColorPickerComponent(_focusMonitor, _elementRef, _changeDetectorRef, _zone, ngControl, _formField, _document) {
        var _this = this;
        this._focusMonitor = _focusMonitor;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._zone = _zone;
        this.ngControl = ngControl;
        this._formField = _formField;
        this._document = _document;
        this._value = '';
        /**
         * Implemented as part of MatFormFieldControl.
         */
        this.stateChanges = new Subject();
        /**
         * Unique id for this input.
         */
        this._uid = "mtx-color-picker-" + nextUniqueId++;
        this._focused = false;
        this._required = false;
        this._disabled = false;
        this.errorState = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */
        this.controlType = 'mtx-color-picker';
        /**
         * `View -> model callback called when value changes`
         */
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        /**
         * `View -> model callback called when color picker has been touched`
         */
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Event emitted when the color changed
         */
        this.colorChange = new EventEmitter();
        /**
         * Whether or not the overlay panel is open.
         */
        this._panelOpen = false;
        /**
         * Whether the color picker can open the next time it is focused. Used to prevent a focused,
         * closed color picker from being reopened if the user switches to another browser tab and then
         * comes back.
         */
        this._canOpenOnNextFocus = true;
        /**
         * Event handler for when the window is blurred. Needs to be an
         * arrow function in order to preserve the context.
         */
        this._windowBlurHandler = (/**
         * @return {?}
         */
        function () {
            // If the user blurred the window while the color picker is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this._canOpenOnNextFocus =
                _this._document.activeElement !== _this._elementRef.nativeElement || _this._panelOpen;
        });
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
    Object.defineProperty(MtxColorPickerComponent.prototype, "value", {
        /** Value of the color picker control. */
        get: /**
         * Value of the color picker control.
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
    Object.defineProperty(MtxColorPickerComponent.prototype, "id", {
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
    Object.defineProperty(MtxColorPickerComponent.prototype, "placeholder", {
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
    Object.defineProperty(MtxColorPickerComponent.prototype, "focused", {
        /** Whether the input is focused. */
        get: /**
         * Whether the input is focused.
         * @return {?}
         */
        function () { return this._focused || this._panelOpen; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxColorPickerComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () { return !this.value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxColorPickerComponent.prototype, "shouldLabelFloat", {
        get: /**
         * @return {?}
         */
        function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtxColorPickerComponent.prototype, "required", {
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
    Object.defineProperty(MtxColorPickerComponent.prototype, "disabled", {
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
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MtxColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MtxColorPickerComponent.prototype.ngDoCheck = /**
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
    MtxColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            this._zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                window.addEventListener('blur', _this._windowBlurHandler);
            }));
            if (_supportsShadowDom()) {
                /** @type {?} */
                var element = this._elementRef.nativeElement;
                /** @type {?} */
                var rootNode = element.getRootNode ? element.getRootNode() : null;
                // We need to take the `ShadowRoot` off of `window`, because the built-in types are
                // incorrect. See https://github.com/Microsoft/TypeScript/issues/27929.
                this._isInsideShadowRoot = rootNode instanceof ((/** @type {?} */ (window))).ShadowRoot;
            }
        }
    };
    /**
     * @return {?}
     */
    MtxColorPickerComponent.prototype.ngOnDestroy = /**
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
    MtxColorPickerComponent.prototype.setDescribedByIds = /**
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
     * @return {?}
     */
    MtxColorPickerComponent.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * @return {?}
     */
    function () {
        this.open();
    };
    /**
     * Sets the color-picker's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    /**
     * Sets the color-picker's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    MtxColorPickerComponent.prototype.writeValue = /**
     * Sets the color-picker's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    function (value) {
        this._value = value || '';
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Saves a callback function to be invoked when the color-picker's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    /**
     * Saves a callback function to be invoked when the color-picker's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    MtxColorPickerComponent.prototype.registerOnChange = /**
     * Saves a callback function to be invoked when the color-picker's value
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
     * Saves a callback function to be invoked when the color picker is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    /**
     * Saves a callback function to be invoked when the color picker is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    MtxColorPickerComponent.prototype.registerOnTouched = /**
     * Saves a callback function to be invoked when the color picker is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /** Open panel with input focusin event. */
    /**
     * Open panel with input focusin event.
     * @return {?}
     */
    MtxColorPickerComponent.prototype._handleFocus = /**
     * Open panel with input focusin event.
     * @return {?}
     */
    function () {
        var _this = this;
        this.trigger.openMenu();
        this._closingActionsSubscription = merge(this._getOutsideClickStream())
            .pipe()
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.trigger.closeMenu();
            _this._closingActionsSubscription.unsubscribe();
        }));
    };
    /** Opens the overlay panel. */
    /**
     * Opens the overlay panel.
     * @return {?}
     */
    MtxColorPickerComponent.prototype.open = /**
     * Opens the overlay panel.
     * @return {?}
     */
    function () {
        this._panelOpen = true;
    };
    /** Closes the overlay panel and focuses the host element. */
    /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    MtxColorPickerComponent.prototype.close = /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    function () {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    };
    /** The callback of color changed. */
    /**
     * The callback of color changed.
     * @param {?} model
     * @return {?}
     */
    MtxColorPickerComponent.prototype.onColorChange = /**
     * The callback of color changed.
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.value = model.color.hex;
        this.colorChange.emit({ color: model.color, $event: model.$event });
    };
    /** Stream of clicks outside of the color picker panel. */
    /**
     * Stream of clicks outside of the color picker panel.
     * @private
     * @return {?}
     */
    MtxColorPickerComponent.prototype._getOutsideClickStream = /**
     * Stream of clicks outside of the color picker panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return merge((/** @type {?} */ (fromEvent(this._document, 'click'))), (/** @type {?} */ (fromEvent(this._document, 'touchend')))).pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
            // fall back to check the first element in the path of the click event.
            /** @type {?} */
            var clickTarget = (/** @type {?} */ ((_this._isInsideShadowRoot && event.composedPath
                ? event.composedPath()[0]
                : event.target)));
            /** @type {?} */
            var formField = _this._formField ? _this._formField._elementRef.nativeElement : null;
            return (clickTarget !== _this._elementRef.nativeElement &&
                (!formField || !formField.contains(clickTarget)));
        })));
    };
    MtxColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mtx-color-picker',
                    exportAs: 'mtxColorPicker',
                    template: "<input matInput\n       [(ngModel)]=\"value\"\n       [placeholder]=\"placeholder\"\n       [disabled]=\"disabled\"\n       (focusin)=\"_handleFocus()\"\n       autocomplete=\"off\">\n\n<div #colorPickerTrigger=\"matMenuTrigger\"\n     [matMenuTriggerFor]=\"colorPickerPopover\"\n     (menuOpened)=\"open()\"\n     (menuClosed)=\"close()\">\n</div>\n\n<mat-menu #colorPickerPopover=\"matMenu\" class=\"mtx-color-picker-panel\" [hasBackdrop]=\"false\">\n  <div class=\"mtx-color-picker\"\n       (click)=\"$event.stopPropagation()\"\n       (keydown)=\"$event.stopPropagation()\">\n    <color-chrome [color]=\"value\" (onChangeComplete)=\"onColorChange($event)\"></color-chrome>\n  </div>\n</mat-menu>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: MatFormFieldControl, useExisting: MtxColorPickerComponent }],
                    styles: [".mtx-color-picker-panel .mat-menu-content:not(:empty){padding:0}.mtx-color-picker-panel .mtx-color-picker{padding:8px}.mtx-color-picker-panel .mtx-color-picker .chrome-picker{box-shadow:none;border-radius:0}.mtx-color-picker-panel .mtx-color-picker .chrome-picker .saturation{border-radius:0}"]
                }] }
    ];
    /** @nocollapse */
    MtxColorPickerComponent.ctorParameters = function () { return [
        { type: FocusMonitor },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: MatFormField, decorators: [{ type: Optional }, { type: Host }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MtxColorPickerComponent.propDecorators = {
        value: [{ type: Input }],
        id: [{ type: Input }],
        placeholder: [{ type: Input }],
        required: [{ type: Input }],
        disabled: [{ type: Input }],
        colorChange: [{ type: Output }],
        trigger: [{ type: ViewChild, args: [MatMenuTrigger, { static: true },] }]
    };
    return MtxColorPickerComponent;
}());
export { MtxColorPickerComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._value;
    /**
     * Implemented as part of MatFormFieldControl.
     * @type {?}
     */
    MtxColorPickerComponent.prototype.stateChanges;
    /**
     * Unique id for this input.
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._uid;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._id;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._focused;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._required;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._disabled;
    /** @type {?} */
    MtxColorPickerComponent.prototype.errorState;
    /**
     * A name for this control that can be used by `mat-form-field`.
     * @type {?}
     */
    MtxColorPickerComponent.prototype.controlType;
    /**
     * The aria-describedby attribute on the color picker for improved a11y.
     * @type {?}
     */
    MtxColorPickerComponent.prototype._ariaDescribedby;
    /**
     * `View -> model callback called when value changes`
     * @type {?}
     */
    MtxColorPickerComponent.prototype._onChange;
    /**
     * `View -> model callback called when color picker has been touched`
     * @type {?}
     */
    MtxColorPickerComponent.prototype._onTouched;
    /**
     * Event emitted when the color changed
     * @type {?}
     */
    MtxColorPickerComponent.prototype.colorChange;
    /** @type {?} */
    MtxColorPickerComponent.prototype.trigger;
    /**
     * Whether or not the overlay panel is open.
     * @type {?}
     */
    MtxColorPickerComponent.prototype._panelOpen;
    /**
     * The subscription for closing actions (some are bound to document).
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._closingActionsSubscription;
    /**
     * Whether the element is inside of a ShadowRoot component.
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._isInsideShadowRoot;
    /**
     * Whether the color picker can open the next time it is focused. Used to prevent a focused,
     * closed color picker from being reopened if the user switches to another browser tab and then
     * comes back.
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._canOpenOnNextFocus;
    /**
     * Event handler for when the window is blurred. Needs to be an
     * arrow function in order to preserve the context.
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._windowBlurHandler;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._focusMonitor;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._zone;
    /** @type {?} */
    MtxColorPickerComponent.prototype.ngControl;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._formField;
    /**
     * @type {?}
     * @private
     */
    MtxColorPickerComponent.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy9jb2xvci1waWNrZXIvIiwic291cmNlcyI6WyJjb2xvci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUVqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBRU4sU0FBUyxFQUNULElBQUksRUFFSixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBd0IsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxPQUFPLEVBQWMsS0FBSyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBSXBELFlBQVksR0FBRyxDQUFDO0FBRXBCO0lBcUhFLGlDQUNVLGFBQTJCLEVBQzNCLFdBQW9DLEVBQ3BDLGtCQUFxQyxFQUNyQyxLQUFhLEVBQ00sU0FBb0IsRUFDbkIsVUFBd0IsRUFDZCxTQUFjO1FBUHRELGlCQW9C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QUNuQyw4Q0FBNEM7Ozs7O0lBQzVDLHFEQUE2Qzs7Ozs7SUFDN0Msd0NBQXFCOztJQUNyQiw0Q0FBK0M7Ozs7O0lBQy9DLDZDQUFvRDs7Ozs7SUFDcEQsNENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBEb0NoZWNrLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3QsXG4gIEFmdGVyVmlld0luaXQsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IF9zdXBwb3J0c1NoYWRvd0RvbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSwgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCwgTWF0Rm9ybUZpZWxkIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ25neC1jb2xvcic7XG5cbmxldCBuZXh0VW5pcXVlSWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtdHgtY29sb3ItcGlja2VyJyxcbiAgZXhwb3J0QXM6ICdtdHhDb2xvclBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE10eENvbG9yUGlja2VyQ29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNdHhDb2xvclBpY2tlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBBZnRlclZpZXdJbml0LFxuICBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxhbnk+IHtcbiAgLyoqIFZhbHVlIG9mIHRoZSBjb2xvciBwaWNrZXIgY29udHJvbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bGwgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLl9vbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3ZhbHVlID0gJyc7XG5cbiAgLyoqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC4gKi9cbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKiogVW5pcXVlIGlkIGZvciB0aGlzIGlucHV0LiAqL1xuICBwcml2YXRlIF91aWQgPSBgbXR4LWNvbG9yLXBpY2tlci0ke25leHRVbmlxdWVJZCsrfWA7XG5cbiAgLyoqIFVuaXF1ZSBpZCBvZiB0aGUgZWxlbWVudC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pZDsgfVxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lkID0gdmFsdWUgfHwgdGhpcy5fdWlkO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuXG4gIC8qKiBQbGFjZWhvbGRlciB0byBiZSBzaG93biBpZiB2YWx1ZSBpcyBlbXB0eS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGZvY3VzZWQuICovXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZm9jdXNlZCB8fCB0aGlzLl9wYW5lbE9wZW47IH1cbiAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xuXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLnZhbHVlOyB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7IH1cblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcblxuICAvKiogQSBuYW1lIGZvciB0aGlzIGNvbnRyb2wgdGhhdCBjYW4gYmUgdXNlZCBieSBgbWF0LWZvcm0tZmllbGRgLiAqL1xuICBjb250cm9sVHlwZSA9ICdtdHgtY29sb3ItcGlja2VyJztcblxuICAvKiogVGhlIGFyaWEtZGVzY3JpYmVkYnkgYXR0cmlidXRlIG9uIHRoZSBjb2xvciBwaWNrZXIgZm9yIGltcHJvdmVkIGExMXkuICovXG4gIF9hcmlhRGVzY3JpYmVkYnk6IHN0cmluZztcblxuICAvKiogYFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlc2AgKi9cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAvKiogYFZpZXcgLT4gbW9kZWwgY2FsbGJhY2sgY2FsbGVkIHdoZW4gY29sb3IgcGlja2VyIGhhcyBiZWVuIHRvdWNoZWRgICovXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY29sb3IgY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY29sb3I6IENvbG9yOyAkZXZlbnQ6IE1vdXNlRXZlbnQgfT4oKTtcblxuICBAVmlld0NoaWxkKE1hdE1lbnVUcmlnZ2VyLCB7IHN0YXRpYzogdHJ1ZSB9KSB0cmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIG92ZXJsYXkgcGFuZWwgaXMgb3Blbi4gKi9cbiAgX3BhbmVsT3BlbiA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgc3Vic2NyaXB0aW9uIGZvciBjbG9zaW5nIGFjdGlvbnMgKHNvbWUgYXJlIGJvdW5kIHRvIGRvY3VtZW50KS4gKi9cbiAgcHJpdmF0ZSBfY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKiogV2hldGhlciB0aGUgZWxlbWVudCBpcyBpbnNpZGUgb2YgYSBTaGFkb3dSb290IGNvbXBvbmVudC4gKi9cbiAgcHJpdmF0ZSBfaXNJbnNpZGVTaGFkb3dSb290OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjb2xvciBwaWNrZXIgY2FuIG9wZW4gdGhlIG5leHQgdGltZSBpdCBpcyBmb2N1c2VkLiBVc2VkIHRvIHByZXZlbnQgYSBmb2N1c2VkLFxuICAgKiBjbG9zZWQgY29sb3IgcGlja2VyIGZyb20gYmVpbmcgcmVvcGVuZWQgaWYgdGhlIHVzZXIgc3dpdGNoZXMgdG8gYW5vdGhlciBicm93c2VyIHRhYiBhbmQgdGhlblxuICAgKiBjb21lcyBiYWNrLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2FuT3Blbk9uTmV4dEZvY3VzID0gdHJ1ZTtcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBmb3Igd2hlbiB0aGUgd2luZG93IGlzIGJsdXJyZWQuIE5lZWRzIHRvIGJlIGFuXG4gICAqIGFycm93IGZ1bmN0aW9uIGluIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBjb250ZXh0LlxuICAgKi9cbiAgcHJpdmF0ZSBfd2luZG93Qmx1ckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gSWYgdGhlIHVzZXIgYmx1cnJlZCB0aGUgd2luZG93IHdoaWxlIHRoZSBjb2xvciBwaWNrZXIgaXMgZm9jdXNlZCwgaXQgbWVhbnMgdGhhdCBpdCdsbCBiZVxuICAgIC8vIHJlZm9jdXNlZCB3aGVuIHRoZXkgY29tZSBiYWNrLiBJbiB0aGlzIGNhc2Ugd2Ugd2FudCB0byBza2lwIHRoZSBmaXJzdCBmb2N1cyBldmVudCwgaWYgdGhlXG4gICAgLy8gcGFuZSB3YXMgY2xvc2VkLCBpbiBvcmRlciB0byBhdm9pZCByZW9wZW5pbmcgaXQgdW5pbnRlbnRpb25hbGx5LlxuICAgIHRoaXMuX2Nhbk9wZW5Pbk5leHRGb2N1cyA9XG4gICAgICB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgfHwgdGhpcy5fcGFuZWxPcGVuO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2ZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF96b25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIF9mb3JtRmllbGQ6IE1hdEZvcm1GaWVsZCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIF9mb2N1c01vbml0b3IubW9uaXRvcihfZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICBpZiAodGhpcy5fZm9jdXNlZCAmJiAhb3JpZ2luKSB7XG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5lcnJvclN0YXRlID0gdGhpcy5uZ0NvbnRyb2wuaW52YWxpZCAmJiB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX3dpbmRvd0JsdXJIYW5kbGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3N1cHBvcnRzU2hhZG93RG9tKCkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3Qgcm9vdE5vZGUgPSBlbGVtZW50LmdldFJvb3ROb2RlID8gZWxlbWVudC5nZXRSb290Tm9kZSgpIDogbnVsbDtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIHRha2UgdGhlIGBTaGFkb3dSb290YCBvZmYgb2YgYHdpbmRvd2AsIGJlY2F1c2UgdGhlIGJ1aWx0LWluIHR5cGVzIGFyZVxuICAgICAgICAvLyBpbmNvcnJlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI3OTI5LlxuICAgICAgICB0aGlzLl9pc0luc2lkZVNoYWRvd1Jvb3QgPSByb290Tm9kZSBpbnN0YW5jZW9mICh3aW5kb3cgYXMgYW55KS5TaGFkb3dSb290O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICB9XG5cbiAgLyoqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTWF0Rm9ybUZpZWxkQ29udHJvbC4gKi9cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FyaWFEZXNjcmliZWRieSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICAvKiogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBNYXRGb3JtRmllbGRDb250cm9sLiAqL1xuICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgIHRoaXMub3BlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yLXBpY2tlcidzIHZhbHVlLiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgICogcmVxdWlyZWQgdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIHRvIGJlIHdyaXR0ZW4gdG8gdGhlIG1vZGVsLlxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIHdoZW4gdGhlIGNvbG9yLXBpY2tlcidzIHZhbHVlXG4gICAqIGNoYW5nZXMgZnJvbSB1c2VyIGlucHV0LiBQYXJ0IG9mIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgICogcmVxdWlyZWQgdG8gaW50ZWdyYXRlIHdpdGggQW5ndWxhcidzIGNvcmUgZm9ybXMgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0gZm4gQ2FsbGJhY2sgdG8gYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSBjb2xvciBwaWNrZXIgaXMgYmx1cnJlZFxuICAgKiBieSB0aGUgdXNlci4gUGFydCBvZiB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIHJlcXVpcmVkXG4gICAqIHRvIGludGVncmF0ZSB3aXRoIEFuZ3VsYXIncyBjb3JlIGZvcm1zIEFQSS5cbiAgICpcbiAgICogQHBhcmFtIGZuIENhbGxiYWNrIHRvIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gdG91Y2hlZC5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKiBPcGVuIHBhbmVsIHdpdGggaW5wdXQgZm9jdXNpbiBldmVudC4gKi9cbiAgX2hhbmRsZUZvY3VzKCkge1xuICAgIHRoaXMudHJpZ2dlci5vcGVuTWVudSgpO1xuXG4gICAgdGhpcy5fY2xvc2luZ0FjdGlvbnNTdWJzY3JpcHRpb24gPSBtZXJnZSh0aGlzLl9nZXRPdXRzaWRlQ2xpY2tTdHJlYW0oKSlcbiAgICAgIC5waXBlKClcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLnRyaWdnZXIuY2xvc2VNZW51KCk7XG4gICAgICAgIHRoaXMuX2Nsb3NpbmdBY3Rpb25zU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiBPcGVucyB0aGUgb3ZlcmxheSBwYW5lbC4gKi9cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wYW5lbE9wZW4gPSB0cnVlO1xuICB9XG5cbiAgLyoqIENsb3NlcyB0aGUgb3ZlcmxheSBwYW5lbCBhbmQgZm9jdXNlcyB0aGUgaG9zdCBlbGVtZW50LiAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLl9wYW5lbE9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBjYWxsYmFjayBvZiBjb2xvciBjaGFuZ2VkLiAqL1xuICBvbkNvbG9yQ2hhbmdlKG1vZGVsOiB7IGNvbG9yOiBDb2xvcjsgJGV2ZW50OiBNb3VzZUV2ZW50IH0pIHtcbiAgICB0aGlzLnZhbHVlID0gbW9kZWwuY29sb3IuaGV4O1xuICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdCh7IGNvbG9yOiBtb2RlbC5jb2xvciwgJGV2ZW50OiBtb2RlbC4kZXZlbnQgfSk7XG4gIH1cblxuICAvKiogU3RyZWFtIG9mIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBjb2xvciBwaWNrZXIgcGFuZWwuICovXG4gIHByaXZhdGUgX2dldE91dHNpZGVDbGlja1N0cmVhbSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ2NsaWNrJykgYXMgT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PixcbiAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoZW5kJykgYXMgT2JzZXJ2YWJsZTxUb3VjaEV2ZW50PlxuICAgICkucGlwZShcbiAgICAgIGZpbHRlcihldmVudCA9PiB7XG4gICAgICAgIC8vIElmIHdlJ3JlIGluIHRoZSBTaGFkb3cgRE9NLCB0aGUgZXZlbnQgdGFyZ2V0IHdpbGwgYmUgdGhlIHNoYWRvdyByb290LCBzbyB3ZSBoYXZlIHRvXG4gICAgICAgIC8vIGZhbGwgYmFjayB0byBjaGVjayB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgcGF0aCBvZiB0aGUgY2xpY2sgZXZlbnQuXG4gICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gKHRoaXMuX2lzSW5zaWRlU2hhZG93Um9vdCAmJiBldmVudC5jb21wb3NlZFBhdGhcbiAgICAgICAgICA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdXG4gICAgICAgICAgOiBldmVudC50YXJnZXQpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBmb3JtRmllbGQgPSB0aGlzLl9mb3JtRmllbGQgPyB0aGlzLl9mb3JtRmllbGQuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBjbGlja1RhcmdldCAhPT0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmXG4gICAgICAgICAgKCFmb3JtRmllbGQgfHwgIWZvcm1GaWVsZC5jb250YWlucyhjbGlja1RhcmdldCkpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==