import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type ContentProps = {
    value: string
}

const Content = ({value}:ContentProps) :JSX.Element => {

    switch (value) {
// -----------------------------------------
// Home is frontpage thing, no idea what to do really
        case "Home":
            return(
                <View style={styles.content}>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>
                            Home
                        </Text>
                    </ScrollView>
                </View>
            )

// -----------------------------------------
// Search allowing search for all book reviews or something(?) might just not impliment this at all

        case "Search":
            return(
                <View style={styles.content}>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>
                            Search
                        </Text>
                    </ScrollView>
                </View>
            )       

// ----------------------------------------
// My Account section, list of chosen books and general info (thumbnail?), with onPress function to 
// that specific book review/rating etc.

        case "MyAccount":
            return(
                <View style={styles.content}>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>
                            My Account
                        </Text>
                    </ScrollView>
                </View>
            )       

// ------------------------------------------
// About section, instructions additional info etc.
            
        case "About":
            return(
                <View style={styles.content}>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>
                            About
                        </Text>
                    </ScrollView>
                </View>
            )
        default:
            return(
                <View style={styles.content}>
                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>
                            Unhandled exception
                        </Text>
                    </ScrollView>
                </View>
            )
    }
    
}

const styles = StyleSheet.create({
    content: {
        flex:1,
        flexDirection: 'row',
    },
    scroll: {
        paddingTop: 5,
        paddingLeft: 7,
        backgroundColor: 'grey',
        flexGrow: 4,
    },
    side: {
        flexGrow: 0,
        maxWidth: 100,
    },
    text: {
        fontSize: 24,
        fontFamily: 'PTSans-Regular',
    },
})

export default Content