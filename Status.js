import React from "react";
import {StyleSheet,View,Text,ImageBackground} from 'react-native'

export default function Status(){
    return(
        <View style={styles.container}>
           <ImageBackground style={styles.background} source={require("../../Assets/download.jpg")}> 
               <Text style={styles.text}>This is Status Page</Text></ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
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