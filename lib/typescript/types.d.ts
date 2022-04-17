import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { MotiAnimationProp, MotiFromProp, StyleValueWithReplacedTransforms } from 'moti';
declare type KeyframePosition = number | 'from' | 'to';
export declare type AnimateType = ViewStyle & ImageStyle & TextStyle;
export declare type StyleValues = StyleValueWithReplacedTransforms<AnimateType>;
export declare type MotifiableDefinition = Partial<Record<KeyframePosition, StyleValues> & {
    easing: Animated.EasingFunction;
    style: ViewStyle;
}>;
export declare type MotifiableKey = keyof Motifaibles;
export interface MotifiableConfig {
    name: MotifiableKey;
    duration?: number;
    delay?: number;
    repeat?: number;
}
export interface MotifiableProps {
    from: NonNullable<MotiFromProp<ViewStyle | TextStyle | ImageStyle>>;
    animate: NonNullable<MotiAnimationProp<ViewStyle | TextStyle | ImageStyle>>;
    transition: {
        easing?: Animated.EasingFunction;
        repeat?: number;
    };
    style?: ViewStyle | TextStyle | ImageStyle;
}
export declare type MotifiableBuilder = (config?: Omit<MotifiableConfig, 'name'>) => MotifiableProps;
export {};
