import React from "react";
import { StyleSheet, Text, View } from "react-native";



type TitleProps = {
    title: string
}


const Title = ({title}: TitleProps) : JSX.Element => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        borderBottomWidth: 2,
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        paddingRight: 20,
        color: '#333333',
        fontFamily: 'RobotoSlab-VariableFont_wght',

    },
    container: {
        paddingBottom: 25,
        paddingTop: 10,
        backgroundColor: '#cfe8d3',
        
    },
})

export default Title;