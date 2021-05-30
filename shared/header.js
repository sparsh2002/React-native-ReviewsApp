import React from 'react';
import { StyleSheet , View , Text , Image, ImageBackground , Modal}  from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'

export default function Header({navigation , title}){
    const openMenu = () =>{
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} size={28} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image  source={ require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
      width:'100%',
      height:60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
      letterSpacing: 1,
    },
    icon:{
        position:'absolute',
        left:1
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    headerTitle:{
        flexDirection:'row'
    }
})