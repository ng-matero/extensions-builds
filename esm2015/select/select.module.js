/**
 * @fileoverview added by tsickle
 * Generated from: select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MtxSelectComponent } from './select.component';
import { MtxSelectFooterTemplateDirective, MtxSelectHeaderTemplateDirective, MtxSelectLabelTemplateDirective, MtxSelectLoadingSpinnerTemplateDirective, MtxSelectLoadingTextTemplateDirective, MtxSelectMultiLabelTemplateDirective, MtxSelectNotFoundTemplateDirective, MtxSelectOptgroupTemplateDirective, MtxSelectOptionTemplateDirective, MtxSelectTagTemplateDirective, MtxSelectTypeToSearchTemplateDirective } from './templates.directive';
export class MtxSelectModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1tYXRlcm8vZXh0ZW5zaW9ucy9zZWxlY3QvIiwic291cmNlcyI6WyJzZWxlY3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2hDLGdDQUFnQyxFQUNoQywrQkFBK0IsRUFDL0Isd0NBQXdDLEVBQ3hDLHFDQUFxQyxFQUNyQyxvQ0FBb0MsRUFDcEMsa0NBQWtDLEVBQ2xDLGtDQUFrQyxFQUNsQyxnQ0FBZ0MsRUFDaEMsNkJBQTZCLEVBQzdCLHNDQUFzQyxFQUN2QyxNQUFNLHVCQUF1QixDQUFDO0FBaUMvQixNQUFNLE9BQU8sZUFBZTs7O1lBL0IzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLENBQUM7Z0JBQ3pFLE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLGtDQUFrQztvQkFDbEMsZ0NBQWdDO29CQUNoQywrQkFBK0I7b0JBQy9CLG9DQUFvQztvQkFDcEMsZ0NBQWdDO29CQUNoQyxnQ0FBZ0M7b0JBQ2hDLGtDQUFrQztvQkFDbEMsc0NBQXNDO29CQUN0QyxxQ0FBcUM7b0JBQ3JDLDZCQUE2QjtvQkFDN0Isd0NBQXdDO2lCQUN6QztnQkFDRCxZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQixrQ0FBa0M7b0JBQ2xDLGdDQUFnQztvQkFDaEMsK0JBQStCO29CQUMvQixvQ0FBb0M7b0JBQ3BDLGdDQUFnQztvQkFDaEMsZ0NBQWdDO29CQUNoQyxrQ0FBa0M7b0JBQ2xDLHNDQUFzQztvQkFDdEMscUNBQXFDO29CQUNyQyw2QkFBNkI7b0JBQzdCLHdDQUF3QztpQkFDekM7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuXG5pbXBvcnQgeyBNdHhTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgTXR4U2VsZWN0Rm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RMb2FkaW5nVGV4dFRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdE5vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdE9wdGdyb3VwVGVtcGxhdGVEaXJlY3RpdmUsXG4gIE10eFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICBNdHhTZWxlY3RUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgTXR4U2VsZWN0VHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmVcbn0gZnJvbSAnLi90ZW1wbGF0ZXMuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIE5nU2VsZWN0TW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIE10eFNlbGVjdENvbXBvbmVudCxcbiAgICBNdHhTZWxlY3RPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdExhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTXR4U2VsZWN0TXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdE5vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTXR4U2VsZWN0VHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTXR4U2VsZWN0TG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBNdHhTZWxlY3RUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBNdHhTZWxlY3RMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE10eFNlbGVjdENvbXBvbmVudCxcbiAgICBNdHhTZWxlY3RPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdE9wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdExhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTXR4U2VsZWN0TXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdEhlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdEZvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE10eFNlbGVjdE5vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTXR4U2VsZWN0VHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTXR4U2VsZWN0TG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBNdHhTZWxlY3RUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBNdHhTZWxlY3RMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNdHhTZWxlY3RNb2R1bGUgeyB9XG4iXX0=