 import React, { useState } from 'react'
 import { StyleSheet, Text, View,ScrollView,SafeAreaView, ImageBackground,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
 import Feather from 'react-native-vector-icons/Feather'
 import Carousel from 'react-native-snap-carousel'
import { allCategory, mostReviewed, sliderData } from '../Model/data'
import BannerSlider from '../component/BannerSlider'
import { windowWidth } from '../component/Dimension'
import CustomSwitch from '../component/CustomSwitch'
import ListItem from '../component/ListItem'
 
 const HomeScreen = () => {
        const [gamesTab, setGamesTabs] =useState(1)

     const renderBanner = ({item, index}) =>{
        return <BannerSlider data={item} /> 
     }

     const onSelectionSwitch = (value) =>{
        setGamesTabs(value)

     }


     return ( 
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView style={{padding:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20  }}>
                    <Text>Hello Titus</Text>
                    <TouchableOpacity onPress={()=>console.log('it should have a draw navigation')}>

                    <ImageBackground 
                        source={require('../assets/images/pexels1.jpg')}
                        style={{width:35, height: 35}}
                        imageStyle={{borderRadius:25}}
                    />
                    </TouchableOpacity>
                </View>

                <View 
                    style={{
                        flexDirection:'row',
                        borderColor:'#c6c6c6', 
                        borderWidth:1,
                        borderRadius:8,
                        paddingHorizontal:10,
                        alignItems:'center'
                }}>
                    <Feather 
                        name="search" 
                        size={20} 
                        color="#c6c6c6" 
                        style={{marginRight:5}} 
                    />
                    <TextInput placeholder="Search"/>
                </View>

                <View
                    style={{
                        marginVertical:15,
                        flexDirection:'row',
                        justifyContent:'space-between'
                    }}
                >
                    <Text style={{fontSize:16}}>Recent Reviews</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Text style={{color:'#0aada8'}}>See all</Text>
                    </TouchableOpacity>
                </View>

                <Carousel
                        renderItem={renderBanner}
                        sliderWidth={windowWidth - 40}
                        itemWidth={270}
                        data={sliderData}
                        loop={true}
                      />

                <View style={{marginVertical:20}}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="All Category"
                        option2="Most Reviewed"
                        onSelectionSwitch={onSelectionSwitch}
                    />
                </View>

                {gamesTab == 1 && 
                    allCategory.map(item => (
                        <ListItem 
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subtitle={item.subtitle}
                            isCategory={item.isCategory}
                        />
                    ))  
                }
                {gamesTab == 2 && 
                    mostReviewed.map(item => (
                        <ListItem 
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subtitle={item.subtitle}
                            isCategory={item.isCategory}
                        />
                ))
                
                }
            </ScrollView>
        </SafeAreaView>
     )
 }
 
 export default HomeScreen
 
 const styles = StyleSheet.create({})
 