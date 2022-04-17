import { MotifiableDefinition } from '../types';
declare global {
    interface Motifiables {
        slideOutDown: MotifiableDefinition;
        slideOutUp: MotifiableDefinition;
        slideOutLeft: MotifiableDefinition;
        slideOutRight: MotifiableDefinition;
    }
}
export declare const slideOutDown: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const slideOutUp: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const slideOutLeft: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
export declare const slideOutRight: Partial<Record<number | "from" | "to", import("../types").StyleValues> & {
    easing: (value: number) => number;
    style: import("react-native").ViewStyle;
}>;
