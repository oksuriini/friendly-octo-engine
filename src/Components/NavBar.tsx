import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

type NavBarProps = {
    items: string
    pressHandler: Function
}

const Navbar = ({items, pressHandler}:NavBarProps): JSX.Element => {

    return(
        <View>
            <View style={styles.addbar}>
                <TouchableHighlight style={styles.hightlights} onPress={() => pressHandler("Home")}>
                    <Text style={styles.textstyle}>Home</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.hightlights} onPress={() => pressHandler("Search")}>
                    <Text style={styles.textstyle}>Search</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.hightlights} onPress={() => pressHandler("MyAccount")}>
                    <Text style={styles.textstyle}>My Account</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.hightlights} onPress={() => pressHandler("About")}>
                    <Text style={styles.textstyle}>About</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addbar: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fae7eb',
        width: 'auto',
        borderTopWidth: 2,
        borderBottomWidth: 1,
        borderColor: "#6a6a6a"
    },
    hightlights: {
        height: 25,
        paddingHorizontal: 5,
    },
    textstyle: {
        fontSize: 18,
    }
})

export default Navbar;