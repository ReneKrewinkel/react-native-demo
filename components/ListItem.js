import { View, Text, Image} from 'react-native'
import ListItemStyle from './ListItem.style'

const ListItem = (item) => {

  console.warn(item)

  const img = "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"

  return(
    <View style={ListItemStyle.container}>
      <View style={ListItemStyle.image} >
        <Image source={{ uri: img }} width={60} height={60} resizeMode={'cover'} />
      </View>
      <View style={ListItemStyle.content}>
        <Text>{ item.title }</Text>
        <Text>Content</Text>
      </View>
    </View>
  )

}

export default ListItem