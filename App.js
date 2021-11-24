import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ToastAndroid,
  Keyboard,
} from 'react-native';

const App = () => {
  const [getText, setText] = React.useState('');
  const [getItems, setItems] = React.useState([
    { data: 'Item 1', key: 1 },
    { data: 'Item 2', key: 3 },
  ]);
  const [editingKey, setEditingKey] = React.useState()
  const [isEditing, setIsEditing] = React.useState(false)
  const addItem = () => {
    setItems([...getItems, { data: getText, key: Math.random() }]);
    Keyboard.dismiss();
    setText('')
  };
  
  console.log(editingKey)
  const updateItem = () => {
    setItems(
      getItems.map(i =>
        i.key == editingKey ?
          { data: getText, key: editingKey } :
          i
      )
    )
    setText('')
    setIsEditing(false)
  }
  const deleteItem = (key) => {
    console.log(key)
    setItems(getItems.filter(i=>i.key != key))
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ fontSize: 26, borderBottomColor: 'blue', borderBottomWidth: 2, width: 100, marginRight: 10 }}
          placeholder="Enter Item"
          onChangeText={setText}
          value={getText}
        />
        <Button
          title={isEditing ? "Update" : "Add"}
          onPress={isEditing ? updateItem : addItem}
        />
      </View>
      <FlatList
        style={{ paddingTop: 20, width: '100%' }}
        data={getItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.key}
            style={{
              backgroundColor: 'green',
              margin: 5,
              padding: 5,
              borderRadius: 15,
              width: '95%',
              flexDirection: 'row',
              justifyContent: 'space-between',

            }}
            onPress={() => {
              setText(item.data)
              setEditingKey(item.key)
              setIsEditing(true)
            }}
          >
            <Text style={{ fontSize: 25, color: 'white' }}>{item.data}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'grey',
                width: 30,
                height: 30,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                deleteItem(item.key)
              }}
            >
              <Text style={{color: 'red', fontSize:  20}}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>There is not Data in the List</Text>}
        ListHeaderComponent={<Text style={{ fontSize: 20 }}>TODO Items</Text>}
        ListFooterComponent={
          <Text style={{ fontSize: 20 }}>This is the Footer of FlatList</Text>
        }
        refreshing={false}
        onRefresh={() =>
          ToastAndroid.show('fetching data...', ToastAndroid.SHORT)
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});

export default App;
