import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useMotifiable, MotifiableKey } from '../../src'

interface Props {
  name: MotifiableKey
  color: string
  onPress: () => void
}
const Item: React.FC<Props> = ({ name, color, onPress }) => {
  const { animate, props } = useMotifiable({
    name
  })

  return (
    <MotiView {...props}>
      <TouchableOpacity
        onPress={() => {
          animate()
          onPress()
        }}
        style={[{ backgroundColor: color }, styles.container]}
      >
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 10,
    marginHorizontal: 10
  },
  name: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default Item
