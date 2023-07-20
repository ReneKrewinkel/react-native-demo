import { TouchableOpacity, View, Text } from 'react-native'

const Button = ({ text, action }) => {


  const handleClick = () => {
    action("VAR")
  }

  return(
    <TouchableOpacity onPress={ () => handleClick() }>
      <View style={{ borderWidth: 1, padding: 10, height: 50, backgroundColor: "FFF"}}>
        <Text style={{ padding: 5, color: "#000"}}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )

}

export default Button