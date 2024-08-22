import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Post} from '../interfaces/interfaces';
import {PostCard} from '../components/PostCard';
import {getPost} from '../api/postsApi';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : Colors.lighter,
  };
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getCurrentPosts = async () => {
      const response = await getPost();
      console.log(JSON.stringify(response, null, 2));
      setPosts(response);
    };
    getCurrentPosts();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
