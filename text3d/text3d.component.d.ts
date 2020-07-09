import { OnInit, TemplateRef } from '@angular/core';
export declare class MtxText3dComponent implements OnInit {
    template: TemplateRef<any>;
    text: string;
    num: number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    arr: any[];
    get transform(): string;
    constructor();
    ngOnInit(): void;
}
