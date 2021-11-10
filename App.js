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
} from 'react-native';

const ScrollViewDemo = () => {
  var arr = [34, 45, 34, 23, 56, 67, 78, 56, 45, 45, 34, 5, 56, 5, 67];
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ padding: 10 }}
      // horizontal={true}
      >
        {arr.map((i, index) => (
          <Text style={{ fontSize: 45 }}>
            item: {i}, index: {index}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const App = () => {
  var arr = [34, 45, 34, 23, 56, 67, 78, 56, 45, 45, 34, 5, 56, 5, 67];
  const [getText, setText] = React.useState('');
  const [getItems, setItems] = React.useState([
    { data: 'Item 1', key: 1 },
    { data: 'Item 2', key: 3 },
  ]);
  const addItem = () => {
    setItems([...getItems, { data: getText, key: Math.random() }]);
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ fontSize: 16, borderColor: 'blue', borderWidth: 1 }}
          placeholder="Enter Item"
          onChangeText={setText}
        />
        <Button title="Add" onPress={addItem} />
      </View>
      <FlatList
        style={{ paddingTop: 20 }}
        data={getItems}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.key}
            style={{
              backgroundColor: 'red',
              margin: 5,
              padding: 5,
              borderRadius: 15,
              width: 200,
            }}>
            <Text style={{ fontSize: 25 }}>item: {item.data}</Text>
            <Text style={{ fontSize: 25 }}>index: {index}</Text>
            <Text style={{ fontSize: 25 }}>key: {item.key}</Text>
          </TouchableOpacity>
        )}
        // numColumns={2}
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
    paddingTop: 20,
  },
});

export default App;
