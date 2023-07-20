import { useContext} from "react";
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import AppContext from "../context/AppContext";

const Home = ({navigation}) => {

  const ctx = useContext(AppContext);



  return (
    <View style={{ flex: 1, marginTop: 120, padding: 40 }}>
      <Text>{ ctx.msg }</Text>
      <TouchableOpacity onPress={ () => navigation.navigate('Detail', { name: "Pietje"})}>
        <Text>Naar detail</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Home