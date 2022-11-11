import React from "react";
import {StyleSheet,View,Text,ImageBackground,Button,TouchableHighlight} from 'react-native'
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Icon name= 'play-for-work' size= {24} color= 'green'
            onPress={()=>navigation.navigate("Drawer")}/>
            <ImageBackground  style={styles.background} source={require("../../Assets/download.jpg")}>
            
               <Text style={styles.text}>This is Home Page</Text>
               <TouchableHighlight onPress={()=>navigation.navigate("Top")}>
                <Text style={{color:'white',fontSize:20,borderColor:'green',borderWidth:2,backgroundColor:'green',width:90,paddingLeft:10}}>Submit</Text>
               </TouchableHighlight>
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
        marginBottom:10
        
    }
})