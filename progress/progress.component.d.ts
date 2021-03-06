import { OnInit } from '@angular/core';
export declare class MtxProgressComponent implements OnInit {
    /**
     * Progress types
     * `default`, `info`, `success`, `warning` and `danger`
     */
    type: string;
    /** The progress value */
    value: number;
    /** The progress height */
    height: string;
    /** The progress text color */
    color: string;
    /** The progress bar color */
    foreground: string;
    /** The progress track color */
    background: string;
    /** Whether applies striped class */
    striped: boolean;
    /** Whether applies animated class */
    animate: boolean;
    constructor();
    ngOnInit(): void;
}
