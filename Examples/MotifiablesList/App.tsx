import { MotiImage } from 'moti'
import { Motifiable, useDynamicMotifiable } from 'motifiables'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import AnimationList from './AnimationList'

const App: React.FC = () => {
  const { animateTo: animateDoggo, props } = useDynamicMotifiable()

  return (
    <SafeAreaView style={styles.container}>
      <Motifiable style={styles.container} name='fadeInUpBig' duration={800}>
        <Motifiable name='tada' delay={800} repeat={2}>
          <MotiImage
            {...props}
            style={styles.doggo}
            source={require('./doggo.png')}
          />
        </Motifiable>
        <AnimationList
          onItemPress={(item) => animateDoggo({ name: item })}
        />
      </Motifiable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  doggo: {
    alignSelf: 'center',
    width: 200,
    height: 200
  }
})

export default App
