/* eslint-disable prettier/prettier */
import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./style";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({handleNavigation, iconName, screenTitle}) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderContainer}>
                <TouchableOpacity 
                    style={styles.iconButton}
                    onPress={handleNavigation}
                >
                    <FontAwesome name={iconName} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{screenTitle}</Text>
            </View>
            <View style={styles.borderContainer}>
                <TouchableOpacity style={styles.imageButton}>
                    <Image 
                        source={{ uri: 'https://gazetadoriopardo.com.br/wp-content/uploads/2019/03/gatos-de-interior.jpg'}} 
                        style={styles.imageButton}
                        resizeMode='cover'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Header;