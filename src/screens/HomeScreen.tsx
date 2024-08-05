// HomeScreen.tsx
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Seperator, TodoLCard} from '../components';
// import {TodoList} from '../data';
import {Todo} from '../models';
import {display} from '../utils';

const HomeScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const TodoList: Todo[] = [];
  const [filter, setFilter] = useState<string>('');
  const [todolist, setTodolist] = useState<Todo[]>(TodoList);

  // useEffect(() => {
  //   setTodolist(TodoList);
  // }, [TodoList]);

  const handleAddTodo = (name: string, description: string) => {
    if (name.trim() && description.trim()) {
      const date = new Date().toISOString();
      const id = `${date}_${TodoList.length + 1}`;
      const newTodo: Todo = { id, name, description };

      setTodolist((prev:Todo[]):Todo[] => [...prev, newTodo]);
      //TodoList.push(newTodo); 

      navigation.goBack();
    }
  };
  const handleDeleteTodo=(itemId:string)=>{
    const index = todolist.findIndex(item => item.id === itemId);

          
          if (index !== -1) {
            todolist.splice(index, 1);
            setTodolist([...todolist]); 
          }
}

  return (
    <View style={styles.container}>
      <Seperator height={display.setHeight(5)} width={0} />
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.filterTodo}
        onChangeText={(value: string) => setFilter(value)}
        placeholder="Search Todos"
      />
     <FlatList
        data={todolist.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )}
        renderItem={({item, index}) => (
          <TodoLCard 
            todoItem={item} 
            indexItem={index} 
            handleDeleteTodo={handleDeleteTodo} 
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add', { handleAddTodo })}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: display.setWidth(100),
    height: display.setHeight(100),
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  filterTodo: {
    width: display.setWidth(90),
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
