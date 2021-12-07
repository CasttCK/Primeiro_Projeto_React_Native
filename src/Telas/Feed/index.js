/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './style';
import {View, Text, FlatList, Image} from 'react-native';

import Header from '../../Components/Header/header';

function Feed() {

  const posts = [
    {
      id: '1',
      user: 'Dolores Fuertes de Barriga',
      place: 'Disney',
      pictureUrl: 'https://maladeaventuras.com/wp-content/uploads/2019/03/IMG_5801-1.jpg',
      likesCount: '',
      descricao: '',
      hashtags: '',
    },
  ];

  function renderItem({item: post}){
      return (
        <View>
          <View style={styles.appHeader}>
            <Header />
          </View>
            <View style={styles.postHeader}>
              <View >
                <Text style={styles.infoUser}>{post.user}</Text>
              </View>
              <View style={styles.postPlace}>
                <Text style={styles.infoPlace}>{post.place}</Text>
              </View>
            </View>
            <View>
              <Image 
               source= {{uri: post.pictureUrl}}
                style= {styles.userPicture}
              />
            </View>
        </View>
      );
  }

  return (
    <View>
      <FlatList
        data= {posts}
        keyExtractor= {(item) => item.id}
        renderItem= {renderItem}
      />
    </View>
  );
}

export default Feed;
