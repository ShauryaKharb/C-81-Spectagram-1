import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

export default class TabNavigator extends React.Component {
  render() {
    var Tab = createBottomTabNavigator()

    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName
            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline'
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarOptions:{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
          }
        })}
        
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
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
