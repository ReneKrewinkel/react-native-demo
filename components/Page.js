import { View } from 'react-native'

const Page = ({ children }) => {
  return(
    <View style={{ padding: 100, backgroundColor: "#FF0"}}>
      { children }
    </View>
  )
}

export default Page