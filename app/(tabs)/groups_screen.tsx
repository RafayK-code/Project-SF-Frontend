import { StyleSheet, Platform, TouchableOpacity, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

const CourseGroupChatsScreen = () => {
  const courses = [
    { id: 1, name: 'COURSE 101: Introduction', members: 120 },
    { id: 2, name: 'COURSE 201: Intermediate Studies', members: 98 },
    { id: 3, name: 'COURSE 301: Advanced Topics', members: 75 },
    { id: 4, name: 'COURSE 401: Specialization', members: 53 },
    { id: 5, name: 'COURSE 501: Expert Studies', members: 60 },
    { id: 6, name: 'COURSE 601: Research Methods', members: 80 },
    { id: 7, name: 'COURSE 701: Machine Learning', members: 90 },
    { id: 8, name: 'COURSE 801: Artificial Intelligence', members: 110 },
    { id: 9, name: 'COURSE 901: Quantum Computing', members: 45 },
    { id: 10, name: 'COURSE 1001: Data Structures', members: 130 },
    { id: 11, name: 'COURSE 1101: Web Development', members: 140 },
    { id: 12, name: 'COURSE 1201: Mobile App Development', members: 150 },
    { id: 13, name: 'COURSE 1301: Cloud Computing', members: 85 },
    { id: 14, name: 'COURSE 1401: Cyber Security', members: 92 },
    { id: 15, name: 'COURSE 1501: Computer Networks', members: 78 },
  ];

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity key={item.id} style={styles.courseItem}>
      <View style={styles.courseTextContainer}>
        <ThemedText style={styles.courseName}>{item.name}</ThemedText>
        <ThemedText style={styles.courseMembers}>
          Active members: {item.members}
        </ThemedText>
      </View>
      <IconSymbol name="chevron-right" size={24} style={styles.chevronIcon} />
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <IconSymbol name="menu" size={24} style={styles.icon} />
          <ThemedText style={styles.title}>Course Group Chats</ThemedText>
          <IconSymbol name="search" size={24} style={styles.icon} />
        </View>
      </SafeAreaView>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by course code or name"
          placeholderTextColor="#888"
        />
      </View>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem}>
          <IconSymbol name="home" size={24} style={styles.navIcon} />
          <ThemedText style={styles.navText}>Home</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <IconSymbol name="message-circle" size={24} style={styles.navIconActive} />
          <ThemedText style={styles.navTextActive}>Chats</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <IconSymbol name="compass" size={24} style={styles.navIcon} />
          <ThemedText style={styles.navText}>Discover</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <IconSymbol name="user" size={24} style={styles.navIcon} />
          <ThemedText style={styles.navText}>Profile</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  icon: {
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  courseTextContainer: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  courseMembers: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  chevronIcon: {
    color: '#888',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    color: '#888',
  },
  navIconActive: {
    color: '#000',
  },
  navText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default CourseGroupChatsScreen;
