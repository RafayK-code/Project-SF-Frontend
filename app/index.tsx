// App entry here

import { View } from "react-native";
import LandingScreen from "./landing";
import GroupSeletScreen from "./groupSelectScreen";
import GroupCreateScreen from "./groupCreateScreen";
import ProfileScreen from "./profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GroupCreateScreen></GroupCreateScreen>
    </View>
  );
}
