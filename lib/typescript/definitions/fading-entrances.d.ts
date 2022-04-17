import { MotifiableDefinition } from '../types';
declare global {
    interface Motifiables {
        fadeIn: MotifiableDefinition;
        fadeInDown: MotifiableDefinition;
        fadeInUp: MotifiableDefinition;
        fadeInLeft: MotifiableDefinition;
        fadeInRight: MotifiableDefinition;
        fadeInDownBig: MotifiableDefinition;
        fadeInUpBig: MotifiableDefinition;
        fadeInLeftBig: MotifiableDefinition;
        fadeInRightBig: MotifiableDefinition;
    }
}
export declare const fadeIn: MotifiableDefinition;
export declare const fadeInDown: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInUp: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInLeft: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInRight: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInDownBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInUpBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInLeftBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const fadeInRightBig: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
