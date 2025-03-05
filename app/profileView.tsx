import { SafeAreaView, StyleSheet, View } from "react-native"
import GroupCreateButton from "../components/GroupCreateScreenComponents/groupCreateButton"
import PageBackButton from "@/components/PageBackButton"
import { useRouter } from "expo-router"

function ProfileView() {

    const onChangeCoverImage = () => {

    }
    const onGoBack = () => {
        router.back()
    }
    const router = useRouter();
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ position: "absolute", left: "5%", top: "10%" }}>
                    <PageBackButton onClick={onGoBack} size={40}></PageBackButton>
                </View>

                <View style={styles.profile}></View>

                <GroupCreateButton text="Change Cover Image" onClick={onChangeCoverImage}></GroupCreateButton>
                <GroupCreateButton text="Go Back" onClick={onGoBack} color="#F4D84C" textColor="#3D404A"></GroupCreateButton>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#F7F3E8"
    },
    profile: {
        width: 250,
        height: 250,
        backgroundColor: "#193C30",
        borderRadius: 1000000,
        alignItems: "center",
        justifyContent: "center",
        margin: "50%"
    }
})

export default ProfileView