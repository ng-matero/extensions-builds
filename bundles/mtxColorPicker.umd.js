(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/material/menu'), require('@angular/material/form-field'), require('@angular/material/input'), require('ngx-color/chrome'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ng-matero/extensions/color-picker', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/material/menu', '@angular/material/form-field', '@angular/material/input', 'ngx-color/chrome', '@angular/cdk/a11y', '@angular/cdk/coercion', '@angular/cdk/platform', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ng-matero'] = global['ng-matero'] || {}, global['ng-matero'].extensions = global['ng-matero'].extensions || {}, global['ng-matero'].extensions['color-picker'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.material.menu, global.ng.material.formField, global.ng.material.input, global['ngx-color-chrome'], global.ng.cdk.a11y, global.ng.cdk.coercion, global.ng.cdk.platform, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, forms, menu, formField, input, chrome, a11y, coercion, platform, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: color-picker.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.stateChanges = new rxjs.Subject();
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
            this.colorChange = new core.EventEmitter();
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
                this._required = coercion.coerceBooleanProperty(value);
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
                this._disabled = coercion.coerceBooleanProperty(value);
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
                if (platform._supportsShadowDom()) {
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
            this._closingActionsSubscription = rxjs.merge(this._getOutsideClickStream())
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
            return rxjs.merge((/** @type {?} */ (rxjs.fromEvent(this._document, 'click'))), (/** @type {?} */ (rxjs.fromEvent(this._document, 'touchend')))).pipe(operators.filter((/**
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
            { type: core.Component, args: [{
                        selector: 'mtx-color-picker',
                        exportAs: 'mtxColorPicker',
                        template: "<input matInput\n       [(ngModel)]=\"value\"\n       [placeholder]=\"placeholder\"\n       [disabled]=\"disabled\"\n       (focusin)=\"_handleFocus()\"\n       autocomplete=\"off\">\n\n<div #colorPickerTrigger=\"matMenuTrigger\"\n     [matMenuTriggerFor]=\"colorPickerPopover\"\n     (menuOpened)=\"open()\"\n     (menuClosed)=\"close()\">\n</div>\n\n<mat-menu #colorPickerPopover=\"matMenu\" class=\"mtx-color-picker-panel\" [hasBackdrop]=\"false\">\n  <div class=\"mtx-color-picker\"\n       (click)=\"$event.stopPropagation()\"\n       (keydown)=\"$event.stopPropagation()\">\n    <color-chrome [color]=\"value\" (onChangeComplete)=\"onColorChange($event)\"></color-chrome>\n  </div>\n</mat-menu>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{ provide: formField.MatFormFieldControl, useExisting: MtxColorPickerComponent }],
                        styles: [".mtx-color-picker-panel .mat-menu-content:not(:empty){padding:0}.mtx-color-picker-panel .mtx-color-picker{padding:8px}.mtx-color-picker-panel .mtx-color-picker .chrome-picker{box-shadow:none;border-radius:0}.mtx-color-picker-panel .mtx-color-picker .chrome-picker .saturation{border-radius:0}"]
                    }] }
        ];
        /** @nocollapse */
        MtxColorPickerComponent.ctorParameters = function () { return [
            { type: a11y.FocusMonitor },
            { type: core.ElementRef },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone },
            { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
            { type: formField.MatFormField, decorators: [{ type: core.Optional }, { type: core.Host }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
        ]; };
        MtxColorPickerComponent.propDecorators = {
            value: [{ type: core.Input }],
            id: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            required: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            colorChange: [{ type: core.Output }],
            trigger: [{ type: core.ViewChild, args: [menu.MatMenuTrigger, { static: true },] }]
        };
        return MtxColorPickerComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * Generated from: color-picker.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MtxColorPickerModule = /** @class */ (function () {
        function MtxColorPickerModule() {
        }
        MtxColorPickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            menu.MatMenuModule,
                            formField.MatFormFieldModule,
                            input.MatInputModule,
                            chrome.ColorChromeModule,
                        ],
                        exports: [MtxColorPickerComponent],
                        declarations: [MtxColorPickerComponent],
                    },] }
        ];
        return MtxColorPickerModule;
    }());

    exports.MtxColorPickerComponent = MtxColorPickerComponent;
    exports.MtxColorPickerModule = MtxColorPickerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mtxColorPicker.umd.js.map
