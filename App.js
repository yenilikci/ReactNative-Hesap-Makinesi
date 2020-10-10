import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './src/component/header';
import Footer from './src/component/footer';  

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: 0
    }

    this.sum = this.sum.bind(this);
    this.deduct = this.deduct.bind(this);
    this.mult = this.mult.bind(this);
    this.div = this.div.bind(this);

  }

  sum(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    const result = number1 + number2;
    this.setState({
      result: result
    })
  }

  deduct(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    const result = number1 - number2;
    this.setState({
      result: result
    })
  }
  
  mult(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    const result = number1 * number2;
    this.setState({
      result: result
    })
  }

  div(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    const result = number1 / number2;
    this.setState({
      result: result
    })
  }

  render(){
  return (
    <View style={styles.container}>  

      <Header headerText="Hesap Makinesi"/>

      <View style={styles.contentWrapper}>
        <TextInput 
        style={styles.input}
            placeholder = 'İlk Sayı'
            onChangeText = {(text) => {
               this.setState({
                 input1: text
               })
            }}
            value = {this.state.input1}
        />

        <View style={styles.buttonWrapper}>

            <View style={styles.button}>
            <Button onPress={this.sum}
              color="#8aaa79"
              title= "+"
            />
            </View>

            <View style={styles.button}>
            <Button onPress={this.deduct}
              color="#183059"
              title= "-"
            />
            </View>

            <View style={styles.button}>
            <Button onPress={this.mult}
              color="#e08e45"
              title= "*"
            />
            </View>

            <View style={styles.button}>
            <Button onPress={this.div}
              color="#841584"
              title= "/"
            />
            </View>


        </View>

        <TextInput 
        style={styles.input}
            placeholder = 'İkinci Sayı'
            onChangeText = {(text) => {
               this.setState({
                 input2: text
               })
            }}
            value = {this.state.input2}
        />

        <Text style={styles.sampleText}>Sonuç: {this.state.result}</Text>

        <Footer footerText="Muhammed Melih Çelik"/>

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
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button:{
    width: 50,
    height: 50,
    margin: 5,
  },
  input: {
    height: 40,
    fontSize: 20,
    marginBottom: 15,
    borderBottomColor: '#000',
    borderBottomWidth: 2
  },  
  sampleText: {
    height: 30,
    fontSize: 24,
    marginTop: 10,
  },
});
