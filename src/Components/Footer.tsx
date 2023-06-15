import React from "react";
import { StyleSheet, Text, View } from "react-native";

type FooterProps = {
    prop: string
}

const Footer = ({prop}:FooterProps):JSX.Element => {

    return(
        <View style={styles.footer}>
            <Text style={styles.text}>
                {prop}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: 35,
        borderTopWidth: 1,
        backgroundColor: "#292929",
        borderTopColor: "#444444",
        paddingLeft: 10,
        paddingTop: 5,
    },
    text: {
        fontSize: 15,
        color: "#dddddd",
    }
})

export default Footer;