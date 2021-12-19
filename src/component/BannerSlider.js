import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const BannerSlider = ({data}) => {
    return (
        <View>
            <Image 
                source={data.image}
                style={{
                    width:250,
                     height:150,
                    borderRadius:10
                }}
            />
            <Text>{data.title}</Text>
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({})
