import { useRouter } from "expo-router"
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { Input } from "../ui/Input"
import { useThemeColor } from "@/hooks/useThemeColor"

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
            <View style={styles.searchInput}>
                <Input
                    placeholder="Search for a course"
                    value={props.query}
                    onChangeText={(text) => { props.setQuery(text) }}
                    style={{ backgroundColor: "#fdfaf1" }}
                />
            </View>
            <TouchableOpacity
                onPress={navigateToProfile}
                style={styles.profileButton}
            >
                <Text style={{ color: textColor }}>Profile</Text>
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
    }
});

export default HomeSearchSection
