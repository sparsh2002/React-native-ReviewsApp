import React from 'react';
import { StyleSheet ,Text, View , Image } from 'react-native';
import Cards from '../shared/card';
import { globalStyles ,  images} from '../styles/global';
export default function ReviewDetails({navigation}){
    const rating = navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            <Cards>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
               <View style = {styles.rating}>
                   <Text>Game Rating:</Text>
                   <Image 
                   style={ styles.imageStyle }
                   source={images.ratings[rating]} />
               </View>
            </Cards>
        </View>
    )
}


const styles = StyleSheet.create({
    imageStyle:{
        width:100,
        height:25
    }
})
