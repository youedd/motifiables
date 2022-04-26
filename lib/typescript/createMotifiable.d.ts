import React from 'react';
import { MotifiableConfig } from './core/types';
export declare const createMotifiable: <C extends React.ComponentType<any>>(Component: C) => React.FC<React.ComponentProps<C> & MotifiableConfig>;
