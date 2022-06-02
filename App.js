import { TextInput, View, Button, SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { CustomModal } from './src/components/modal';
import { ListItem } from './src/components/listItem';

const getRenderItem = (onHandleModal) => {
  return ({item}) => (
    <ListItem item={item} onHandleDelete={onHandleModal} />
  )
}

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState();
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleDelete = (id) => {
    setTodoList(todoList => todoList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(false);
  }

  const onHandleModal = (id) => {
    setItemSelected(todoList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  }

  const addTodo = () => {
    if(!!currentTodo) {
      setTodoList((todoList) => [...todoList, 
        {id: Math.random(),
        title: currentTodo}])
    }
    setCurrentTodo("");
  };
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <TextInput
        placeholder='new task' value={currentTodo} onChangeText={(text) => setCurrentTodo(text)}
        style={styles.input}
        />
        <Button
        title="Add"
        onPress={addTodo}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={todoList}
          renderItem={getRenderItem(onHandleModal)}
          keyExtractor={item => item.id}
          style={styles.list}
        />
        <CustomModal
        animationType={'slide'}
        visible={modalVisible}
  
        >
          <View style={styles.modalTitle}>
            <Text>Delete Item?</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.modalMessage}>
            <Text>
              <Text>Sure to delete {itemSelected.title}?</Text>
            </Text>
          </View>
          <View style={styles.modalButton}>
          <TouchableOpacity onPress={() => {onHandleDelete(itemSelected.id)}} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
          
        </CustomModal>
      </SafeAreaView>
    </View>
  );
}


