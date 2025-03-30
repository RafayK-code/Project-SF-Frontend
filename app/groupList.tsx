import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import EllipseButton from "@/components/MessagePageComponents/EllipseButton";
import PageBackButton from "@/components/PageBackButton";
import NoResultLabel from "@/components/NoResultView";
import { useCourseChats } from "@/hooks/GetHooks/UseCourseChats";

const GroupList = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const { userId, courseId } = useLocalSearchParams<{ userId: string, courseId: string }>();


  const goBack = () => {
    router.back()
  }
  const course = useCourseChats(Number(courseId))


  const getMatchedResults = () => {
    return course.course.chats.filter(chat => {
      return compareToSearchKey(chat.name)
    })
  }

  const compareToSearchKey = (key: string | undefined): boolean => {
    if (key == undefined) {
      return false;
    }
    const lowerKey: string = key.toLowerCase();
    const lowerSearchKey: string = searchQuery.toLowerCase();

    return lowerKey.includes(lowerSearchKey);
  };

  const goToJoinChat = (chatId: number) => {
    router.push(`/groupSelectScreen?userId=${userId}&chatId=${chatId}`)
  }
  const goToGroupCreate = () => {
    router.push(`/groupCreateScreen?userId=${userId}&courseId=${courseId}`)
  }

  const getMemberRatio = (amount: number, max: number) => {
    if (max == null) {
      return "";
    }
    return `${amount}/${max}`
  }
  return (

    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <PageBackButton onClick={goBack}></PageBackButton>
          <Text style={styles.headerTitle}>{course.course.course_name}</Text>
        </View>

        <EllipseButton size={5} onClick={() => { }}></EllipseButton>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>

          <Ionicons
            name="search"
            size={20}
            color="#999"
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search for a group"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Group List */}
      <ScrollView style={styles.cardsContainer}>
        {getMatchedResults().map((chat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.groupCard}
            onPress={() => { goToJoinChat(chat.id) }}
          >
            <Text style={styles.groupName}>{chat.name}</Text>
            <Text style={styles.groupMembers}>{getMemberRatio(chat.member_count, chat.member_limit)}</Text>
          </TouchableOpacity>
        ))}
        {getMatchedResults().length == 0 ? <NoResultLabel desc={"Try refining your search or creating some more chats."}></NoResultLabel> : undefined}

      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={goToGroupCreate}
      >
        <Ionicons name="add" size={28} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f3e8", // Beige background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#183C30", // Dark green
    marginLeft: 8,
    paddingBottom: 7,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  searchInputWrapper: {

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f3e8",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  cardsContainer: {
    paddingHorizontal: 16
  },
  groupCard: {

    backgroundColor: "#183C30", // Dark green
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  groupMembers: {
    fontSize: 12,
    color: "#D3D3D3",
    marginTop: 4,
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FFD700", // Yellow button
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 4, height: 4 },
    elevation: 5,
  },
});

export default GroupList;
