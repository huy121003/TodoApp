import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {Todo} from '../models';
import {display} from '../utils';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { TodoList } from '../data';
interface TodoItem {
  todoItem: Todo;
  indexItem: number;
  handleDeleteTodo: (id: string) => void;
}
const TodoLCard: React.FC<TodoItem> = ({todoItem, indexItem,handleDeleteTodo}) => {


  return (
    <View style={styles.todoItemContainer}>
      <View style={styles.indexNumber}>
        <Text style={styles.indexNumberText}>{indexItem + 1}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.nameText}>{todoItem.name}</Text>
        <Text style={styles.desText}>{todoItem.description}</Text>
      </View>
      <TouchableOpacity
      onPress={()=>handleDeleteTodo(todoItem.id)}>
        <Ionicon name="trash-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default TodoLCard;

const styles = StyleSheet.create({
  todoItemContainer: {
    width: display.setWidth(90),
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indexNumber: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexNumberText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginLeft: 10,
    flex: 1,
  },
  nameText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  desText: {
    fontSize: 20,
  },
});
