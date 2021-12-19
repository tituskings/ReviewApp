import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'

export class Class extends Component {
    state={
        categories:[
            {
              id:1,
              name:'cari cature'
            },
            {
              id:2,
              name:'sketch'
            },
            {
              id:3,
              name:'painting'
            },
            {
              id:4,
              name:'color'
            },
          ],
          cards:[
            {
              image: require('../../asset/images/pexels2'),
              id:1,
              titleStyle:'walking like a man'
            },
            {
              image: require('../../asset/images/pexels3'),
              id:2,
              titleStyle:'blue sky'
            },
            {
              image: require('../../asset/images/pexels4'),
              id:3,
              titleStyle:'grann wll'
            },
            {
              image: require('../../asset/images/pexels5'),
              id:4,
              titleStyle:'menson niithig'
            },
          ]
    }
    _renderItem({items,index}){
        return(
            <View style={{width:300,height:415}}>
                <ImageBackground source={items.image} style={styles.image} imageStyle={{borderRadius:15}} resizeMode="cover">

                </ImageBackground>
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={{flex:1,backgroundColor:"#f2f2f7"}}>
            <ScrollView style={styles.scrollStyle}>
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <View>
                  <Text style={styles.titleStyle}>MReview</Text>
                  </View>
                  <View style={styles.avatarStyle}>
                      <Image source={require('../../asset/images/pexels1')} resizeMode='cover' style={styles.imageStyle} />
                  </View>
                </View>
      
                <View>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <View style={{paddingTop:11,flexDirection:'row'}}>
                      {
                        categories.map(category=>(
                          <View key={category.id} style={styles.categorybox}>
                            <Text>{category.name}</Text>
                          </View>  
                        ))
                      }
                    </View>
                  </ScrollView>
                </View>
      
                <View style={{paddingTop:35}}>
                  <View>
                      <Carousel
                        ref={c=>{this._carousel=c}}
                        renderItem={this._renderItem}
                        slideWidth={350}
                        itemWidth={350}
                        layout={'stack'}
                        data={this.state.cards}
                      />
                  </View>
                </View>
      
      
      
              </View>
            </ScrollView>
          </SafeAreaView>
        )
    }
}



const styles = StyleSheet.create({
    scrollStyle:{
      paddingTop:StatusBar.currentHeight
    },
    view1:{
      paddingHorizontal:24
    },
    view2:{
      paddingTop:12,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    titleStyle:{
    fontSize:25,
    fontWeight:'bold'
    },
    avatarStyle:{
      height:37,
      width:37,
      borderRadius:37/2,
      borderColor:'#ddd'
    },
    imageStyle:{
      height:37,
      width:37,
      borderRadius:37/2,
      borderColor:'#ddd'
    },
    categorybox:{
      height:28,
      width:90,
      borderWidth:0.7,
      borderColor:'#2c2c2e',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginRight:10
    },
    image:{
        width:292,
        height:411,
        borderRadius:15
    }
});
export default Class
