import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input1: ''
    }
  }

  render(){
  return (
    <View style={styles.container}>  

      <View style={styles.header}>
          <Text style={styles.headerText}>Hesap Makinesi</Text>
      </View>

      <View style={styles.contentWrapper}>
        <TextInput 
        style={styles.input}
            onChange = {(text) => {
               this.setState({
                 input1: text
               })
            }}
            value = {this.state.input1}
        />
        <Text style={styles.sampleText}>{this.state.input1}</Text>
      </View>

      <StatusBar style="auto" />

    </View>
    );
  }
}
const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: 'column',
  },  
  contentWrapper: {

  },
  header: {
    height:90,
    paddingTop:30,
    shadowColor: '#000000',
    shadowOffset: {width:3 ,height:5}, 
    shadowOpacity: 0.7,
    backgroundColor: '#f5fcff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize:20,
    textAlign: 'center'
  }
});
