import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * Generated from: dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxDialogComponent {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    onClick(fn) {
        fn.call(this);
        this.onClose();
    }
    /**
     * @return {?}
     */
    onClose() {
        this.dialogRef.close();
    }
}
MtxDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'mtx-dialog',
                exportAs: 'mtxDialog',
                template: "<h1 class=\"mtx-dialog-title\" *ngIf=\"data.title\">{{data.title}}</h1>\n<div class=\"mtx-dialog-content\" *ngIf=\"data.description\">\n  <p>{{data.description}}</p>\n</div>\n<div class=\"mtx-dialog-actions\">\n  <button *ngFor=\"let btn of data.buttons\"\n          mat-button\n          [color]=\"btn.type\"\n          (click)=\"onClick(btn.onClick)\">\n    {{btn.text}}\n  </button>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mtx-dialog-title{display:block;margin:0 0 20px;font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mtx-dialog-content{display:block;max-height:65vh;padding:0 24px;margin:0 -24px;overflow:auto;-webkit-overflow-scrolling:touch}.mtx-dialog-actions{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;min-height:52px;padding:8px 0;margin-bottom:-24px}"]
            }] }
];
/** @nocollapse */
MtxDialogComponent.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    MtxDialogComponent.prototype.dialogRef;
    /** @type {?} */
    MtxDialogComponent.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * Generated from: dialog.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => { }, ɵ1 = /**
 * @return {?}
 */
() => { };
/** @type {?} */
const defaults = {
    title: '',
    description: '',
    buttons: [
        {
            type: '',
            text: 'CLOSE',
            onClick: (ɵ0),
        },
        {
            type: 'warn',
            text: 'OK',
            onClick: (ɵ1),
        },
    ],
    width: '300px',
};
class MtxDialog {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?=} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    originalOpen(componentOrTemplateRef = MtxDialogComponent, config) {
        return this.dialog.open(componentOrTemplateRef, config);
    }
    /**
     * @param {?} config
     * @param {?=} componentOrTemplateRef
     * @return {?}
     */
    open(config, componentOrTemplateRef = MtxDialogComponent) {
        /** @type {?} */
        const data = Object.assign({}, defaults, config);
        return this.dialog.open(componentOrTemplateRef, Object.assign(Object.assign({}, data), { data }));
    }
    /**
     * @param {?} title
     * @param {?=} onOk
     * @return {?}
     */
    alert(title, onOk = (/**
     * @return {?}
     */
    () => { })) {
        this.open({
            title,
            buttons: [
                {
                    type: 'warn',
                    text: 'OK',
                    onClick: (/**
                     * @return {?}
                     */
                    () => onOk()),
                },
            ],
            disableClose: true,
        });
    }
    /**
     * @param {?} title
     * @param {?=} onOk
     * @param {?=} onClose
     * @return {?}
     */
    confirm(title, onOk = (/**
     * @return {?}
     */
    () => { }), onClose = (/**
     * @return {?}
     */
    () => { })) {
        this.open({
            title,
            buttons: [
                {
                    type: '',
                    text: 'CLOSE',
                    onClick: (/**
                     * @return {?}
                     */
                    () => onClose()),
                },
                {
                    type: 'warn',
                    text: 'OK',
                    onClick: (/**
                     * @return {?}
                     */
                    () => onOk()),
                },
            ],
            disableClose: true,
        });
    }
}
MtxDialog.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MtxDialog.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    MtxDialog.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * Generated from: dialog.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MtxDialogModule {
}
MtxDialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MatButtonModule, MatDialogModule],
                exports: [MtxDialogComponent],
                declarations: [MtxDialogComponent],
                providers: [MtxDialog],
                entryComponents: [MtxDialogComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: dialog.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MtxDialogData() { }
if (false) {
    /** @type {?|undefined} */
    MtxDialogData.prototype.title;
    /** @type {?|undefined} */
    MtxDialogData.prototype.description;
    /** @type {?|undefined} */
    MtxDialogData.prototype.buttons;
}
/**
 * @record
 */
function MtxDialogBtns() { }
if (false) {
    /** @type {?|undefined} */
    MtxDialogBtns.prototype.type;
    /** @type {?} */
    MtxDialogBtns.prototype.text;
    /** @type {?} */
    MtxDialogBtns.prototype.onClick;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mtxDialog.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MtxDialog, MtxDialogComponent, MtxDialogModule };
//# sourceMappingURL=mtxDialog.js.map
