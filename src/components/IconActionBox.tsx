import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconActionBoxProps {
  onPress: () => void;
  icon: string;
  text?: string | number;
  iconColor?: string;
}

export const IconActionBox = ({
  onPress,
  icon,
  text,
  iconColor,
}: IconActionBoxProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      }}>
      <Icon name={icon} size={30} color={iconColor} />
      <Text style={styles.likes}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  likes: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
