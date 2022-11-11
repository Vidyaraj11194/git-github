import React from "react";
import {StyleSheet,View,Text,ImageBackground,Image} from 'react-native'

export default function Notifications(){
    return(
        <View style={styles.container}>
            
               <ImageBackground style={styles.background} source={require("../../Assets/download.jpg")}>
               <Text style={styles.text}>This is Notification Page</Text></ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1    
    },
    background:{
        height:'100%',  
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        color:'black',
        
    }
})