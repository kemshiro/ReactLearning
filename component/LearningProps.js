import React from 'react'
import {Text} from 'react-native'

const LearningProps = (props) => (
        <Text>{props.name}</Text>
    );

export default class PropsLearning extends React.Component {
    render() {
        return (
            <LearningProps name={"Linh"}/>
        );
    }

}