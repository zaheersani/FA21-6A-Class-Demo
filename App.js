import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const [op, setOp] = React.useState(0)
  const [discount, setDiscount] = React.useState(0)
  const [save, setSave] = React.useState(0)

  React.useEffect(() => {
    console.log("Component Rendered!")
    setSave(op / 100 * discount)
  })

  const calcOp = (n) => {
    setOp(n)
    // setSave(op / 100 * discount)
  }
  
  const calcDiscount = (n) => {
    setDiscount(n)
    // setSave(op / 100 * discount)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // onChangeText={(val) => setOp(val)}
        onChangeText={(val) => calcOp(val)}
        // value={getText}
        placeholder="Original Price"
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.input}
        // onChangeText={(val) => setDiscount(val)}
        onChangeText={(val) => calcDiscount(val)}
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