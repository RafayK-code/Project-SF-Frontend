import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollViewProps,
  Keyboard,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MessageScreenHeader from "../components/MessagePageComponents/MessagingScreenHeader";
import MessageSection from "../components/MessagePageComponents/MessageSection";
import MessagingBar from "../components/MessagePageComponents/MessagingBar";
import { UseMessages } from "@/hooks/GetHooks/UseMessages";
import { useInboxContext, useInboxDispatchContext } from "@/hooks/Contexts/InboxContext";
import { url } from "@/hooks/TestData";
import { useMessageContext, useMessageDispatchContext } from "@/hooks/Contexts/MessagesContext";
import { useKeyboardDidShow } from "@/hooks/useKeyboardShown";


export default function MessagingScreen() {
  const router = useRouter();
  const { chatId, userId } = useLocalSearchParams<{ chatId: string, userId: string }>();
  const [message, setMessage] = useState("")
  const inboxDispatchContext = useInboxDispatchContext();

  // Called when attempting to send message
  const sendMessage = () => {
    const body = {
      content: message,
      user_id: userId,
      chat_id: chatId
    }
    fetch(url + "/create/message", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => {
        console.log("Message Send Status: " + res.status + " on ChatId: " + chatId)

        inboxDispatchContext({ type: "RELOAD" })
        messagesDispatch({ type: "RELOAD", chatId: Number(chatId) })
      })
    setMessage("")

  }

  // Back arrow clicked
  const goBack = () => {
    router.back()
  }


  const chatMessages = useMessageContext().messages.filter((mesg) => {
    return mesg.chatId == Number(chatId)
  })[0]

  const messagesDispatch = useMessageDispatchContext()
  const chat = useInboxContext().chats.filter((chat) => {
    return chat.id == Number(chatId)
  })[0]

  const messagesScrollRef = useRef<ScrollView>(null);
  const keyboardUp = useKeyboardDidShow()

  useEffect(() => {
    console.log("called")
    messagesScrollRef.current?.scrollToEnd({ animated: true })
  }, [keyboardUp, messagesScrollRef])




  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          {/* Header */}
          <MessageScreenHeader groupName={chat.name} goBack={goBack}></MessageScreenHeader>


          {/* Messages List */}
          <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false} ref={messagesScrollRef} onContentSizeChange={() => messagesScrollRef.current?.scrollToEnd({ animated: true })}>
            {
              chatMessages ?
                chatMessages.chats.messages.map((message, index: number) => {
                  return <MessageSection content={message.content} timeSent={message.create_ts} username={message.user.name} key={index}></MessageSection>
                })
                :
                undefined
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
