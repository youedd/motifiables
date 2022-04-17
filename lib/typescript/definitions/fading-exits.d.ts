import { MotifiableDefinition } from '../types';
declare global {
    interface Motifiables {
        fadeOut: MotifiableDefinition;
        fadeOutDown: MotifiableDefinition;
        fadeOutUp: MotifiableDefinition;
        fadeOutLeft: MotifiableDefinition;
        fadeOutRight: MotifiableDefinition;
        fadeOutDownBig: MotifiableDefinition;
        fadeOutUpBig: MotifiableDefinition;
        fadeOutLeftBig: MotifiableDefinition;
        fadeOutRightBig: MotifiableDefinition;
    }
}
export declare const fadeOut: MotifiableDefinition;
export declare const fadeOutDown: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutUp: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutLeft: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutRight: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutDownBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutUpBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutLeftBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeOutRightBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
