/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Home from './screen/Home'
// import AddItem from './screen/AddItem';
// import List from './screen/List';
import LoginPage from './screen/LoginPage';
// import MobileLogin from './screen/MobileLogin';
import Chat from './screen/Bottom/Chat';
import Contact from './screen/Bottom/Contact';
import About from './screen/Drawer/About';
import Settings from './screen/Drawer/Settings';
import Calls from './screen/Top/Call';
import Notifications from './screen/Top/Notification';
import Status from './screen/Top/Status';
import Home from './screen/Bottom/Home';
import DrawerContent from './screen/Drawer/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
 const Top = createMaterialTopTabNavigator();
 const Bottom = createBottomTabNavigator();
 function MyStack(){
  return(
    
      <Stack.Navigator>
        <Stack.Screen
        name='LoginPage'
        component={LoginPage}/>
        <Stack.Screen
        name='Bottom'
        component={MyBottom}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='Drawer'
        component={MyDrawer}
        options={{headerShown:false}}/>
        <Stack.Screen
        name='Top'
        component={MyTop}
        options={{headerShown:false}}/>
        
      </Stack.Navigator>
    
  )
}

function MyDrawer(){
 return(
   <Drawer.Navigator
   drawerContent={(props) => <DrawerContent {...props}/>}
   initialRouteName="About">
     <Drawer.Screen name='About' component={About} options= {{
       headerShown:false}}/>
     <Drawer.Screen name='Notifications' component={Notifications} options= {{
       headerShown:false}}/>
   </Drawer.Navigator>
 )
}

function MyTop(){
 return(
   <Top.Navigator 
   screenOptions={{
     tabBarLabelStyle:{fontSize:10},
     tabBarStyle:{color:'grey'},
     tabBarItemStyle:{width:130}}}>
     <Top.Screen name='Calls' component={Calls}
     options= {{
       headerShown:false,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({focused}) =>
       focused ? <Icon name= 'call' size= {24} color= 'green'/> : <Icon name= 'call' size= {24} color= 'gray'/>
}} />
     <Top.Screen name='Settings' component={Settings}
     options= {{
       headerShown:false,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({focused}) =>
       focused ? <Icon name= 'settings' size= {24} color= 'green'/> : <Icon name= 'settings' size= {24} color= 'gray'/>
}} />
     <Top.Screen name='Status' component={Status}
     options= {{
       headerShown:false,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({focused}) =>
       focused ? <Icon name= 'image' size= {24} color= 'green'/> : <Icon name= 'image' size= {24} color= 'gray'/>
}} />
   </Top.Navigator>
 )
}

function MyBottom(){
 return(
   <Bottom.Navigator
   screenOptions={{
     tabBarLabelStyle:{fontSize:10},
     tabBarStyle:{color:'grey'},
     tabBarItemStyle:{width:100}}}>
      <Bottom.Screen name='Home' component={Home}
      options= {{
       headerShown:false,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({focused}) =>
       focused ? <Icon name= 'home' size= {24} color= 'green'/> : <Icon name= 'home' size= {24} color= 'gray'/>
}} />
     <Bottom.Screen name='Chat' component={Chat}
     options= {{
       headerShown:false,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({focused}) =>
       focused ? <Icon name= 'chat' size= {24} color= 'green'/> : <Icon name= 'chat' size= {24} color= 'gray'/>
}}/>
     <Bottom.Screen name='Contact' component={Contact}
     options= {{
       headerShown:false,
       tabBarActiveTintColor: 'green',
       tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({focused}) =>
       focused ? <Icon name= 'contacts' size= {24} color= 'green'/> : <Icon name= 'contacts' size= {24} color= 'gray'/>
}}/>
   </Bottom.Navigator>
 )
}

export default function App(){
 return(
   <><NavigationContainer>
     <MyStack />
   </NavigationContainer>
   </>
 )
}
