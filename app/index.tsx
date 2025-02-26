// App entry here

import { View } from "react-native";
import LandingScreen from "./landing";

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
