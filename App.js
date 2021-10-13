import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Name = (props) => {
  if (props.fullname) {
    return (
      <>
        <View style={{ flexDirection: 'row', backgroundColor: 'red' }}>
          <Text style={styles.text}>{props.fullname.fname}</Text>
          <Text style={styles.text}>{props.fullname.lname}</Text>
        </View>
      </>
    )
  } else {
    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Text style={{ fontSize: 22, color: 'red'}}>Name is not found!</Text>
      </View>
    )
  }
}

class Age extends React.Component {
  render() {
    return (
      <View>
        <Text>Age: {this.props.value}</Text>
      </View>
    )
  }
}

const App = () => {
  const obj = { fname: "Zaheer", lname: "sani" }
  return (
    <View style={styles.container}>
      <Name fullname={obj} />
      <Name />
      <Age value={34} />
      <StatusBar style="auto" />
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