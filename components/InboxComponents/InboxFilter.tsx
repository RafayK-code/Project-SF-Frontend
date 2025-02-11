import { Dimensions, ScrollView, StyleSheet, TextInput, View } from "react-native"
import SingleFilter from "./SingleFilter"
import { useState } from "react"
import Svg, { Path } from "react-native-svg"
interface InboxFilterProps {
    filterNames: string[],
    searchKey: string,
    setSearchKey: (newKey: string) => void
}

function InboxFilter(props: InboxFilterProps) {
    const [selected, setSelected] = useState(-1)

    const changeSelected = (newSelected: number) => {
        if (selected == newSelected) {
            setSelected(-1)
            props.setSearchKey("")
            return;
        }
        props.setSearchKey(props.filterNames[newSelected])
        setSelected(newSelected)
    }
    const changeOfSearchBar = (newText: string) => {
        props.setSearchKey(newText)
        setSelected(-1)
    }

    const getFilters = () => {

        return props.filterNames
    }

    return (
        <>
            <View style={styles.container}>
                {/* The search bar*/}
                <View style={styles.searchContainer}>
                    <SearchIcon></SearchIcon>
                    <TextInput
                        style={styles.input}
                        value={props.searchKey}
                        onChangeText={text => changeOfSearchBar(text)}
                        placeholder="Search Inbox"
                        placeholderTextColor="#3D404AA0"
                    ></TextInput>
                </View>

                {/* where the filters area*/}
                <ScrollView contentContainerStyle={styles.filterContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        getFilters().map((filter: string, index: number) => {
                            const active = index == selected
                            return <SingleFilter label={filter} index={index} active={active} onClick={changeSelected} key={index}></SingleFilter>
                        })
                    }
                </ScrollView>
            </View>
        </>
    )
}

export default InboxFilter

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        width: "100%"
    },
    input: {
        fontSize: 18,
    },
    filterContainer: {
        padding: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        width: Dimensions.get('window').width,
    },
    searchContainer: {
        flexDirection: "row",
        width: "95%",
        padding: 8,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#3D404A",
        borderRadius: 13,
        backgroundColor: "#FDFBF1"
    },
    searchIcon: {
        width: 50,
        height: 25,
        paddingRight: 10
    }
})

const SearchIcon = () => {
    return (
        <View style={styles.searchIcon}>
            <Svg viewBox="0 0 50 50" width="100%" height="100%">
                <Path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
            </Svg>
        </View>
    )
}