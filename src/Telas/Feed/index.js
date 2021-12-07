/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './style';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Header from '../../Components/Header/header';
import options from '../../../Assets/IMG/options.png';
import like from '../../../Assets/IMG/like.png';
import comment from '../../../Assets/IMG/comment.png';
import send from '../../../Assets/IMG/send.png';
import save from '../../../Assets/IMG/save.png';

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
              <Text style={styles.infoPlace}>{post.place}</Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image 
                  source= {options}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image 
              source= {{uri: post.pictureUrl}}
              style= {styles.userPicture}
            />
          </View>
          <View style={styles.actions}>
          <View style={styles.postActions}>
            <Image
              source= {like}
              style= {styles.likeImage}
            />
            <Image
              source= {comment}
              style= {styles.commentImage}
            />
            <Image
              source= {send}
              style= {styles.sendImage}
            />
          </View>
          <View style={styles.postSave}>
            <Image
              source= {save}
              style= {styles.saveImage}
            />
          </View>
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
