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

    pictureOptions:{
        
    },
  
    userPicture:{
      width: '100%',
      height: 400,
    },
  
    appHeader:{
      
    },

});

export default styles;