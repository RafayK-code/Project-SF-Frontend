import { ScrollView, StyleSheet, View, Text } from "react-native";

import InboxHeader from "../../components/InboxComponents/InboxHeader";
import InboxFilter from "../../components/InboxComponents/InboxFilter";
import MessageThread from "../../components/InboxComponents/MessageThread";
import { useState } from "react";
import { useRouter } from "expo-router";

// if username is defined then courseCode and threadName should be undefined
// if courseCode or threadName are defined both have to be defined and username needs to be undefined
export interface MessageThreadInfo {
  mostRecentMessage: string;
  timeMessageSent: number;
  read: boolean;
  username?: string;
  courseCode?: string;
  threadName?: string;
}

function Inbox() {
  const router = useRouter();

  // the search key
  const [searchKey, setSearchKey] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  //change this to a hook or how ever we get the message data
  const messageData: MessageThreadInfo[] = testData;

  //this functions sorts the message threads
  //shows most recent and unread first
  const getMessageThreads = (): MessageThreadInfo[] => {
    const messageData: MessageThreadInfo[] = getSearchKeyMatchedThreads();

    //filters it into read and unread threads
    var readThreads = messageData.filter((data: MessageThreadInfo) => {
      return data.read == true;
    });
    var unreadThreads = messageData.filter((data: MessageThreadInfo) => {
      return data.read == false;
    });

    //sorts by how recent the message is
    readThreads = readThreads.sort(
      (a: MessageThreadInfo, b: MessageThreadInfo) => {
        return b.timeMessageSent - a.timeMessageSent;
      }
    );

    unreadThreads = unreadThreads.sort(
      (a: MessageThreadInfo, b: MessageThreadInfo) => {
        return b.timeMessageSent - a.timeMessageSent;
      }
    );

    //combines them together
    let result = unreadThreads.concat(readThreads);

    return result;
  };

  const getSearchKeyMatchedThreads = (): MessageThreadInfo[] => {
    //this is where the message Data should come from
    var data: MessageThreadInfo[] = getFilterMatchedThreads();
    var result: MessageThreadInfo[] = [];

    //if the key is dms then return all the dms
    if (searchKey == "Direct Messages") {
      data.forEach((thread: MessageThreadInfo) => {
        if (thread.username != undefined) {
          result.push(thread);
        }
      });
      return result;
    } else {
      //returns all the threads where their label is contains the search key
      data.forEach((thread: MessageThreadInfo) => {
        const searchInCourseCode = compareToSearchKey(thread.courseCode);
        const searchInUsername = compareToSearchKey(thread.username);
        const searchInThreadName = compareToSearchKey(thread.threadName);

        if (searchInCourseCode || searchInThreadName || searchInUsername) {
          result.push(thread);
        }
      });
      return result;
    }
  };
  const getFilterMatchedThreads = (): MessageThreadInfo[] => {
    const threads: MessageThreadInfo[] = messageData;
    //If no filter return all
    if (activeFilter == "") {
      return threads;
    }
    const result: MessageThreadInfo[] = [];

    // if were filtering dms then look to see if username is defined
    if (activeFilter == "Direct Messages") {
      threads.forEach((thread: MessageThreadInfo) => {
        if (thread.username != undefined) {
          result.push(thread);
        }
      });
      return result;
    }

    // only returns one with the courseCode == the current filter
    threads.forEach((thread: MessageThreadInfo) => {
      if (thread.courseCode == activeFilter) {
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
    messageData.forEach((thread: MessageThreadInfo) => {
      if (thread.courseCode != undefined) {
        if (!filters.includes(thread.courseCode)) {
          filters.push(thread.courseCode);
        }
      }
    });

    return filters;
  };

  const noResultLabel = () => {
    if (getMessageThreads().length == 0) {
      return (
        <>
          <View style={styles.blankSearchContainer}>
            <Text style={styles.blankSearchTitle}>No Results...</Text>
            <Text style={styles.blankSearch}>
              Try refining your search or joining some more chats.
            </Text>
          </View>
        </>
      );
    }
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
        <ScrollView style={styles.threadsContainer}>
          {getMessageThreads().map(
            (thread: MessageThreadInfo, index: number) => {
              const threadLabel: string = ((): string => {
                if (thread.threadName != undefined) {
                  return thread.threadName;
                }

                if (thread.username != undefined) {
                  return thread.username;
                }

                // if the objects is in a invalid format then return
                return "Invalid";
              })();
              return (
                <MessageThread
                  label={threadLabel}
                  mostRecentMessageContent={thread.mostRecentMessage}
                  timeMessageSent={thread.timeMessageSent}
                  read={thread.read}
                  key={index}
                ></MessageThread>
              );
            }
          )}
          {noResultLabel()}
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
  blankSearchTitle: {
    textAlign: "center",
    fontSize: 27,
    fontWeight: 600,
    padding: 5,
    color: "#3D404A",
  },
  blankSearch: {
    textAlign: "center",
    fontSize: 15,
    color: "#3D404A",
  },
  blankSearchContainer: {
    flexDirection: "column",
    padding: "20%",
  },
});

const testfilters = [
  "Direct Messages",
  "COMPSCI 2211",
  "PHIL 2073",
  "STATS 2244",
  "COMPSCI 1027",
];

// [31556952000, 2629746000, 604800000, 86400000, 3600000, 60000, 1000]
const testData: MessageThreadInfo[] = [
  {
    threadName: "Compute sciences gc",
    mostRecentMessage: "you where are we meeting up",
    timeMessageSent: Date.now(),
    read: false,
    courseCode: "CS1027",
  },
  {
    threadName: "cool cs chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: false,
    courseCode: "CS1027",
  },
  {
    threadName: "differetn cs chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: true,
    courseCode: "CS1027",
  },
  {
    threadName: "another cs chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: false,
    courseCode: "CS1027",
  },
  {
    threadName: "stats chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: true,
    courseCode: "STATS2010",
  },
  {
    threadName: "cooler stats chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: false,
    courseCode: "STATS2010",
  },
  {
    threadName: "cool cs chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: true,
    courseCode: "CS1027",
  },
  {
    threadName: "doop phil chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: true,
    courseCode: "PHIL1020",
  },
  {
    threadName: "another phil chat",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: false,
    courseCode: "PHIL1020",
  },
  {
    username: "Lucas Vanderwielen",
    mostRecentMessage:
      "you where are we meeting up, this one is long to test how long text react",
    timeMessageSent: Date.now() - 31556952000,
    read: false,
  },
  {
    username: "Julian Laxman",
    mostRecentMessage: "you where are we meeting up",
    timeMessageSent: Date.now(),
    read: true,
  },
];
