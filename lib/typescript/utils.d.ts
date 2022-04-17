import { MotifiableDefinition, StyleValues } from './types';
export declare const compareNumbers: (a: number, b: number) => number;
export declare const notNull: (value: unknown) => boolean;
export declare const parsePosition: (value: string) => number | null;
export declare const getKeyframeStyles: (definition: MotifiableDefinition) => (position: number) => StyleValues;
export declare const getKeyframeStylesProperties: (keyframeStyles: StyleValues) => Array<keyof StyleValues>;
export declare const getKeyframesStylesProperties: (keyframesStyles: StyleValues[]) => Array<keyof StyleValues>;
