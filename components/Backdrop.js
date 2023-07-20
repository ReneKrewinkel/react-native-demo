import { View, ImageBackground, Text} from "react-native";

const Backdrop = () => {

  const img = "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"

  return(
    <View style={{ flex: 1}}>
      <ImageBackground source={{ uri: img }}
                       resizeMode="cover"
                       style={{ flex: 1,
                                justifyContent: 'center'}}>
      </ImageBackground>
    </View>
  )
}

export default Backdrop