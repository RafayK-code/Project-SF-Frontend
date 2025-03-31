import PageBackButton from "@/components/PageBackButton";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import GroupSelectMemberList from "../components/GroupSelectComponents/GroupSelectMemberList";
import { Member } from "../components/GroupSelectComponents/GroupSelectMember";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useChat } from "@/hooks/GetHooks/UseChat";
import { url } from "@/hooks/TestData";
import { useInboxContext, useInboxDispatchContext } from "@/hooks/Contexts/InboxContext";
import { useMessageDispatchContext } from "@/hooks/Contexts/MessagesContext";

interface GroupChat {
  name: String;
  description: String;
  maxMembers: number;
  membersCount: number;
  requestToJoin: boolean;
  dateOfCreation: number;
  members: Member[];
}

function GroupSelectScreen() {
  const router = useRouter();
  const { userId, chatId } = useLocalSearchParams<{ userId: string, chatId: string }>();

  const chat = useChat(Number(chatId))

  const inboxContext = useInboxContext();

  const inboxDispatchContext = useInboxDispatchContext()
  const messagesDispatchContext = useMessageDispatchContext();


  const getDateOfCreation = () => {
    const date = new Date(chat.chat.create_ts);

    return date.toDateString();
  };
  const goBack = () => {
    router.back();
  };
  const joinGroup = () => {
    if (isMember()) {
      return;
    }

    const body = {
      user_id: Number(userId),
      chat_id: Number(chatId)
    }
    console.log(String(body))
    // Called when user tries to join group
    fetch(url + "/create/chat-membership", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => {
        console.log("Chat join status: " + res.status)

        inboxDispatchContext({ type: "RELOAD" })

        messagesDispatchContext({ type: "GETNEWCHATS" })
      })


    router.back();
  };
  const isMember = (): boolean => {
    return inboxContext.chats.findIndex((chat) => {
      return chat.id == Number(chatId)
    }) != -1
  }

  const groupRatio = () => {
    if (chat.chat.member_limit != null) {
      return chat.chat.member_count + "/" + chat.chat.member_limit
    }
    return chat.chat.member_count + " Member" + (chat.chat.member_count != 1 ? "s" : "")
  }

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
        <Text style={styles.groupMemberCount}>
          {groupRatio()}
        </Text>

        {/* Group Chat Name */}
        <Text style={styles.groupName}>{chat.chat.name}</Text>

        {/* Date Of Creation */}
        <Text style={styles.dateOfCreation}>
          {"Date of Creation: " + getDateOfCreation()}
        </Text>

        {/* Description */}
        <Text style={styles.description}>Chats dont have a description</Text>

        {/* Member List */}
        <Text style={styles.memberListTitle}>Member List</Text>
        <GroupSelectMemberList
          members={chat.chat.members.map(member => {
            return {
              name: member.name,
              online: true
            }
          })}
        ></GroupSelectMemberList>

        {/* Join Button */}
        {isMember() ? <Text style={styles.warningText}>{"You are already a member"}</Text> : undefined}
        <TouchableOpacity onPress={joinGroup} style={{ opacity: isMember() ? 0.5 : 1 }}>
          <Text style={styles.joinButton}>
            {!chat.chat.is_public ? "Request To Join" : "Join Now"}
          </Text>
        </TouchableOpacity>

        {/* Floating Profiles
        <FloatingProfiles></FloatingProfiles> */}
      </View>
    </>
  );
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
    paddingTop: 7,
  },
  dateOfCreation: {
    fontSize: 11,
    paddingBottom: 7,
    fontStyle: "italic",
    fontWeight: 300,
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
    fontSize: 10,
  },
  memberListTitle: {
    fontWeight: 700,
    fontSize: 20,
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
    margin: 10,
  },
  warningText: {
    fontSize: 12,
    backgroundColor: "#F4D84C",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 100,
    color: "#3D404A"
  }
});

export default GroupSelectScreen;

const testmembers: Member[] = [
  {
    name: "member 1",
    online: true,
  },
  {
    name: "member 1",
    online: false,
  },
  {
    name: "member 1",
    online: false,
  },
  {
    name: "member 1",
    online: true,
  },
  {
    name: "member 1",
    online: false,
  },
  {
    name: "member 1",
    online: false,
  },
  {
    name: "member 1",
    online: true,
  },
  {
    name: "member 1",
    online: false,
  },
  {
    name: "member 1",
    online: true,
  },
];
