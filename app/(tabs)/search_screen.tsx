import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default function search_screen() {
  return (
    <View style={styles.main}>

      <View style={styles.topSection}>
        <Text style={styles.title}>Find your class!</Text>
        <Text style={styles.subtitle}>Find study partners by entering your course name!</Text>
      </View>

      <View style={styles.middleSection}>
        <TextInput
          onChangeText={() => {}}
          placeholder="Search for a course..."
          style={styles.searchBar}
        ></TextInput>

        <View style={styles.buttonLayout}>
          <Button onPress={() => {}} title="Search" color="#487DE7" />
          <Button onPress={() => {}} title="Courses" color="#487DE7" />
        </View>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  topSection: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  title: {
    marginTop: 100,
    fontSize: 40,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 20,
  },

  middleSection: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: -80,
  },

  searchBar: {
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    width: "55%",
    height: "10%",
    paddingHorizontal: 10,
  },

  bottomSection: {
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  buttonLayout: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
});
