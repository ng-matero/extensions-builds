import { OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
export declare class MtxAlertComponent implements OnInit {
    private _changeDetectorRef;
    /**
     * Alert types
     * `default`, `info`, `success`, `warning` and `danger`
     */
    type: string;
    /** Whether alert visible */
    isOpen: boolean;
    /** Whether displays an inline "Close" button */
    dismissible: boolean;
    /** Text color */
    color: string;
    /** Material elevation */
    elevation: number;
    /** This event fires when alert closed, $event is an instance of Alert component */
    closed: EventEmitter<MtxAlertComponent>;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    handleClose(): void;
}
