import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

const BtnNumPad = ({ text, callMe, color, bgcolor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => callMe(text)}
      style={
        {
          backgroundColor: bgcolor ? bgcolor : 'red',
          width: 50,
          height: 50,
          justifyContent: 'center',
          borderRadius: 100,
          elevation: 5,
        }}
    >
      <Text style={{
        color: color ? color : 'white',
        fontSize: 16,
        alignSelf: 'center'
      }}>{text}</Text>
    </TouchableOpacity>
  )
}

const App = () => {
  const [op, setOp] = React.useState(0)
  const [discount, setDiscount] = React.useState(0)
  const [save, setSave] = React.useState(0)
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setOp(val)}
        // value={getText}
        placeholder="Original Price"
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => setDiscount(val)}
        // value={getText}
        placeholder="Discount %"
        keyboardType={'number-pad'}
      />
      <Text style={styles.text}>Original Price: {op}</Text>
      <Text style={styles.text}>Discount %: {discount}</Text>
      <Text style={styles.text}>You Saved: {save}</Text>
      <Text style={styles.text}>Final Price: {op - save}</Text>
      <TouchableOpacity
        onPress={() => setSave(op/100*discount)}
        style={
          {
            marginTop: 10,
            backgroundColor: 'skyblue',
            width: 150,
            height: 50,
            justifyContent: 'center',
            borderRadius: 10,
            elevation: 5,
          }}
      >
        <Text style={{ fontSize: 24, color: 'white', alignSelf: 'center'}}>Calculate</Text>
      </TouchableOpacity>
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
    },
    input: {
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 5,
      width: 150,
      height: 30,
      paddingLeft: 10,
      margin: 5,
      fontSize: 24
    }
  }
);

export default App;