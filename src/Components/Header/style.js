/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        elevation: 1.5,
    },
    iconButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageButton: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    borderContainer: { 
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
    }
});

export default styles;