import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/// Add a stack
const Stack = createStackNavigator();

import Home from './components/Home'
import Detail from './components/Detail'

import useFetch from './hooks/useFetch'
import AppContext from './context/AppContext'
import {useState} from "react";

const App = () => {

  const [msg, setMsg] = useState('')
  const url = "https://api.dev-master.ninja/reactjs/slow"
  const [data, isLoaded, error] = useFetch(url)



  /*
  return(
    <View style={{ flex:1, marginTop: 0, padding: 0 }}>
      <View style={{ flex: 2}}>
        <Backdrop />
      </View>
      <View style={{ flex: 4}}>
      {
        !isLoaded ? <ActivityIndicator size="large" color="#0000ff" />
          : <List data={data} />
      }
      </View>
    </View>
  )*/


  return (
    <AppContext.Provider value={{ data, msg, setMsg }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Homepage" component={ Home }/>
          <Stack.Screen name="Detail" component={ Detail }/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )

}

export default App


