// AddTodoScreen.tsx
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {display} from '../utils';
import {NavigationProp} from '@react-navigation/native';

interface AddTodoScreenProps {
  navigation: NavigationProp<any>;
 route: any;
}
const AddTodoScreen: React.FC<AddTodoScreenProps> = ({
  navigation,
 route,
}) => {
  const {handleAddTodo} = route.params;
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (): void => {
    handleAddTodo(name, description);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={(): void => navigation.goBack()}>
          <Ionicon name="chevron-back-outline" size={40} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Add Todo</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.labelText}>Name</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Input todo name"
            onChangeText={(value: string) => setName(value)}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.labelText}>Description</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Input description"
            onChangeText={(value: string) => setDescription(value)}
            value={description}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonAdd} onPress={handleSubmit}>
        <Text style={styles.addText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    width: display.setWidth(100),
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: display.setWidth(90),
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    fontSize: 16,
  },
  inputText: {
    borderBottomWidth: 2,
    width: display.setWidth(60),
    fontSize: 16,
  },
  buttonAdd: {
    width: display.setWidth(90),
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 20,
    padding: 20,
  },
});

export default AddTodoScreen;
