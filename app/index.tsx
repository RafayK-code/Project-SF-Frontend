import { Text, View, SafeAreaView } from "react-native";
import Login from "../screens/Login";
import Inbox from "./(tabs)/inbox";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Login></Login>
    </View>
  );
}
