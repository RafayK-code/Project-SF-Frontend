import { Text, View, StyleSheet, Image } from "react-native";

import ActionButton from "../components/ActionButton";
import ClickableText from "../components/ClickableText";
const background = require("../assets/images/BackgroundImg.png");

function Login() {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.backgroundImg}></Image>

      <View style={styles.signInCont}>
        <Text style={styles.signInTitle}>Sign In</Text>

        <Text style={styles.welcomeText}>Welcome To "Insert Name"</Text>

        <Text style={styles.description}>
          University is hard, studying is hard, use "name here" to make finding
          study groups easier and fun!
        </Text>

        <View style={{ height: "25%" }}></View>

        <ActionButton text="Sign In" onClick={() => {}}></ActionButton>

        <ClickableText
          text="Forgot Password?"
          onClick={() => {}}
        ></ClickableText>

        <View style={styles.noAccountCont}>
          <Text style={styles.dontHaveAccountText}>
            Don't have an account?{" "}
          </Text>

          <ClickableText text="Sign Up" onClick={() => {}}></ClickableText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeText: {
    color: "white",
    alignSelf: "flex-start",
    marginLeft: "3%",
    fontSize: 30,
    fontWeight: 500,
    marginBottom: "5%",
    marginTop: "10%",
  },
  description: {
    color: "white",
    fontSize: 15,
    alignSelf: "flex-start",
    marginLeft: "3%",
    width: "80%",
    fontWeight: 300,
  },
  signInCont: {
    marginTop: "90%",
    flex: 1,
    color: "white",
    backgroundColor: "#1C1C21",
    padding: "3%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signInTitle: {
    position: "absolute",
    fontSize: 32,
    color: "white",
    margin: "3%",
    top: "-15%",
    fontWeight: 700,
    alignSelf: "flex-start",
  },
  backgroundImg: {
    position: "absolute",
    width: "120%",
    height: "52%",
  },
  loginActions: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dontHaveAccountText: {
    color: "white",
  },
  noAccountCont: {
    flexDirection: "row",
    margin: "5%",
  },
});

export default Login;
