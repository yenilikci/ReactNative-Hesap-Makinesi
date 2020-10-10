import React, {Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class Footer extends Component{
    
    render(){

        const {footer} = styles;

        return(
            <View style={footer}>
                <Text>{this.props.footerText}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    footer: {
        marginTop: 360,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }
});