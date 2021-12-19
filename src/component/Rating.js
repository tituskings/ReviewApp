import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Rating = () => {
    const filledStars = Maths.floor(rating/2);
    const maxStars = Array(5 - filledStars).fill('staro');
    const r = [...Array(filledStars).fill('star'), ...maxStars];
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({})
