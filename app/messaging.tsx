import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import MessageScreenHeader from "../components/MessagePageComponents/MessagingScreenHeader";
import MessageSection from "../components/MessagePageComponents/MessageSection";
import MessagingBar from "../components/MessagePageComponents/MessagingBar";


export default function MessagingScreen() {
  const router = useRouter();

  const [message, setMessage] = useState("")

  // Where the messages come from
  const messages = () => {
    return testMessages
  }

  // Called when attempting to send message
  const sendMessage = () => {

  }

  // Back arrow clicked
  const goBack = () => {
    router.back()
  }


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* Header */}
          <MessageScreenHeader groupName={"CS1027"} goBack={goBack}></MessageScreenHeader>


          {/* Messages List */}
          <ScrollView style={styles.messagesContainer}>
            {
              messages().map((message: Message, index: number) => {
                return <MessageSection content={message.messageContent} timeSent={message.timeSent} username={message.user} key={index}></MessageSection>
              })
            }
          </ScrollView>

          {/* Inputs */}
          <MessagingBar message={message} sendMessage={sendMessage} setMessage={setMessage}></MessagingBar>


        </KeyboardAvoidingView>
      </SafeAreaView>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3E8",
  },
  bottom: {
    flex: 0.04,
    backgroundColor: "#FDFBF1",
  },

  messagesContainer: {
    flex: 1,
    padding: 10,
  },

});


//some test messages
export interface Message {
  messageID: string,
  timeSent: number,
  messageContent: string,
  user: string
}



const testMessages: Message[] = [
  {
    messageID: "messageId1",
    timeSent: 0,
    messageContent: "Yo this is wicked, hope it looks good",
    user: "Lucas Vanderwielen"
  },
  {
    messageID: "messageId2",
    timeSent: 0,
    messageContent: "sick bro keep it up, this is super long text to see how it reacts to longer text, some people really like to yap, so yeah cool eh",
    user: "John Hopkins"
  },
  {
    messageID: "messageId3",
    timeSent: 0,
    messageContent: "yeah man looking great",
    user: "Julian Laxman"
  },
  {
    messageID: "messageId4",
    timeSent: 0,
    messageContent: "Yo this is wicked, hope it looks good",
    user: "Lucas Vanderwielen"
  },
  {
    messageID: "messageId5",
    timeSent: 0,
    messageContent: "sick bro keep it up, this is super long text to see how it reacts to longer text, some people really like to yap, so yeah cool eh, still yapping, but like this is a cool idea and im super hyped but i need to find some way to denote if it is you message and not someone elses yk, so yeah that something that i ned to woek on",
    user: "John Hopkins"
  },
  {
    messageID: "messageId6",
    timeSent: 0,
    messageContent: "yeah man looking great",
    user: "Julian Laxman"
  }

]