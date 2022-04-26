import React from 'react'
import { MotiImage } from 'moti'
import { Button, SafeAreaView, StyleSheet } from 'react-native'
import { Motifiable, useDynamicMotifiable } from 'motifiables'
import './definitions'

const App: React.FC = () => {
  const { animateTo: animateDoggo, props } = useDynamicMotifiable()

  console.log(JSON.stringify(props, null, 2))

  return (
    <SafeAreaView style={styles.container}>
      <Motifiable name='fadeInUpBig' duration={800}>
        <MotiImage
          {...props}
          style={styles.doggo}
          source={require('./doggo.png')}
        />

        <Button
          title='new rotate'
          onPress={() => animateDoggo({
            name: 'rotate'
          })}
        />
        <Button
          title='custom'
          onPress={() => animateDoggo({
            name: 'custom'
          })}
        />
      </Motifiable>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  doggo: {
    alignSelf: 'center',
    width: 200,
    height: 200
  }
})

export default App
