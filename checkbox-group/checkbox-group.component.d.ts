import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MtxCheckboxGroupOption } from './checkbox-group.interface';
export declare class MtxCheckboxGroupComponent implements OnInit, ControlValueAccessor {
    private _changeDetectorRef;
    selectAllLabel: string;
    showSelectAll: boolean;
    change: EventEmitter<{
        model: MtxCheckboxGroupOption[];
        index: number;
    }>;
    selectAll: boolean;
    selectAllIndeterminate: boolean;
    options: MtxCheckboxGroupOption[];
    onChange: (value: MtxCheckboxGroupOption[]) => void;
    onTouched: () => void;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    writeValue(value: MtxCheckboxGroupOption[]): void;
    registerOnChange(fn: (value: MtxCheckboxGroupOption[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    updateSingleChecked(e?: boolean, index?: number): void;
    updateAllChecked(e?: boolean, index?: number): void;
}
