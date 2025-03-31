import { useRouter } from "expo-router"
import { TouchableOpacity, View, Text, StyleSheet, TextInput } from "react-native"
import { Input } from "../ui/Input"
import { useThemeColor } from "@/hooks/useThemeColor"
import { SearchIcon } from "../InboxComponents/InboxFilter"

interface HomeSearchSectionProps {
    query: string
    setQuery: (newQuery: string) => void
}

function HomeSearchSection(props: HomeSearchSectionProps) {
    const router = useRouter()
    const textColor = useThemeColor({}, "text");


    const navigateToProfile = () => {
        console.log("Navigating to Profile Page");
        router.push("/profile");
    };


    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBarContainer}>
                <SearchIcon></SearchIcon>
                <TextInput
                    style={styles.input}
                    value={props.query}
                    onChangeText={text => props.setQuery(text)}
                    placeholder="Search Inbox"
                    placeholderTextColor="#3D404AA0"
                ></TextInput>
            </View>
            <TouchableOpacity
                onPress={navigateToProfile}
                style={styles.profileButton}
            >
                <View style={styles.profileButton}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        display: "flex",
        flex: 1
    },
    searchContainer: {
        flexDirection: "row",
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 10,

    },
    searchInput: {
        flex: 1,
        marginRight: 8,
    },
    profileButton: {
        backgroundColor: "#3D404A",
        padding: 12,
        borderRadius: 100,
    },
    searchBarContainer: {
        flexDirection: "row",
        flex: 1,
        padding: 8,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#3D404A",
        borderRadius: 13,
        backgroundColor: "#FDFBF1",
        marginHorizontal: 10
    },
    input: {
        fontSize: 18,
    }
});

export default HomeSearchSection
