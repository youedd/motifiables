import { View, Text, FlatList, ScrollView } from 'react-native'
import { createMotifiable } from './createMotifiable'

export const Motifiable = createMotifiable(View)
export const MotifiableText = createMotifiable(Text)
export const MotifiableFlatList = createMotifiable(FlatList)
export const MotifiableFlatScrollView = createMotifiable(ScrollView)
