import { Text } from 'react-native'
import LabelStyle from "./Label.style";

const Label = ({ id, title, warning }) => {

  return (
     <Text style={ LabelStyle }>{ title }</Text>
  )
}

export default Label