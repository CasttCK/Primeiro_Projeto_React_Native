/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image } from 'react-native';
import logo from '../../../Assets/IMG/logo.png';
import like from '../../../Assets/IMG/like.png';
import igtv from '../../../Assets/IMG/igtv.png';

import styles from './style';


const Header = () => {
    return (
        <View style={styles.header}>
           <View style={styles.logo}>
                <Image
                    source= {logo}
                    style= {styles.logoImage}
                />
           </View>
           <View style={styles.actions}>
                <Image
                    source= {like}
                    style= {styles.likeImage}
                />
                <Image
                    source= {igtv}
                    style= {styles.igtvImage}
                />
           </View>
        </View>
    );
};

export default Header;