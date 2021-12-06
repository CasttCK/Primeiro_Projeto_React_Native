/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList} from 'react-native';

function Feed() {
    const posts = [
        {
            id: '1',
        },
    ];

    function renderItem(){
        return <Text>Hello</Text>;
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
