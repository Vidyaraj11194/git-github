import React from "react";
import {StyleSheet,View,Text,ImageBackground,Image, Button} from 'react-native'

export default function Calls({navigation}){
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require("../../Assets/download.jpg")}>
               <Text style={styles.text}>This is Call Page</Text>
               <Button title="Back"
               onPress={()=>navigation.navigate("Bottom")}/>
               </ImageBackground>
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