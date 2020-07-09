import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MtxDialogData } from './dialog.config';
export declare class MtxDialogComponent implements OnInit {
    dialogRef: MatDialogRef<MtxDialogComponent>;
    data: MtxDialogData;
    constructor(dialogRef: MatDialogRef<MtxDialogComponent>, data: MtxDialogData);
    ngOnInit(): void;
    onClick(fn: () => void): void;
    onClose(): void;
}
