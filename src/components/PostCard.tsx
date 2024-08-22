import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Post} from '../interfaces/interfaces';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/es';
import {IconActionBox} from './IconActionBox';

interface PostCardProps {
  post: Post;
}
const {width} = Dimensions.get('window');

export const PostCard = ({post}: PostCardProps) => {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [numberOfLikes, setNumberOfLikes] = useState(post.likes);

  moment.locale('es');
  const relativeTime = moment(post.createdAt).fromNow();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={{uri: post.avatar}} style={styles.avatar} /> */}
        <View style={styles.avatar}>
          <Icon name="person-circle" size={40} color={'#fff'} />
        </View>
        <View>
          <Text style={styles.username}>{post.name}</Text>
          <Text style={styles.caption}>{post.location}</Text>
        </View>
      </View>
      <Image source={{uri: post.image}} style={styles.postImage} />
      <View style={styles.iconsContainer}>
        <View style={styles.iconsInnerContainer}>
          <IconActionBox
            onPress={() => {
              setLiked(!liked);
              setNumberOfLikes(liked ? numberOfLikes - 1 : numberOfLikes + 1);
            }}
            text={numberOfLikes}
            icon={liked ? 'heart' : 'heart-outline'}
            iconColor={liked ? 'red' : '#fff'}
          />
          <IconActionBox
            onPress={() => console.log('Comments')}
            text={post.comments}
            icon={'chatbubble-outline'}
            iconColor="#fff"
          />
          <IconActionBox
            onPress={() => console.log('Share')}
            icon={'share-outline'}
            iconColor="#fff"
          />
        </View>
        <IconActionBox
          onPress={() => setSaved(!saved)}
          icon={saved ? 'bookmark' : 'bookmark-outline'}
          iconColor="#fff"
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.caption}>
          <Text style={styles.username}>{post.name}</Text> {post.description}
        </Text>
        <Text style={styles.caption}>{relativeTime}</Text>
      </View>
      <View style={styles.addCommentsContainer}>
        <Icon name="person-circle" size={40} color={'#fff'} />
        <Text style={styles.caption}>Agrega un comentario...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  username: {
    fontWeight: 'bold',
    color: '#fff',
  },
  postImage: {
    width: width,
    height: width,
  },
  detailsContainer: {
    padding: 10,
    gap: 5,
  },
  caption: {
    color: '#fff',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  iconsInnerContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  addCommentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
