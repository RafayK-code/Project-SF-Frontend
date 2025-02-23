// App entry here

import { View } from "react-native";
import LandingScreen from "./landing";
import GroupSeletScreen from "./groupSelectScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GroupSeletScreen></GroupSeletScreen>
    </View>
  );
}
