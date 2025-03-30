import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { useInbox } from "@/hooks/useInbox";
import { useKeyboardShown } from "@/hooks/useKeyboardShown";
import HomeSearchResults from "@/components/HomeComponents/HomeSearchResults";
import { id } from "@/hooks/TestData";
import HomeInboxCard from "@/components/HomeComponents/HomeInboxCard";
import HomeScreenSuggestedCard from "@/components/HomeComponents/HomeSuggestedCard";
import HomeSearchSection from "@/components/HomeComponents/HomeSearchSection";

const HomePage = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text")

  const navigateToInboxScreen = () => {
    console.log("Navigating to Inbox Screen");
    router.push(`/inbox?userId=${id}`);
  };


  const isKeyboardUp = useKeyboardShown();

  const inbox = useInbox(1)

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>

        {/* Top Search Bar and profile button */}
        <HomeSearchSection query={searchQuery} setQuery={setSearchQuery}></HomeSearchSection>


        {/* Main Body of the page */}
        <View style={styles.sectionContainer}>
          {
            // If the keyboard is up show the HomeSearchResults 
            isKeyboardUp ?
              <HomeSearchResults query={searchQuery}></HomeSearchResults>

              :
              // Main Container for Suggested and Inbox
              <View style={styles.mainContainer}>

                {/* Suggested Section */}
                <Text style={[styles.inboxTitle, { color: textColor }]}>Suggested for you</Text>
                <ScrollView style={styles.suggestionsContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
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
                    <HomeScreenSuggestedCard key={index} name={group.name} memberCount={group.numberOfStudents} chatId={0}></HomeScreenSuggestedCard>
                  ))}
                </ScrollView>

                {/* Inbox Seciont */}
                <View style={styles.inboxContainer}>

                  <TouchableOpacity style={styles.inboxHeader} onPress={navigateToInboxScreen}>
                    <Text style={[styles.inboxTitle, { color: "183c30" }]}>Inbox →</Text>
                  </TouchableOpacity>

                  <ScrollView>
                    {inbox ? inbox.chats.map((message, index: number) => (
                      <HomeInboxCard key={index} chatName={message.name} chatId={message.id} messageTime={message.latest_message ? message.latest_message.create_ts : ""} messageContent={message.latest_message ? message.latest_message.content : ""}></HomeInboxCard>
                    )) : undefined}
                  </ScrollView>
                </View>
              </View>
          }
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1
  },
  sectionContainer: {
    display: "flex",
    flex: 1
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
    paddingHorizontal: 15,

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
  suggestionsContainer: {
    flexDirection: "row",
    maxHeight: 130,
    paddingHorizontal: 16
  },
  inboxContainer: {
    flex: 1,
    paddingHorizontal: 8
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
    paddingHorizontal: 16
  }
});

export default HomePage;
