/* eslint-disable prettier/prettier */
import { enumDeclaration } from "@babel/types";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    postHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 17,
    },

    infoUser:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#000',
    },

    postPlace:{},
  
    infoPlace:{
      fontSize: 14,
      color: '#666',
    },

    userPicture:{
      width: '100%',
      height: 400,
    },
  
    actions:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    postActions:{
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
    },

    likeImage:{
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    commentImage:{
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    sendImage:{
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    postSave:{
        width: '9%',
    },

    saveImage:{
        width: 35,
        height: 35,
        padding: 10,
    },
});

export default styles;