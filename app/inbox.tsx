import { ScrollView, StyleSheet, View, Text } from "react-native";

import InboxHeader from "../components/InboxComponents/InboxHeader";
import InboxFilter from "../components/InboxComponents/InboxFilter";
import MessageThread from "../components/InboxComponents/MessageThread";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Chat, useInbox } from "@/hooks/GetHooks/useInbox";
import NoResultLabel from "@/components/NoResultView";
import { useInboxContext } from "@/hooks/Contexts/InboxContext";

// if username is defined then courseCode and threadName should be undefined
// if courseCode or threadName are defined both have to be defined and username needs to be undefined


function Inbox() {
  const router = useRouter();
  const { userId } = useLocalSearchParams<{ userId: string }>();

  const inbox = useInboxContext()


  // the search key
  const [searchKey, setSearchKey] = useState("");
  const [activeFilter, setActiveFilter] = useState("");




  //this functions sorts the message threads
  //shows most recent and unread first
  const getMessageThreads = (): Chat[] => {
    const messageData: Chat[] = getSearchKeyMatchedThreads();

    //filters it into read and unread threads
    var readThreads = messageData //messageData.filter((data: Chat) => {
    //   return data.read == true;
    // });
    var unreadThreads: Chat[] = [] //messageData.filter((data: Chat) => {
    //   return data.read == false;
    // });

    //sorts by how recent the message is
    readThreads = readThreads.sort(
      (a: Chat, b: Chat) => {
        if (a.latest_message && b.latest_message) {
          return new Date(a.latest_message.create_ts).getTime() - new Date(b.latest_message.create_ts).getTime();
        }
        return 0;
      }
    );

    unreadThreads = unreadThreads.sort(
      (a: Chat, b: Chat) => {
        if (a.latest_message && b.latest_message) {
          return new Date(a.latest_message.create_ts).getTime() - new Date(b.latest_message.create_ts).getTime();
        }
        return 0;
      }
    );

    //combines them together
    let result = unreadThreads.concat(readThreads);

    return result;
  };

  const getSearchKeyMatchedThreads = (): Chat[] => {
    //this is where the message Data should come from
    var data: Chat[] = getFilterMatchedThreads();
    var result: Chat[] = [];

    //if the key is dms then return all the dms
    if (searchKey == "Direct Messages") {
      data.forEach((thread: Chat) => {
        if (thread.type == "DIRECT") {
          result.push(thread);
        }
      });
      return result;
    } else {
      //returns all the threads where their label is contains the search key
      data.forEach((thread: Chat) => {
        const searchInCourseCode = compareToSearchKey(thread.course_name);
        const searchInUsername = compareToSearchKey(thread.other_user != undefined ? thread.other_user.name : undefined);
        const searchInThreadName = compareToSearchKey(thread.name);

        if (searchInCourseCode || searchInThreadName || searchInUsername) {
          result.push(thread);
        }
      });
      return result;
    }
  };
  const getFilterMatchedThreads = (): Chat[] => {
    const threads: Chat[] = inbox.chats;
    //If no filter return all
    if (activeFilter == "") {
      return threads;
    }
    const result: Chat[] = [];

    // if were filtering dms then look to see if username is defined
    if (activeFilter == "Direct Messages") {
      threads.forEach((thread: Chat) => {
        if (thread.type == "DIRECT") {
          result.push(thread);
        }
      });
      return result;
    }

    // only returns one with the courseCode == the current filter
    threads.forEach((thread: Chat) => {
      if (thread.course_name == activeFilter) {
        result.push(thread);
      }
    });
    return result;
  };
  const compareToSearchKey = (key: string | undefined): boolean => {
    if (key == undefined) {
      return false;
    }
    const lowerKey: string = key.toLowerCase();
    const lowerSearchKey: string = searchKey.toLowerCase();

    return lowerKey.includes(lowerSearchKey);
  };

  const getFilters = (): string[] => {
    //scraps through all the message treads and makes the filters
    var filters: string[] = ["Direct Messages"];

    //looks at all threads and if it is not in the filters already add it, makes sure
    // its not a dm too
    inbox.chats.forEach((thread: Chat) => {
      if (thread.type == "GROUP") {
        if (!filters.includes(thread.course_name)) {
          filters.push(thread.course_name);
        }
      }
    });

    return filters;
  };

  return (
    <>
      <View style={styles.container}>
        {/* The Header, where the back arrow and title is*/}
        <InboxHeader></InboxHeader>

        {/* Search section, contains the search bar and preset filters*/}
        <InboxFilter
          filterNames={getFilters()}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          setActiveFilter={setActiveFilter}
        ></InboxFilter>

        {/* The main messages threads section*/}
        <ScrollView style={styles.threadsContainer} showsVerticalScrollIndicator={false}>
          {getMessageThreads().map(
            (thread: Chat, index: number) => {
              const threadLabel: string = ((): string => {
                if (thread.type == "GROUP") {
                  return thread.name;
                } else {
                  return thread.other_user.name
                }
              })();
              return (
                <MessageThread
                  label={threadLabel}
                  mostRecentMessageContent={thread.latest_message ? thread.latest_message.content : ""}
                  timeMessageSent={thread.latest_message ? new Date(thread.latest_message.create_ts).getTime() : new Date(thread.create_ts).getTime()}
                  read={true}
                  key={index}
                  chatId={thread.id}
                ></MessageThread>
              );
            }
          )}
          {getMessageThreads().length == 0 ? <NoResultLabel></NoResultLabel> : undefined}
        </ScrollView>
      </View>
    </>
  );
}
export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F3E8",
  },
  threadsContainer: {},

});

// const testfilters = [
//   "Direct Messages",
//   "COMPSCI 2211",
//   "PHIL 2073",
//   "STATS 2244",
//   "COMPSCI 1027",
// ];

// [31556952000, 2629746000, 604800000, 86400000, 3600000, 60000, 1000]
// const testData: Chat[] = [
//   {
//     threadName: "Compute sciences gc",
//     mostRecentMessage: "you where are we meeting up",
//     timeMessageSent: Date.now(),
//     read: false,
//     courseCode: "CS1027",
//   },
//   {
//     threadName: "cool cs chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: false,
//     courseCode: "CS1027",
//   },
//   {
//     threadName: "differetn cs chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: true,
//     courseCode: "CS1027",
//   },
//   {
//     threadName: "another cs chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: false,
//     courseCode: "CS1027",
//   },
//   {
//     threadName: "stats chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: true,
//     courseCode: "STATS2010",
//   },
//   {
//     threadName: "cooler stats chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: false,
//     courseCode: "STATS2010",
//   },
//   {
//     threadName: "cool cs chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: true,
//     courseCode: "CS1027",
//   },
//   {
//     threadName: "doop phil chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: true,
//     courseCode: "PHIL1020",
//   },
//   {
//     threadName: "another phil chat",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: false,
//     courseCode: "PHIL1020",
//   },
//   {
//     username: "Lucas Vanderwielen",
//     mostRecentMessage:
//       "you where are we meeting up, this one is long to test how long text react",
//     timeMessageSent: Date.now() - 31556952000,
//     read: false,
//   },
//   {
//     username: "Julian Laxman",
//     mostRecentMessage: "you where are we meeting up",
//     timeMessageSent: Date.now(),
//     read: true,
//   },
// ];
