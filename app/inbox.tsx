import { ScrollView, StyleSheet, View } from "react-native";

import InboxHeader from "../components/InboxComponents/InboxHeader";
import InboxFilter from "../components/InboxComponents/InboxFilter";
import MessageThread from "../components/InboxComponents/MessageThread";
import { useState } from "react";

export interface MessageThreadInfo {
    label: string
    mostRecentMessage: string
    timeMessageSent: number
    read: boolean,
    isDirectMessage: boolean,
}

function Inbox() {
    // the search key
    const [searchKey, setSearchKey] = useState("")

    //change this to a hook or how ever we get the message data
    const messageData: MessageThreadInfo[] = testData


    //this functions sorts the message threads
    //shows most recent and unread first
    const getMessageThreads = (): MessageThreadInfo[] => {
        const messageData: MessageThreadInfo[] = getSearchKeyMatchedThreads()

        //filters it into read and unread threads
        var readThreads = messageData.filter((data: MessageThreadInfo) => { return data.read == true })
        var unreadThreads = messageData.filter((data: MessageThreadInfo) => { return data.read == false })

        //sorts by how recent the message is
        readThreads = readThreads.sort((a: MessageThreadInfo, b: MessageThreadInfo) => {
            return b.timeMessageSent - a.timeMessageSent
        })

        unreadThreads = unreadThreads.sort((a: MessageThreadInfo, b: MessageThreadInfo) => {
            return b.timeMessageSent - a.timeMessageSent
        })

        //combines them together
        let result = unreadThreads.concat(readThreads)

        return result
    }

    const getSearchKeyMatchedThreads = (): MessageThreadInfo[] => {
        //this is where the message Data should come from
        var data: MessageThreadInfo[] = messageData
        var result: MessageThreadInfo[] = []

        //if the key is dms then return all the dms
        if (searchKey == "Direct Messages") {
            data.forEach((thread: MessageThreadInfo) => {
                if (thread.isDirectMessage) {
                    result.push(thread)
                }
            })
            return result
        } else {
            //returns all the threads where their label is contains the search key
            data.forEach((thread: MessageThreadInfo) => {
                if (thread.label.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())) {
                    result.push(thread)
                }
            })
            return result
        }
    }

    const getFilters = (): string[] => {
        //scraps through all the message treads and makes the filters
        var filters: string[] = ["Direct Messages"]

        //looks at all threads and if it is not in the filters already add it, makes sure 
        // its not a dm too
        messageData.forEach((thread: MessageThreadInfo) => {
            if (!filters.includes(thread.label) && !thread.isDirectMessage) {
                filters.push(thread.label)
            }
        })

        return filters
    }


    return (
        <>
            <View style={styles.container} >
                {/* The Header, where the back arrow and title is*/}
                <InboxHeader></InboxHeader>

                {/* Search section, contains the search bar and preset filters*/}
                <InboxFilter filterNames={getFilters()} searchKey={searchKey} setSearchKey={setSearchKey}></InboxFilter>

                {/* The main messages threads section*/}
                <ScrollView style={styles.threadsContainer}>
                    {
                        getMessageThreads().map((thread: MessageThreadInfo, index: number) => {
                            return <MessageThread
                                label={thread.label}
                                mostRecentMessageContent={thread.mostRecentMessage}
                                timeMessageSent={thread.timeMessageSent}
                                read={thread.read}
                                key={index}
                            >
                            </MessageThread>
                        })
                    }
                </ScrollView>

            </View>
        </>
    )
}
export default Inbox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F3E8",
    },
    threadsContainer: {
    }
})

const testfilters = ["Direct Messages", "COMPSCI 2211", "PHIL 2073", "STATS 2244", "COMPSCI 1027"]

// [31556952000, 2629746000, 604800000, 86400000, 3600000, 60000, 1000]
const testData: MessageThreadInfo[] = [
    {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now(),
        read: false,
        isDirectMessage: false,
    }, {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up, this one is long to test how long text react",
        timeMessageSent: Date.now() - 31556952000,
        read: false,
        isDirectMessage: false,
    },
    {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now() - 2629746000,
        read: false,
        isDirectMessage: false,
    },
    {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now() - 604800000,
        read: true,
        isDirectMessage: false,

    },
    {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now() - 86400000,
        read: true,
        isDirectMessage: false,
    },
    {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now() - 3600000,
        read: false,
        isDirectMessage: false,
    },
    {
        label: "Lucas Vanderwielen",
        mostRecentMessage: "yooo whats going on",
        timeMessageSent: Date.now() - 60000,
        read: false,
        isDirectMessage: true,
    },
    {
        label: "Stats 1020",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now() - 1000,
        read: true,
        isDirectMessage: false,
    },
    {
        label: "COMPSCI 2022",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now(),
        read: true,
        isDirectMessage: false,
    },
    {
        label: "COMPSCI 1027",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now(),
        read: false,
        isDirectMessage: false,
    },
    {
        label: "Julian Laxman",
        mostRecentMessage: "you where are we meeting up",
        timeMessageSent: Date.now(),
        read: false,
        isDirectMessage: true,
    }
]

