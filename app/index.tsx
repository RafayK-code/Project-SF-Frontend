import { Text, View, SafeAreaView } from "react-native";
import Login from "../screens/Login";
import Inbox from "./(tabs)/inbox";
import LandingScreen from "./NewLandingPagee";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LandingScreen></LandingScreen>
    </View>
  );
}
