import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert, ImageBackground } from 'react-native'


import auth from '@react-native-firebase/auth';


export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Signup = () => {
        if (email != '' && password != '') {
            auth().createUserWithEmailAndPassword(email, password).then((res) => {
                console.log("response", res)
                console.log('User account created,Now you can login')
            })
                .catch((error) => {
                    console.log("error_++++++++++", error)
                    Alert.alert(error.message)
                })
        }
        else {
            Alert.alert("Field should not be empty")
        }

    }
    const Login = () => {
        auth().signInWithEmailAndPassword(email, password).then((res) => {
            console.log("Login success", res)
            Alert.alert('Login Success')
            navigation.navigate("Bottom")

        })
            .catch((error) => {
                console.log("error_++++++++++", error)
                Alert.alert(error.message)
            })
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../Assets/download.jpg')}>
            <Text
                style={{ color: 'black', fontSize: 30, fontWeight: 'bold' }}>LOGIN</Text>
            <TextInput style={styles.textInput}
                value={email}
                keyboardType='email-address'
                placeholder="Email"
                placeholderTextColor={'grey'}
                onChangeText={setEmail}></TextInput>
            <TextInput style={styles.textInput}
                value={password}
                placeholder="password"
                placeholderTextColor={'grey'}
                onChangeText={setPassword}
                secureTextEntry={true}></TextInput>
            <View style={styles.button}>
                <Button title="Sign Up"
                    onPress={Signup} />
                <Button title="Login"
                    onPress={Login} />
            </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    textInput: {
        width: 300,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'white',
        marginVertical: 10,
        padding: 10
    },
    background:{
        height:'100%',  
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        width: 150,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})