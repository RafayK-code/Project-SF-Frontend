import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function MessagingScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/explore')} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>cs1033</Text>
      </View>

      {/* Messages List */}
      <ScrollView style={styles.messagesContainer}>
        {/* Message from Julian */}
        <View style={styles.messageRow}>
          <View style={styles.profilePlaceholder} />
          <View>
            <Text style={styles.senderName}>Julian</Text>
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>yo does this work</Text>
            </View>
          </View>
        </View>

        {/* Message from Ray */}
        <View style={[styles.messageRow, styles.outgoingMessageRow]}>
          <View>
            <Text style={[styles.senderName, styles.outgoingSenderName]}>Ray</Text>
            <View style={[styles.messageBubble, styles.outgoingMessage]}>
              <Text style={styles.messageText}>i really hope so lol</Text>
            </View>
          </View>
          <View style={styles.profilePlaceholder} />
        </View>
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <View style={styles.profilePlaceholder} />
        <TextInput style={styles.input} placeholder="Type a message..." />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.sendButton}>SEND</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007aff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  outgoingMessageRow: {
    flexDirection: 'row-reverse',
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  senderName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  outgoingSenderName: {
    textAlign: 'right',
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#e5e5ea',
  },
  outgoingMessage: {
    backgroundColor: '#007aff',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
    backgroundColor: '#f8f9fa',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  sendButton: {
    fontSize: 16,
    color: '#007aff',
  },
});
