import { StyleValueWithReplacedTransforms } from 'moti';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
declare type KeyframePosition = number | 'from' | 'to';
declare type AnimateType = ViewStyle & ImageStyle & TextStyle;
export declare type StyleValues = StyleValueWithReplacedTransforms<AnimateType>;
export declare type MotifiableDefinition = Partial<Record<KeyframePosition, StyleValues> & {
    easing: Animated.EasingFunction;
}>;
export declare type MotifiableKey = keyof Motifiables.MotifiableDefinitions;
declare global {
    namespace Motifiables {
        interface MotifiableDefinitions {
            bounce: MotifiableDefinition;
            flash: MotifiableDefinition;
            jello: MotifiableDefinition;
            pulse: MotifiableDefinition;
            rotate: MotifiableDefinition;
            shake: MotifiableDefinition;
            swing: MotifiableDefinition;
            rubberBand: MotifiableDefinition;
            tada: MotifiableDefinition;
            wobble: MotifiableDefinition;
            bounceIn: MotifiableDefinition;
            bounceInUp: MotifiableDefinition;
            bounceInDown: MotifiableDefinition;
            bounceInRight: MotifiableDefinition;
            bounceInLeft: MotifiableDefinition;
            bounceOut: MotifiableDefinition;
            bounceOutUp: MotifiableDefinition;
            bounceOutDown: MotifiableDefinition;
            bounceOutRight: MotifiableDefinition;
            bounceOutLeft: MotifiableDefinition;
            fadeIn: MotifiableDefinition;
            fadeInDown: MotifiableDefinition;
            fadeInUp: MotifiableDefinition;
            fadeInLeft: MotifiableDefinition;
            fadeInRight: MotifiableDefinition;
            fadeInDownBig: MotifiableDefinition;
            fadeInUpBig: MotifiableDefinition;
            fadeInLeftBig: MotifiableDefinition;
            fadeInRightBig: MotifiableDefinition;
            fadeOut: MotifiableDefinition;
            fadeOutDown: MotifiableDefinition;
            fadeOutUp: MotifiableDefinition;
            fadeOutLeft: MotifiableDefinition;
            fadeOutRight: MotifiableDefinition;
            fadeOutDownBig: MotifiableDefinition;
            fadeOutUpBig: MotifiableDefinition;
            fadeOutLeftBig: MotifiableDefinition;
            fadeOutRightBig: MotifiableDefinition;
            lightSpeedIn: MotifiableDefinition;
            lightSpeedOut: MotifiableDefinition;
            slideInDown: MotifiableDefinition;
            slideInUp: MotifiableDefinition;
            slideInLeft: MotifiableDefinition;
            slideInRight: MotifiableDefinition;
            slideOutDown: MotifiableDefinition;
            slideOutUp: MotifiableDefinition;
            slideOutLeft: MotifiableDefinition;
            slideOutRight: MotifiableDefinition;
            zoomIn: MotifiableDefinition;
            zoomInDown: MotifiableDefinition;
            zoomInUp: MotifiableDefinition;
            zoomInLeft: MotifiableDefinition;
            zoomInRight: MotifiableDefinition;
            zoomOut: MotifiableDefinition;
            zoomOutDown: MotifiableDefinition;
            zoomOutUp: MotifiableDefinition;
            zoomOutLeft: MotifiableDefinition;
            zoomOutRight: MotifiableDefinition;
        }
    }
}
export {};
