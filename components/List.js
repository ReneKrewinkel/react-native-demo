import {useContext} from 'react'
import { View, FlatList } from 'react-native'
import ListItem from './ListItem'
import AppContext from "../context/AppContext";

const List = () => {

  const ctx = useContext(AppContext)

  return(

      <FlatList
        numColumns={1}
        data={ctx.data}
        renderItem={ ({item}) => <ListItem { ...item } />}
        keyExtractor={item => item.id}
      />

  )
}

export default List