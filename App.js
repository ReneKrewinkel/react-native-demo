import {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Label, List, Button } from './components'
import { fetchData} from "./lib/Generic";
import Backdrop from "./components/Backdrop";

const App = () => {

  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const url = "https://api.dev-master.ninja/reactjs/slow"

  useEffect(() => {
    fetchData(url)
      .then( result => {
        setData(result)
        setIsLoaded(true)
      })
  },[])

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
  )
}

export default App


