import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MessagingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header and Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <ScrollView style={styles.messagesContainer}>
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>yo does this work</Text>
        </View>
        <View style={[styles.messageBubble, styles.outgoingMessage]}>
          <Text style={styles.messageText}>i really hope so lol</Text>
        </View>
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message..." />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.sendButton}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  backButton: {
    fontSize: 16,
    color: '#7c878f',
  },
  sendButton: {
    fontSize: 18,
    color: '#a482c6',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: '#7c878f',
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    backgroundColor: '#a482c6',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
});
