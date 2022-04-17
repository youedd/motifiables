import { MotifiableDefinition } from '../types';
declare global {
    interface Motifiables {
        zoomOut: MotifiableDefinition;
        zoomOutDown: MotifiableDefinition;
        zoomOutUp: MotifiableDefinition;
        zoomOutLeft: MotifiableDefinition;
        zoomOutRight: MotifiableDefinition;
    }
}
export declare const zoomOut: MotifiableDefinition;
export declare const zoomOutDown: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const zoomOutUp: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const zoomOutLeft: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const zoomOutRight: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
