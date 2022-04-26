import { MotifiableDefinitions, Motifiable, MotifiableKey, MotifiableText } from 'motifiables'
import React from 'react'
import { SectionList } from 'react-native'

import Item from './Item'
import sections from './sections'

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
  const keys = Object.keys(MotifiableDefinitions) as MotifiableKey[]

  return (
    <SectionList<MotifiableKey,{title: string}>
      sections={sections}
      keyExtractor={(item) => item}
      stickySectionHeadersEnabled={false}
      renderSectionHeader={({section: {title}})=> {
        return <MotifiableText
          name='fadeInRightBig'
          delay={1800}
          style={{ textAlign: 'center', fontSize: 24, padding: 20}}
        >
          {title}
        </MotifiableText>
      }}
      renderItem={({ item, index }) => {
        return (
          <Motifiable
            name='fadeIn'
            delay={2000+ index * 100}
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
