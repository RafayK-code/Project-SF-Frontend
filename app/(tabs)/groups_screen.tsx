import { StyleSheet, Platform, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

const CourseGroupChatsScreen = () => {
  const courses = [
    { id: 1, name: 'COURSE 101: Introduction', members: 120 },
    { id: 2, name: 'COURSE 201: Intermediate Studies', members: 98 },
    { id: 3, name: 'COURSE 301: Advanced Topics', members: 75 },
    { id: 4, name: 'COURSE 401: Specialization', members: 53 },
  ];

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <IconSymbol name="menu" size={24} style={styles.icon} />
        <ThemedText style={styles.title}>Course Group Chats</ThemedText>
        <IconSymbol name="search" size={24} style={styles.icon} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by course code or name"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.listContainer}>
        {courses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseItem}>
            <View style={styles.courseTextContainer}>
              <ThemedText style={styles.courseName}>{course.name}</ThemedText>
              <ThemedText style={styles.courseMembers}>
                Active members: {course.members}
              </ThemedText>
            </View>
            <IconSymbol name="chevron-right" size={24} style={styles.chevronIcon} />
          </TouchableOpacity>
        ))}
      </View>
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
