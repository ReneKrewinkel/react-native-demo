import { useContext} from "react";
import { View, Text } from'react-native';
import List from "./List";
import Button from "./Button";
import AppContext from "../context/AppContext";

const Detail = ({ navigation, route }) => {

  const ctx = useContext(AppContext)

  const action = (txt) => {
    ctx.setMsg(txt)
  }

  return (
    <View style={{ flex: 1, padding: 40 }}>
      <Text>{ctx.msg } { route.params.name }</Text>
      <Button text={"Set MSG in context"}
              action={ action } />
      <List />
    </View>
  )
}
export default Detail