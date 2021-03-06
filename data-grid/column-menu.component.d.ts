import { OnInit, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class MtxGridColumnMenuComponent implements OnInit {
    columns: any[];
    selectable: boolean;
    selectedType: 'show' | 'hide';
    sortable: boolean;
    dndSortable: boolean;
    get buttonText(): string;
    set buttonText(value: string);
    private _buttonText;
    buttonType: 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab' | '';
    buttonColor: 'primary' | 'accent' | 'warn' | '';
    buttonClass: string;
    buttonIcon: string;
    selectionChange: EventEmitter<string[]>;
    sortChange: EventEmitter<string[]>;
    get columnFields(): string[];
    constructor();
    ngOnInit(): void;
    handleDrop(event: CdkDragDrop<string[]>): void;
    handleSelect(e: any): void;
}
