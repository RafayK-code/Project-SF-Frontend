import PageBackButton from "@/components/PageBackButton"
import { StyleSheet, Text, TouchableOpacity, View, Image, useWindowDimensions } from "react-native"
import GroupSelectMemberList from "../components/GroupSelectComponents/GroupSelectMemberList"
import { Member } from "../components/GroupSelectComponents/GroupSelectMember"
import FloatingProfiles from "../components/GroupSelectComponents/FloatingProfiles"

interface GroupChat {
    name: String
    description: String
    maxMembers: number,
    membersCount: number,
    requestToJoin: boolean,
    dateOfCreation: number,
    members: Member[]
}

function GroupSelectScreen() {
    const currentGroupChat: GroupChat = {
        name: "Cool Kids Group Chat",
        description: "Description for cool kids group chat, omg such a long text this is needs to fit",
        maxMembers: 50,
        membersCount: 12,
        requestToJoin: false,
        dateOfCreation: 0,
        members: testmembers
    }

    const getDateOfCreation = () => {
        const date = new Date(currentGroupChat.dateOfCreation)

        return date.toDateString()
    }
    const goBack = () => {
        // Called to go back
    }
    const joinGroup = () => {
        // Called when user tries to join group
    }

    const screenHeight = useWindowDimensions().height
    return (
        <>
            <View style={styles.container}>

                {/* Back Arrow */}
                <View style={{ position: "absolute", top: "25%", left: 30 }}>
                    <PageBackButton onClick={goBack}></PageBackButton>
                </View>

                {/* Profile Picture */}
                <View style={styles.profile}>
                    <Image></Image>
                </View>


                {/* Member Amounts */}
                <Text style={styles.groupMemberCount}>{currentGroupChat.membersCount + '/' + currentGroupChat.maxMembers}</Text>

                {/* Group Chat Name */}
                <Text style={styles.groupName}>{currentGroupChat.name}</Text>

                {/* Date Of Creation */}
                <Text style={styles.dateOfCreation}>{"Date of Creation: " + getDateOfCreation()}</Text>

                {/* Description */}
                <Text style={styles.description}>{currentGroupChat.description}</Text>

                {/* Member List */}
                <Text style={styles.memberListTitle}>Member List</Text>
                <GroupSelectMemberList members={currentGroupChat.members}></GroupSelectMemberList>

                {/* Join Button */}
                <TouchableOpacity onPress={joinGroup}>
                    <Text style={styles.joinButton}>{currentGroupChat.requestToJoin ? "Request To Join" : "Join Now"}</Text>
                </TouchableOpacity>

                {/* Floating Profiles */}
                <FloatingProfiles></FloatingProfiles>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F3E8",
        paddingBottom: 50,
    },
    profile: {
        backgroundColor: "#3D404A",
        borderRadius: 10000,
        width: 180,
        aspectRatio: 1 / 1,
        margin: 20,
    },
    groupName: {
        fontSize: 25,
        fontWeight: 800,
        paddingTop: 7
    },
    dateOfCreation: {
        fontSize: 11,
        paddingBottom: 7,
        fontStyle: "italic",
        fontWeight: 300
    },
    description: {
        fontSize: 15,
        width: "65%",
        fontWeight: 400,
        textAlign: "center",
        padding: 10,

    },
    groupMemberCount: {
        backgroundColor: "#F4D84C",
        fontWeight: "700",
        borderRadius: 100,
        padding: 9,
        fontSize: 10
    },
    memberListTitle: {
        fontWeight: 700,
        fontSize: 20
    },
    joinButton: {
        color: "#F7F3E8",
        fontSize: 17,
        fontWeight: 700,
        paddingVertical: 12,
        width: 220,
        backgroundColor: "#193C30",
        borderRadius: 18,
        textAlign: "center",
        margin: 10
    }
})

export default GroupSelectScreen

const testmembers: Member[] = [
    {
        name: "member 1",
        online: true
    },
    {
        name: "member 1",
        online: false
    },
    {
        name: "member 1",
        online: false
    },
    {
        name: "member 1",
        online: true
    },
    {
        name: "member 1",
        online: false
    },
    {
        name: "member 1",
        online: false
    },
    {
        name: "member 1",
        online: true
    },
    {
        name: "member 1",
        online: false
    },
    {
        name: "member 1",
        online: true
    }
]