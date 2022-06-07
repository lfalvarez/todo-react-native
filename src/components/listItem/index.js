import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export const ListItem = ({item, onHandleDelete, onHandleDone}) => (
<View style={styles.itemView}>
    <Text>{item.title}</Text>
    <TouchableOpacity onPress={() => onHandleDone(item.id)}>
      <Text>{item.done ? "✅" : "☐"}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onHandleDelete(item.id)}>
      <Text>X</Text>
    </TouchableOpacity>
  </View>)