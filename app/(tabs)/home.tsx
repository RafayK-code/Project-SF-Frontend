import React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { TouchableOpacity } from "react-native";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  interface SearchResult {
    name: string;
  }

  const handleSearchChange = (text: string): void => {
    setSearchQuery(text);
    // Simulated search logic
    if (text) {
      setSearchResults([
        { name: "Result 1" },
        { name: "Result 2" },
        { name: "Result 3" },
      ]); // Replace with actual search results
    } else {
      setSearchResults([]);
    }
  };

  const navigateToProfile = () => {
    console.log("Navigating to Profile Page");
  };

  const navigateToGroupSelect = (groupName: string): void => {
    console.log(`Navigating to Group Select Screen for ${groupName}`);
  };

  const navigateToMessagingScreen = (message: string): void => {
    console.log(`Navigating to Messaging Screen for ${message}`);
  };

  const navigateToInboxScreen = () => {
    console.log("Navigating to Inbox Screen");
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Input
            placeholder="Search for a course"
            value={searchQuery}
            onChangeText={handleSearchChange}
            style={{
              backgroundColor: "#fdfaf1",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={navigateToProfile}
          style={styles.profileButton}
        >
          <Text style={{ color: textColor }}>Profile</Text>
        </TouchableOpacity>
      </View>

      {searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          {searchResults.map((result, index) => (
            <Text
              key={index}
              style={styles.resultItem}
              onPress={() => console.log(`Selected: ${result}`)}
            >
              {result.name}
            </Text>
          ))}
        </View>
      )}

      <Text style={[styles.inboxTitle, { color: textColor }]}>
        Suggested for you
      </Text>
      <ScrollView style={styles.suggestionsContainer} horizontal>
        {[
          {
            name: "CS2211 study group",
            numberOfStudents: 10,
          },
          {
            name: "Philosophy group",
            numberOfStudents: 8,
          },
          {
            name: "Let's do math",
            numberOfStudents: 15,
          },
        ].map((group, index) => (
          <Card
            key={index}
            style={styles.groupCard}
            onPress={() => navigateToGroupSelect(group.name)}
          >
            <Text
              style={styles.cardText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {group.name}
            </Text>
            <Text style={styles.cardSubText}>
              {group.numberOfStudents} students
            </Text>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.inboxContainer}>
        <View style={styles.inboxHeader}>
          <Text
            style={[styles.inboxTitle, { color: textColor }]}
            onPress={navigateToInboxScreen}
          >
            Inbox
          </Text>
        </View>
        <ScrollView style={styles.inboxMessages}>
          {[
            {
              name: "Thomas llamzan",
              message: "Let's study tomorrow!",
              time: "2:11 PM",
            },
            {
              name: "Callum Thompson",
              message: "Sorry, can't make it",
              time: "1:52 PM",
            },
            {
              name: "CS2212 Project Team",
              message: "I need help figuring this out...",
              time: "11:55 AM",
            },
            {
              name: "Andres Pedreros",
              message: "What did you get for question 4?",
              time: "10:23 AM",
            },
            {
              name: "Kalundi Serumaga",
              message: "Let's study tomorrow!",
              time: "2:11 PM",
            },
            {
              name: "Callum Thompson",
              message: "Sorry, can't make it",
              time: "1:52 PM",
            },
            {
              name: "CS2212 Project Team",
              message: "I need help figuring this out...",
              time: "11:55 AM",
            },
            {
              name: "Kalundi Serumaga",
              message: "What did you get for question 4?",
              time: "10:23 AM",
            },
          ].map((message, index) => (
            <Card
              key={index}
              style={styles.inboxCard}
              onPress={() => navigateToMessagingScreen(message.name)}
            >
              <View style={styles.inboxMessageHeader}>
                <Text style={[styles.messageName]}>{message.name}</Text>
                <Text style={styles.messageTime}>{message.time}</Text>
              </View>
              <Text style={styles.messageContent}>{message.message}</Text>
            </Card>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
    padding: 8,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
  },
  profileButton: {
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 16,
  },
  resultsContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  resultItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionsContainer: {
    flexDirection: "row",
    maxHeight: 130,
  },
  groupCard: {
    width: 150,
    height: 110,
    marginLeft: 8,
    backgroundColor: "#183c30",
    justifyContent: "flex-end",
    padding: 8,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
  },
  cardSubText: {
    color: "#fff",
    fontSize: 12,
  },
  inboxContainer: {
    flex: 1,
  },
  inboxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  inboxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 24,
  },
  inboxCard: {
    marginBottom: 4,
    padding: 16,
    backgroundColor: "#fdfaf1",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  inboxMessageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inboxMessages: {
    paddingHorizontal: 24,
  },
  messageName: {
    fontWeight: "bold",
    color: "#3d3f4b",
  },
  messageTime: {
    color: "#999",
  },
  messageContent: {
    color: "#555",
    marginTop: 4,
  },
});

export default HomePage;
