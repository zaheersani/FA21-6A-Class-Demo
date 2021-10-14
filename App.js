import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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

const Counter = () => {
  const [getCounter, setCounter] = React.useState(0)
  // var count = 10
  const inc = () => {
    setCounter(getCounter + 1)
    // count++
    // console.log(count)
  }
  return (
    <View style={{flexDirection: 'row', width: '20%', justifyContent: 'space-between'}}>
      <Button title='+' onPress={inc} />
      <Text style={{ fontSize: 24 }}>{ getCounter }</Text>
      <Button
        title='-'
        onPress={() => setCounter(getCounter - 1)}
      />
    </View>
  )
}

class CounterClass extends React.Component {
  constructor() {
    super()
    this.state = { counter: 10 }
  }
  render() {
    return (
      <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between' }}>
        <Button
          title='+'
          color='red'
          onPress={
            () => this.setState({ counter: this.state.counter+1 })
          } />
        <Text style={{ fontSize: 24 }}>{this.state.counter}</Text>
        <Button
          title='-'
          color='red'
          onPress={() => {}}
        />
      </View>
    )
  }
}

const App = () => {
  const obj = { fname: "Zaheer", lname: "sani" }
  return (
    <View style={styles.container}>
      <Text>Function Based</Text>
      <Counter />
      <Text>Class Based</Text>
      <CounterClass />
      {/* <Name fullname={obj} />
      <Name />
      <Age value={34} />
      <StatusBar style="auto" /> */}
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