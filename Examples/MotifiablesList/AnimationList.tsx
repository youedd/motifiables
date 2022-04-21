import React from 'react'
import { FlatList } from 'react-native'
import { Definitions, Motifiable, MotifiableKey } from '../../src'
import Item from './Item'

export const COLORS = [
  '#65b237', // green
  '#346ca5', // blue
  '#a0a0a0', // light grey
  '#ffc508', // yellow
  '#217983', // cobolt
  '#435056', // grey
  '#b23751', // red
  '#333333', // dark
  '#ff6821', // orange
  '#e3a09e', // pink
  '#1abc9c', // turquoise
  '#302614' // brown
]

interface Props {
  onItemPress: (item: MotifiableKey) => void
}
const AnimationList: React.FC<Props> = ({ onItemPress }) => {
  const keys = Object.keys(Definitions) as MotifiableKey[]

  return (
    <FlatList<MotifiableKey>
      data={keys}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => {
        return (
          <Motifiable
            name='fadeIn'
            delay={2000 + index * 100}
            duration={500}
            style={{ opacity: 0 }}
          >
            <Item
              name={item}
              color={COLORS[index % COLORS.length]}
              onPress={() => onItemPress(item)}
            />
          </Motifiable>
        )
      }}
    />
  )
}

export default AnimationList
