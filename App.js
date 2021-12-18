import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import TabNavigator from './navigation/TabNavigator'
import DrawerNavigator from './navigation/DrawerNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>HELLOOOOOOOOOOOOOOO</Text>
      // </View>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
