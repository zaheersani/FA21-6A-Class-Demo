import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [isStarted, setStart] = React.useState(false)
  const btnText = isStarted ? "Next" : "Start Here!"
  const msg = <Text style={{ fontSize: 26 }}>Hi, I am Zaheer</Text>
  return (
    <View style={styles.container}>
      {isStarted ? msg : null}
      <Button title={btnText} onPress={ () => setStart(true)}/>
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