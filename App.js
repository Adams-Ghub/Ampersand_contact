import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import RegisterSignIn from './Screen/RegisterSignIn.js';
import Startscreen from './Screen/Startscreen.js'
import SignIn from './Screen/SignIn.js';
import Register from './Screen/Register.js';
import MemberProfile from './Screen/MemberProfile.js';
import MyProfile from './Screen/MyProfile.js'
import Home from './Screen/Home.js';
import { AntDesign } from '@expo/vector-icons';
// import QRScanner from './Screen/QRScanner.js';

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer >
          <Stack.Navigator initialRouteName="Register">
              <Stack.Screen options={{header:()=>null}} name="Welcome" component={Startscreen} />
              <Stack.Screen options={{header:()=>null}} name="Register-Signin" component={RegisterSignIn} />
              <Stack.Screen 
                  options={{headerTitleAlign:'center',
                            title:'Sign In',
                              headerStyle:{height:100,
                                          backgroundColor:'#fe2b4c',
                                          },
                                          headerTintColor:'white',
                            headerLeft:()=>(
                              <View style={styles.headerArrow}>
                                  <AntDesign  name="arrowleft" size={24} color="white" />                              
                              </View>
                              
                            )
                          }} 
                  name="Signin" 
                  component={SignIn} 
                    />

              <Stack.Screen
                options={{headerTitleAlign:'center',
                      
                        headerStyle:{height:100,
                                    backgroundColor:'#fe2b4c',
                                    
                                    },
                                    headerTintColor:'white',
                      headerLeft:()=>(
                        <View style={styles.headerArrow}>
                            <AntDesign  name="arrowleft" size={24} color="white" />                              
                        </View>
                        
                      )
                    }} 
                 name="Register" 
                 component={Register} 
              />

              <Stack.Screen
                  options={{headerTitleAlign:'center',
                      
                              headerStyle:{height:100,
                                          backgroundColor:'#fe2b4c',
                                          
                                          },
                                          headerTintColor:'white',
                            headerLeft:()=>(
                              <View style={styles.headerArrow}>
                                  <AntDesign  name="arrowleft" size={24} color="white" />                              
                              </View>
                  
                                           )
                            }} 
                  name="Member Profile" 
                  component={MemberProfile} 
                  />

              <Stack.Screen
                  options={{headerTitleAlign:'center',
                                  
                              headerStyle:{height:100,
                                          backgroundColor:'#fe2b4c',
                                          
                                          },
                                          headerTintColor:'white',
                            headerLeft:()=>(
                              <View style={styles.headerArrow}>
                                  <AntDesign  name="arrowleft" size={24} color="white" />                              
                              </View>
                              
                            )
                          }} 
                  name="My Profile" 
                  component={MyProfile} 
                  />
              <Stack.Screen

                  name="Home-QR" 
                  component={Home} />
              {/* <Stack.Screen name="QR Scanner" component={QRScanner} /> */}
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f4f5f1',
    
  },
  headerArrow:{
    paddingLeft:15
  },
});
