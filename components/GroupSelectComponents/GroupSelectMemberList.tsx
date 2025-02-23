import { ScrollView, StyleSheet, View } from "react-native"
import GroupSelectMember, { Member } from "./GroupSelectMember"

interface GroupSelectMemberList {
    members: Member[]
}
function GroupSelectMemberList(props: GroupSelectMemberList) {

    const sortedMemberList = () => {
        const online = props.members.filter((mem: Member) => { return mem.online })
        const offline = props.members.filter((mem: Member) => { return !mem.online })

        return online.concat(offline)
    }

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    {
                        sortedMemberList().map((member: Member, index: number) => {
                            return (
                                <GroupSelectMember key={index} name={member.name} online={member.online}></GroupSelectMember>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FEFAED",
        width: "45%",
        height: 100,
        margin: 10
    }
})

export default GroupSelectMemberList