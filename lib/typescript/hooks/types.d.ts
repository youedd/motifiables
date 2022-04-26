import { MotiProps } from 'moti';
import { MotifiableKey } from '../definitions';
import { MotifiableConfig, MotifiableProps, MotifiableStyle, MotifiableTransitionProp } from '../core';
interface DynamicMotifiableConfig {
    name: MotifiableKey;
    duration?: number;
    delay?: number;
}
export declare type UseMotifiablePropsHook = (config: MotifiableConfig) => MotifiableProps;
export declare type UseMotifiableHook = (config: MotifiableConfig) => {
    animate: () => void;
    props: {
        state: MotiProps<MotifiableStyle>['state'];
        transition?: MotifiableTransitionProp;
    };
};
export declare type UseDynamicMotifiableHook = () => {
    animateTo: (config: DynamicMotifiableConfig) => void;
    props: {
        state: MotiProps<MotifiableStyle>['state'];
    };
};
export {};
