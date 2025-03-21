// App entry here

import { View } from "react-native";
import LandingScreen from "./landing";
import ProfileView from "./profileView";
import GroupCreateScreen from "./groupCreateScreen";
import GroupList from "./groupList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LandingScreen />
    </View>
  );
}
