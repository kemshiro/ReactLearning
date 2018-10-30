import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Greeting extends Component {
    render() {
        let helloText = `
        
        Hello ${this.props.name}. How are you!
        
        `;
        return (
            <View>
                <Text>{helloText}</Text>
            </View>
        );
    }
}

export default class MultipleGreeting extends Component {
    render() {
        return (
            <View
                style={{alignItems: 'center'}}>
                <Greeting name="Linh"/>
                <Greeting name="An"/>
                <Greeting name="Binh"/>
                <Greeting name="Hoang"/>
            </View>
        );
    }

}