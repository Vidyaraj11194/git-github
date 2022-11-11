import React from "react";
import {Text,StyleSheet,View,Image,TouchableHighlight}from 'react-native';
import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function DrawerContent({navigation}){
    return(
        <View style={styles.container}>
                <Icon name="close" size={20} color='green'style={{marginTop:10}}
                onPress={()=>navigation.navigate('Bottom')}></Icon>
                <View style={{flexDirection:'row'}}>
                    <Icon name="topic" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>About</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                <Icon name="settings" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Settings</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>

         </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    menu:{
        fontSize:18,
        fontWeight:'bold',
        color:'blue',
        marginTop:10,
        marginLeft:10
    }
})