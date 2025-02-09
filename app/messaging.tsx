import React from "react";
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

export default function MessagingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              router.back();
            }}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>CS1033</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>:</Text>
          </TouchableOpacity>
        </View>

        {/* Messages List */}
        <ScrollView style={styles.messagesContainer}>
          {/* Received Message */}
          <View style={styles.messageRow}>
            <View style={styles.profilePlaceholder} />
            <View style={styles.messageContent}>
              <Text style={styles.senderName}>Alice Smith</Text>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>
                  This is a filler test message!
                </Text>
              </View>
            </View>
          </View>

          {/* Sent Message */}
          <View style={[styles.messageRow, styles.outgoingMessageRow]}>
            <View style={styles.messageContent}>
              <Text style={styles.youText}>You</Text>
              <View style={[styles.messageBubble, styles.outgoingMessage]}>
                <Text style={styles.outgoingMessageText}>
                  Does this actually work?
                </Text>
              </View>
            </View>
            <View style={styles.profilePlaceholder} />
          </View>

          {/* Another Received Message */}
          <View style={styles.messageRow}>
            <View style={styles.profilePlaceholder} />
            <View style={styles.messageContent}>
              <Text style={styles.senderName}>Julian</Text>
              <View style={styles.messageBubble}>
                <Text style={styles.messageText}>I hope so!</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Input Bar */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="#8E8E93"
          />
          <TouchableOpacity>
            <Text style={styles.attachButton}>📎</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.imageButton}>🖼️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sendButton}>▶</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#e5e5e5",
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  menuButton: {
    padding: 5,
  },
  menuButtonText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  outgoingMessageRow: {
    flexDirection: "row-reverse",
  },
  messageContent: {
    flex: 1,
    maxWidth: "75%",
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
  senderName: {
    fontSize: 14,
    color: "#000",
    marginBottom: 5,
    marginLeft: 2,
  },
  youText: {
    fontSize: 14,
    color: "#000",
    marginBottom: 5,
    textAlign: "right",
    marginRight: 2,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  outgoingMessage: {
    backgroundColor: "#4075FF",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  outgoingMessageText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  input: {
    flex: 1,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
  },
  attachButton: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  imageButton: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  sendButton: {
    fontSize: 20,
    marginLeft: 5,
    color: "#4075FF",
  },
});
