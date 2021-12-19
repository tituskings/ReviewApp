import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const CustomSwitch = ({selectionMode,option1,option2,onSelectionSwitch}) => {
    
    const [getSelectionMode, setSelctionMode] = useState(selectionMode);
    
    const updateSwitchData= (value) => {
        setSelctionMode(value);
        onSelectionSwitch(value)
    }

    return (
        <View style={{
            height:44,
            width:'100%',
            backgroundColor:'#e4e4e4',
            borderRadius: 10,
            borderColor:'#AD4OAF',
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>updateSwitchData(1) }
                style={{
                    flex:1,
                    backgroundColor: getSelectionMode == 1 ? '#4d40af' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent:'center' ,
                    alignItems:'center'
                    }}
            >
                <Text style={{
                    color: getSelectionMode == 1 ? 'white' : '#4d40af',
                    fontSize:14,
                    
                }}
                >{option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={2}
                onPress={()=>updateSwitchData(2) }
                style={{
                    flex:1,
                    backgroundColor: getSelectionMode == 2 ? '#4d40af' : '#e4e4e4',
                    borderRadius: 10,
                    justifyContent:'center' ,
                    alignItems:'center'
                    }}
            >
                <Text style={{
                    color: getSelectionMode == 2 ? 'white' : '#4d40af',
                    fontSize:14,
                    
                }}
                >{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({})
