import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

function LandingScreen({
  title = "Big Very Important Message about very important",
  subtitle = "Because studying is better with the right people.",
  onGetStarted = () => console.log("Get Started button pressed"),
  getStartedLabel = "Get Started",
  loginLabel = "I already have an account",
  customStyles = {},
}) {
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, customStyles]}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={onGetStarted}>
        <Text style={styles.getStartedText}>{getStartedLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.loginText}>{loginLabel}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3E8",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100, // Perfect circle
    backgroundColor: "#193C30",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    color: "#193C30",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: "#3D404A",
    textAlign: "center",
    marginBottom: 250,
  },
  getStartedButton: {
    backgroundColor: "#193C30",
    paddingVertical: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  getStartedText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  loginButton: {
    backgroundColor: "#F4D84C",
    paddingVertical: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  loginText: {
    color: "#193C30",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
});

export default LandingScreen;
