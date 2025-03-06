import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import GroupCreateButton from "../components/GroupCreateScreenComponents/groupCreateButton";
import GroupPublicityButton from "../components/GroupCreateScreenComponents/groupPublicityButton";
import GroupCreateSlider from "../components/GroupCreateScreenComponents/groupCreateSlider";
import { useRouter } from "expo-router";

function GroupCreateScreen() {
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");

  const [groupMax, setGroupMax] = useState(25);

  const [publicGroup, setPublicGroup] = useState(false);

  const onGroupCreate = () => {};
  const onBack = () => {};
  const onGroupNameChange = (text: string) => {
    setGroupName(text);
  };
  const onGroupDescChange = (text: string) => {
    setGroupDesc(text);
  };

  const onPublicityChanged = (currentlySelected: boolean) => {
    if (!currentlySelected) {
      setPublicGroup(!publicGroup);
    }
  };
  const onProfileTap = () => {
    router.navigate("/profileView");
  };
  const router = useRouter();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={onProfileTap}>
          <View style={styles.profile}></View>
        </TouchableWithoutFeedback>

        <Text style={styles.title}>What should we call this group?</Text>

        <TextInput
          style={styles.input}
          value={groupName}
          onChangeText={onGroupNameChange}
          placeholder="Type Group Name Here"
          placeholderTextColor={"#3D404A"}
        ></TextInput>

        <Text style={styles.title}>Set the vibe! What's this group for?</Text>

        <TextInput
          multiline={true}
          style={[
            styles.input,
            { height: 65, maxWidth: "70%", marginBottom: 10 },
          ]}
          value={groupDesc}
          onChangeText={onGroupDescChange}
          placeholder="Type Group Description Here"
          placeholderTextColor={"#3D404A"}
        ></TextInput>

        <Text style={styles.title}>Let's put a cap on this party!</Text>

        <GroupCreateSlider
          minValue={10}
          maxValue={50}
          step={10}
          value={groupMax}
          setValue={setGroupMax}
        ></GroupCreateSlider>

        <Text style={styles.title}>Is this an Open or Private party?</Text>

        {/* Open or closed button, radio */}
        <View style={styles.publicityContainer}>
          <GroupPublicityButton
            onClick={onPublicityChanged}
            text={"Open"}
            selected={publicGroup}
            open={true}
          ></GroupPublicityButton>

          <GroupPublicityButton
            onClick={onPublicityChanged}
            text={"Request to Join"}
            selected={!publicGroup}
            open={false}
          ></GroupPublicityButton>
        </View>

        <GroupCreateButton
          text={"Create Group"}
          onClick={onGroupCreate}
        ></GroupCreateButton>

        <GroupCreateButton
          text="Go Back"
          onClick={onBack}
          color="#F4D84C"
          textColor="#3D404A"
        ></GroupCreateButton>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F7F3E8",
  },
  title: {
    fontSize: 17,
    fontWeight: 700,
  },
  input: {
    fontStyle: "italic",
    fontWeight: 500,
    margin: 10,
    marginBottom: 20,
  },
  profile: {
    backgroundColor: "#193C30",
    width: 150,
    height: 150,
    borderRadius: 1000,
    margin: 10,
    marginBottom: 20,
  },
  publicityContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
});

export default GroupCreateScreen;
