import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleEditDetails = () => {
    //navigation.navigate('EditDetails');
  };

  const handlePreferences = () => {
    //navigation.navigate('Preferences');
  };

  const handleNotifications = () => {
    //navigation.navigate('Notifications');
  };

  const handlePassword = () => {
    //navigation.navigate('Password');
  };

  const handleLogout = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image
          source={require("../../assets/images/adaptive-icon.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#181818",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          User Name
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleEditDetails}
        style={styles.optionContainer}
      >
        <Text style={styles.optionText}>Edit Details</Text>
        <Text style={styles.arrowIcon}>V</Text>{" "}
        {/*for now until we decide what icons we are going to use  */}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handlePreferences}
        style={styles.optionContainer}
      >
        <Text style={styles.optionText}>Preferences</Text>
        <Text style={styles.arrowIcon}>V</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleNotifications}
        style={styles.optionContainer}
      >
        <Text style={styles.optionText}>Notifications</Text>
        <Text style={styles.arrowIcon}>V</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePassword} style={styles.optionContainer}>
        <Text style={styles.optionText}>Password</Text>
        <Text style={styles.arrowIcon}>V</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.optionContainer}>
        <Text style={styles.optionText}>Logout</Text>
        <Text style={styles.arrowIcon}>V</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#181818",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
  arrowIcon: {
    color: "white",
    fontSize: 16,
    transform: [{ rotate: "270deg" }],
  },
});

export default ProfileScreen;
