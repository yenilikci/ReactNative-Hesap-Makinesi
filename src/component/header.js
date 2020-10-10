import React, {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default class Header extends Component{
    render(){

        const {header,headerText} = styles;

        return(
            <View style={header}>
                <Text style={headerText}>{this.props.headerText}</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
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
        fontSize:25,
        textAlign: 'center'
      }
})