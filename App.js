import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MainComp = () => {
  const [getNum, setNum] = React.useState("0")
  const display = (num) => {
    // console.log(num)
    getNum == 0 ? setNum(num) : setNum(getNum + num)
  }
  return (
    <View style={{
      width: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
    }}>
      <Text style={{fontSize: 34, color: 'white', alignSelf: 'flex-end', paddingRight: 10}}>{getNum}</Text>
      <View style={
        {
          flexDirection: 'row',
          width: '50%',
          backgroundColor: 'green',
          justifyContent: 'space-between',
          padding: 10,
          margin: 10
        }}>
        <View style={{flex: 1, backgroundColor: 'grey', padding:10}}>
          <Button title="1" onPress={() => display('1')} />
        </View>
        <View style={{ height: '100%', flex: 1 }}>
          <Button title="2" onPress={() => display('2')} />
        </View>
        <View style={{ height: '100%', flex: 1 }}>
          <Button title="3" onPress={() => display('3')} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="4" onPress={() => { }} />
        <Button title="5" onPress={() => { }} />
        <Button title="6" onPress={() => { }} />
      </View>
    </View>
  );
}

const StartComp = () => {
  return (
    <View>
      <Button title="Start Here!" onPress={() => { }} />
    </View>
  );
}

const App = () => {
  const [isStarted, setStart] = React.useState(false)
  return (
    <View style={styles.container}>
      {!isStarted && <Button title="Start Here!" onPress={() => setStart(true)} />}
      {isStarted && <MainComp />}
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 28,
      color: '#897'
    }
  }
);

export default App;