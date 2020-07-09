import { ElementRef } from '@angular/core';
import { MtxSplitArea, MtxSplitPoint, MtxSplitAreaSnapshot, MtxSplitSideAbsorptionCapacity, MtxSplitAreaAbsorptionCapacity } from './interface';
export declare function getPointFromEvent(event: MouseEvent | TouchEvent): MtxSplitPoint;
export declare function getElementPixelSize(elRef: ElementRef, direction: 'horizontal' | 'vertical'): number;
export declare function getInputBoolean(v: any): boolean;
export declare function getInputPositiveNumber<T>(v: any, defaultValue: T): number | T;
export declare function isUserSizesValid(unit: 'percent' | 'pixel', sizes: Array<number | null>): boolean;
export declare function getAreaMinSize(a: MtxSplitArea): null | number;
export declare function getAreaMaxSize(a: MtxSplitArea): null | number;
export declare function getGutterSideAbsorptionCapacity(unit: 'percent' | 'pixel', sideAreas: Array<MtxSplitAreaSnapshot>, pixels: number, allAreasSizePixel: number): MtxSplitSideAbsorptionCapacity;
export declare function updateAreaSize(unit: 'percent' | 'pixel', item: MtxSplitAreaAbsorptionCapacity): void;
