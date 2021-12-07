/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#F1EDE3',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo:{
        justifyContent: 'center',
        width: '50%',
    },

    actions:{
        flexDirection: 'row',
    },

    igtvImage:{
        marginLeft: 15,
    },
});

export default styles;
