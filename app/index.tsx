import { Text, View, SafeAreaView } from "react-native";
import Login from "../screens/Login";
import Inbox from "./inbox";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Inbox></Inbox>
    </View>
  );
}
