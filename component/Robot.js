import React, {Component} from 'react'
import {Image, View} from 'react-native'

export default class Robot extends Component {
    render() {
        const imageSource = {
            imageUrl: {
                uri: "https://anhdephd.com/wp-content/uploads/2017/05/hinh-nen-phim-angry-bird-dep-nhat-585x390.jpg"
            },
            style: {
                width: 500,
                height: 500
            }
        };

        return (
            <View>
                <Image source={imageSource.imageUrl}
                       style={imageSource.style}/>
            </View>
        );
    }

}