import { OnInit } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MtxGridColumn, MtxGridColumnButton } from './grid.interface';
import { MtxGridService } from './grid.service';
import PhotoViewer from 'photoviewer';
export declare class MtxGridCellComponent implements OnInit {
    private _dialog;
    private _dataGridSrv;
    /** Row data */
    rowData: {};
    /** Column definition */
    colDef: MtxGridColumn;
    colValue: string;
    viewer: PhotoViewer;
    constructor(_dialog: MtxDialog, _dataGridSrv: MtxGridService);
    ngOnInit(): void;
    confirm(event: MouseEvent, title: string, fn?: (p: any) => void, data?: any): void;
    handleOptionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: any): void;
    /** Preview the image */
    preview(urlStr: string, multi?: boolean): void;
}
