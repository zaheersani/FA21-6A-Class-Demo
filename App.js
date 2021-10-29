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
  const [getText, setText] = React.useState('0')
  const updateNum = (n) => {
    getText == '0' ? setText(n) : setText(getText + n)
  }
  const msg = "My Button Component"
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>{msg}</Text>
      <Text style={styles.text}>{getText}</Text>

      <TextInput
        style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 5, width: 150, paddingLeft: 10 }}
        onChangeText={(val) => setText(val)}
        // value={getText}
        placeholder="Enter UserName"
        keyboardType={'number-pad'}
      />
      <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-evenly'}}>
        <BtnNumPad text="1" callMe={updateNum} color='black' bgcolor='grey' />
        <BtnNumPad text="2" callMe={updateNum} color='grey' bgcolor='blue' />
        <BtnNumPad text="3" callMe={updateNum} color='green' bgcolor='white' />
      </View>
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