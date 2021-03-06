(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ng-matero/extensions/alert'), require('@ng-matero/extensions/checkbox-group'), require('@ng-matero/extensions/color-picker'), require('@ng-matero/extensions/data-grid'), require('@ng-matero/extensions/dialog'), require('@ng-matero/extensions/progress'), require('@ng-matero/extensions/select'), require('@ng-matero/extensions/split-pane'), require('@ng-matero/extensions/text3d'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@ng-matero/extensions', ['exports', '@ng-matero/extensions/alert', '@ng-matero/extensions/checkbox-group', '@ng-matero/extensions/color-picker', '@ng-matero/extensions/data-grid', '@ng-matero/extensions/dialog', '@ng-matero/extensions/progress', '@ng-matero/extensions/select', '@ng-matero/extensions/split-pane', '@ng-matero/extensions/text3d', '@angular/core'], factory) :
    (global = global || self, factory((global['ng-matero'] = global['ng-matero'] || {}, global['ng-matero'].extensions = {}), global['ng-matero'].extensions.alert, global['ng-matero'].extensions['checkbox-group'], global['ng-matero'].extensions['color-picker'], global['ng-matero'].extensions['data-grid'], global['ng-matero'].extensions.dialog, global['ng-matero'].extensions.progress, global['ng-matero'].extensions.select, global['ng-matero'].extensions['split-pane'], global['ng-matero'].extensions.text3d, global.ng.core));
}(this, (function (exports, alert, checkboxGroup, colorPicker, dataGrid, dialog, progress, select, splitPane, text3d, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: extensions.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialExtensionsModule = /** @class */ (function () {
        function MaterialExtensionsModule() {
        }
        MaterialExtensionsModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [
                            alert.MtxAlertModule,
                            checkboxGroup.MtxCheckboxGroupModule,
                            colorPicker.MtxColorPickerModule,
                            dataGrid.MtxGridModule,
                            dialog.MtxDialogModule,
                            progress.MtxProgressModule,
                            select.MtxSelectModule,
                            text3d.MtxText3dModule,
                            splitPane.MtxSplitModule
                        ],
                        declarations: [],
                    },] }
        ];
        return MaterialExtensionsModule;
    }());

    Object.defineProperty(exports, 'MtxAlertComponent', {
        enumerable: true,
        get: function () {
            return alert.MtxAlertComponent;
        }
    });
    Object.defineProperty(exports, 'MtxAlertModule', {
        enumerable: true,
        get: function () {
            return alert.MtxAlertModule;
        }
    });
    Object.defineProperty(exports, 'MtxCheckboxGroupComponent', {
        enumerable: true,
        get: function () {
            return checkboxGroup.MtxCheckboxGroupComponent;
        }
    });
    Object.defineProperty(exports, 'MtxCheckboxGroupModule', {
        enumerable: true,
        get: function () {
            return checkboxGroup.MtxCheckboxGroupModule;
        }
    });
    Object.defineProperty(exports, 'MtxColorPickerComponent', {
        enumerable: true,
        get: function () {
            return colorPicker.MtxColorPickerComponent;
        }
    });
    Object.defineProperty(exports, 'MtxColorPickerModule', {
        enumerable: true,
        get: function () {
            return colorPicker.MtxColorPickerModule;
        }
    });
    Object.defineProperty(exports, 'MtxGridCellComponent', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridCellComponent;
        }
    });
    Object.defineProperty(exports, 'MtxGridCellSelectionDirective', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridCellSelectionDirective;
        }
    });
    Object.defineProperty(exports, 'MtxGridColumnMenuComponent', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridColumnMenuComponent;
        }
    });
    Object.defineProperty(exports, 'MtxGridComponent', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridComponent;
        }
    });
    Object.defineProperty(exports, 'MtxGridExpansionToggleDirective', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridExpansionToggleDirective;
        }
    });
    Object.defineProperty(exports, 'MtxGridModule', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridModule;
        }
    });
    Object.defineProperty(exports, 'MtxGridService', {
        enumerable: true,
        get: function () {
            return dataGrid.MtxGridService;
        }
    });
    Object.defineProperty(exports, 'MtxDialog', {
        enumerable: true,
        get: function () {
            return dialog.MtxDialog;
        }
    });
    Object.defineProperty(exports, 'MtxDialogComponent', {
        enumerable: true,
        get: function () {
            return dialog.MtxDialogComponent;
        }
    });
    Object.defineProperty(exports, 'MtxDialogModule', {
        enumerable: true,
        get: function () {
            return dialog.MtxDialogModule;
        }
    });
    Object.defineProperty(exports, 'MtxProgressComponent', {
        enumerable: true,
        get: function () {
            return progress.MtxProgressComponent;
        }
    });
    Object.defineProperty(exports, 'MtxProgressModule', {
        enumerable: true,
        get: function () {
            return progress.MtxProgressModule;
        }
    });
    Object.defineProperty(exports, 'MtxSelectComponent', {
        enumerable: true,
        get: function () {
            return select.MtxSelectComponent;
        }
    });
    Object.defineProperty(exports, 'MtxSelectModule', {
        enumerable: true,
        get: function () {
            return select.MtxSelectModule;
        }
    });
    Object.defineProperty(exports, 'ɵa', {
        enumerable: true,
        get: function () {
            return select.ɵa;
        }
    });
    Object.defineProperty(exports, 'ɵb', {
        enumerable: true,
        get: function () {
            return select.ɵb;
        }
    });
    Object.defineProperty(exports, 'ɵc', {
        enumerable: true,
        get: function () {
            return select.ɵc;
        }
    });
    Object.defineProperty(exports, 'ɵd', {
        enumerable: true,
        get: function () {
            return select.ɵd;
        }
    });
    Object.defineProperty(exports, 'ɵe', {
        enumerable: true,
        get: function () {
            return select.ɵe;
        }
    });
    Object.defineProperty(exports, 'ɵf', {
        enumerable: true,
        get: function () {
            return select.ɵf;
        }
    });
    Object.defineProperty(exports, 'ɵg', {
        enumerable: true,
        get: function () {
            return select.ɵg;
        }
    });
    Object.defineProperty(exports, 'ɵh', {
        enumerable: true,
        get: function () {
            return select.ɵh;
        }
    });
    Object.defineProperty(exports, 'ɵi', {
        enumerable: true,
        get: function () {
            return select.ɵi;
        }
    });
    Object.defineProperty(exports, 'ɵj', {
        enumerable: true,
        get: function () {
            return select.ɵj;
        }
    });
    Object.defineProperty(exports, 'ɵk', {
        enumerable: true,
        get: function () {
            return select.ɵk;
        }
    });
    Object.defineProperty(exports, 'MtxSplitComponent', {
        enumerable: true,
        get: function () {
            return splitPane.MtxSplitComponent;
        }
    });
    Object.defineProperty(exports, 'MtxSplitModule', {
        enumerable: true,
        get: function () {
            return splitPane.MtxSplitModule;
        }
    });
    Object.defineProperty(exports, 'MtxSplitPaneDirective', {
        enumerable: true,
        get: function () {
            return splitPane.MtxSplitPaneDirective;
        }
    });
    Object.defineProperty(exports, 'getAreaMaxSize', {
        enumerable: true,
        get: function () {
            return splitPane.getAreaMaxSize;
        }
    });
    Object.defineProperty(exports, 'getAreaMinSize', {
        enumerable: true,
        get: function () {
            return splitPane.getAreaMinSize;
        }
    });
    Object.defineProperty(exports, 'getElementPixelSize', {
        enumerable: true,
        get: function () {
            return splitPane.getElementPixelSize;
        }
    });
    Object.defineProperty(exports, 'getGutterSideAbsorptionCapacity', {
        enumerable: true,
        get: function () {
            return splitPane.getGutterSideAbsorptionCapacity;
        }
    });
    Object.defineProperty(exports, 'getInputBoolean', {
        enumerable: true,
        get: function () {
            return splitPane.getInputBoolean;
        }
    });
    Object.defineProperty(exports, 'getInputPositiveNumber', {
        enumerable: true,
        get: function () {
            return splitPane.getInputPositiveNumber;
        }
    });
    Object.defineProperty(exports, 'getPointFromEvent', {
        enumerable: true,
        get: function () {
            return splitPane.getPointFromEvent;
        }
    });
    Object.defineProperty(exports, 'isUserSizesValid', {
        enumerable: true,
        get: function () {
            return splitPane.isUserSizesValid;
        }
    });
    Object.defineProperty(exports, 'updateAreaSize', {
        enumerable: true,
        get: function () {
            return splitPane.updateAreaSize;
        }
    });
    Object.defineProperty(exports, 'MtxText3dComponent', {
        enumerable: true,
        get: function () {
            return text3d.MtxText3dComponent;
        }
    });
    Object.defineProperty(exports, 'MtxText3dModule', {
        enumerable: true,
        get: function () {
            return text3d.MtxText3dModule;
        }
    });
    exports.MaterialExtensionsModule = MaterialExtensionsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=extensions.umd.js.map
