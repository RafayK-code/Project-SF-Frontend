import { Text, View, SafeAreaView } from "react-native";
import Login from "../screens/Login";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Login></Login>
    </SafeAreaView>
  );
}
