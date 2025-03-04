import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const GroupList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const groups = [
    { name: "i love stats", members: "24/48 online" },
    { name: "share notes for stats", members: "24/48 online" },
    { name: "let’s study stats!", members: "24/48 online" },
    { name: "i love stats", members: "24/48 online" },
    { name: "share notes for stats", members: "24/48 online" },
    { name: "let’s study stats!", members: "24/48 online" },
    { name: "i love stats", members: "24/48 online" },
    { name: "share notes for stats", members: "24/48 online" },
    { name: "let’s study stats!", members: "24/48 online" },
    { name: "i love stats", members: "24/48 online" },
    { name: "share notes for stats", members: "24/48 online" },
    { name: "let’s study stats!", members: "24/48 online" },
    { name: "i love stats", members: "24/48 online" },
    { name: "share notes for stats", members: "24/48 online" },
    { name: "let’s study stats!", members: "24/48 online" },
    { name: "i love stats", members: "24/48 online" },
    { name: "share notes for stats", members: "24/48 online" },
    { name: "let’s study stats!", members: "24/48 online" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerTitle}>STATS 2244</Text>
        </View>

        <Ionicons name="ellipsis-horizontal" size={24} color="black" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          {!isFocused && searchQuery === "" && (
            <Ionicons
              name="search"
              size={20}
              color="#999"
              style={styles.searchIcon}
            />
          )}
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a group"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </View>

      {/* Group List */}
      <ScrollView>
        {groups.map((group, index) => (
          <TouchableOpacity key={index} style={styles.groupCard}>
            <Text style={styles.groupName}>{group.name}</Text>
            <Text style={styles.groupMembers}>{group.members}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f3e8", // Beige background
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#183C30", // Dark green
    marginLeft: 8,
    paddingBottom: 7,
  },
  searchContainer: {
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
    elevation: 5,
  },
});

export default GroupList;
