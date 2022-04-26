import { MotifiableDefinition, StyleValues } from '../definitions';
export declare const getStyles: (definition: MotifiableDefinition) => (position: number) => StyleValues;
export declare const getStylesProperties: (keyframesStyles: StyleValues[]) => Array<keyof StyleValues>;
export declare const getSequenceItems: (definition: MotifiableDefinition, keyframeIndex: number, keyFrames: number[]) => Partial<Record<keyof StyleValues, Record<string, any>>>;
