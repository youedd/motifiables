import { MotifiableDefinition } from '../types';
declare global {
    interface Motifiables {
        zoomIn: MotifiableDefinition;
        zoomInDown: MotifiableDefinition;
        zoomInUp: MotifiableDefinition;
        zoomInLeft: MotifiableDefinition;
        zoomInRight: MotifiableDefinition;
    }
}
export declare const zoomIn: MotifiableDefinition;
export declare const zoomInDown: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const zoomInUp: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const zoomInLeft: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const zoomInRight: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
