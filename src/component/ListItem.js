import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { windowWidth } from './Dimension'

const ListItem = ({photo,subtitle,title,isCategory}) => {
    return (
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:20
        }}>
            <View style={{flexDirection:'row', alignItems:'center',flex: 1}}>
                <Image 
                    source={photo}
                    style={{width:55,height:55, borderRadius:10,marginRight:8}}
                />
                <View style={{width:windowWidth - 220}}>
                    <Text style={{
                        color:'#333',
                        fontSize:14
                    }}>{subtitle}</Text>
                    <Text 
                    numberOfLines={1}
                    style={{
                        color:'#333',
                        fontSize:14,
                        textTransform:'uppercase'
                    }}>{title}</Text>
                </View>
            </View>

            <TouchableOpacity style={{
                backgroundColor:'#0aada0',
                padding:10,
                width:110,
                borderRadius:10
            }}>
                <Text style={{
                    color:'#fff',
                    textAlign:'center',
                    fontSize:14
                }}
                >
                    {isCategory == 'No' && 'Quick Review'}
                    {isCategory == 'Yes' && 'View'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})
