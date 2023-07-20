import { View, FlatList } from 'react-native'
import ListItem from './ListItem'

const List = ({data}) => {
  return(

      <FlatList
        numColumns={1}
        data={data}
        renderItem={ ({item}) => <ListItem { ...item } />}
        keyExtractor={item => item.id}
      />

  )
}

export default List