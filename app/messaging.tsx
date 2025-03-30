import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MessageScreenHeader from "../components/MessagePageComponents/MessagingScreenHeader";
import MessageSection from "../components/MessagePageComponents/MessageSection";
import MessagingBar from "../components/MessagePageComponents/MessagingBar";
import { UseMessages } from "@/hooks/UseMessages";
import { useChat } from "@/hooks/UseChat";


export default function MessagingScreen() {
  const router = useRouter();
  const { messageId, userId } = useLocalSearchParams<{ messageId: string, userId: string }>();
  const [message, setMessage] = useState("")


  // Called when attempting to send message
  const sendMessage = () => {

  }

  // Back arrow clicked
  const goBack = () => {
    router.back()
  }


  const messages = UseMessages(Number(messageId))
  const chat = useChat(Number(messageId))

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* Header */}
          <MessageScreenHeader groupName={chat.chat.name} goBack={goBack}></MessageScreenHeader>


          {/* Messages List */}
          <ScrollView style={styles.messagesContainer}>
            {
              messages.map((message, index: number) => {
                return <MessageSection content={message.content} timeSent={message.create_ts} username={message.user.name} key={index}></MessageSection>
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
    flex: 0.06,
    backgroundColor: "#FDFBF1",
  },

  messagesContainer: {
    flex: 1,
    padding: 10,
  },

});
