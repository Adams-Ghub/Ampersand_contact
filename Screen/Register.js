import React, { useState, useEffect } from 'react'
import {View,Image,Text,StyleSheet,TouchableOpacity,Button, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';




class Register  extends React.Component{
    constructor(props){
        super(props)
        this.state={image:null
        }
        this.ImageSection=this.ImageSection.bind(this)
    }

    ImageSection =()=>{
        if(this.state.image===null){

            return(
                <View style={style.addNewImageContainer}>
                    <Image style={style.addNewImage} source={require('../assets/addUserPic.png')} />
                
                    <View style={style.selectImageContainer} >
                        <TouchableOpacity style={style.addNewImageBtn} onPress={this.selectPicture}>
                            <Text style={style.addNewImageText}>ADD PROFILE PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
       else if(this.state.image!==null){
            return(
                <View style={style.signInImageContainer}>
                    <Image style={style.signInImage} source={{uri:this.state.image}} />
                
                    <View style={style.selectImageContainer} >
                        <TouchableOpacity style={style.selectImageBtn} onPress={this.selectPicture}>
                            <Text style={style.selectImageText}>EDIT PROFILE PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } 
    }

    selectPicture = async () => {
        await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
          aspect:[21, 13],
          allowsEditing: true,
          quality:1,
        });
        if (!cancelled) this.setState({ image: uri });
        console.log(uri)
      };
    
      takePicture = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        const { cancelled, uri } = await ImagePicker.launchCameraAsync({
          allowsEditing: false,
        });
        this.setState({ image: uri });
      };

    render(){        
            



        return(
            <View style={style.container}>
                <View > 
                    
                    {this.ImageSection()}
                   
                </View>

                <View style={style.sectionTwoContainer}>
                    <View style={style.emailPasswordInputContainer}>
                        <View style={style.emailTextContainer}>
                            <Text style={style.emailPasswordText}>
                                Full name
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="Joan Shay"                                    
                                style={style.emailPasswordInput}></TextInput>
                        </View>                        
                            
                    </View>

                    <View style={style.emailPasswordInputContainer}>
                        <View style={style.emailTextContainer}>
                            <Text style={style.emailPasswordText}>
                                Email
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="john.smith@mail.com"                                    
                                style={style.emailPasswordInput}></TextInput>
                        </View>                        
                            
                    </View>

                    <View style={style.emailPasswordInputContainer}>
                        <View style={style.emailTextContainer}>
                            <Text style={style.emailPasswordText}>
                                Phone Number
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="+233 (244) 245 190"                                    
                                style={style.emailPasswordInput}></TextInput>
                        </View>                        
                            
                    </View>

                    <View style={style.emailPasswordInputContainer}>
                        <View style={style.emailTextContainer}>
                            <Text style={style.emailPasswordText}>
                                Role
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="Director of Marketting"                                    
                                style={style.emailPasswordInput}></TextInput>
                        </View>                                       
                    </View>

                    <View style={style.emailPasswordInputContainer}>
                        <View style={style.emailTextContainer}>
                            <Text style={style.emailPasswordText}>
                                Twitter
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="@joansays"                                    
                                style={style.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>

               <View style={style.emailPasswordInputContainer}>
                        <View style={style.emailTextContainer}>
                            <Text style={style.emailPasswordText}>
                                LinkedIn
                            </Text>
                        </View>
                        <View>
                            <TextInput
                                placeholder="/joan.shay"                                    
                                style={style.emailPasswordInput}></TextInput>
                        </View>                                                 
                    </View>

                       

                            
                        <View style={style.registerBtnContainer}>
                            <TouchableOpacity style={style.registerBtn}>
                                <Text style={style.registerBtnText}>
                                    REGISTER
                                </Text>
                            </TouchableOpacity>                        
                        </View>
                       
                </View>
                     
                
                
                

            </View>
        )
    }
}
export default Register

const style=StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:'#fff',      

  },
  emailInputContainer:{
      textAlign:'right'
      
  },
  signInImage:{
      width:420,
      height:260,
  },
    emailPasswordInputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:8,
        paddingBottom:15,
        borderStyle:'solid',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
  },
  passwordInputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
   
},
signInImageContainer:{
    marginBottom:0,
    
},
addNewImageContainer:{
    alignItems:'center',
    paddingVertical:50,
    height:260,
    backgroundColor:'#fbfbfb'
    
},
addNewImage:{
    marginTop:20,
    marginBottom:10,
},
addNewImageText:{
    color:'#fe2b4c'
},
  forgotTextResetBtnContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    
  },
  selectImageBtn:{
      position:"relative",
      left:120,
      bottom:135,
      width:175
      
  },
  selectImageText:{
      paddingVertical:6,
      fontSize:15,
      paddingHorizontal:10,
      color:'white',
      borderStyle:'solid',
      borderWidth:1,
      borderRadius:3,
      borderColor:'white'
  },
  sectionTwoContainer:{
    
    paddingHorizontal:25,

  },
  emailPasswordInput:{
    fontSize:18,
    textAlign:'right', 
    
  },
  passwordInput:{
    fontSize:16,
    textAlign:'right', 
    
  },
  passwordText:{
    fontSize:18,
    paddingRight:15,
  },

  emailPasswordText:{
    fontSize:18,
    paddingRight:15,
  },

  registerBtnContainer:{     
      justifyContent:'center',
      alignItems:'center',
      marginVertical:25,
      
  },
  registerBtn:{
      backgroundColor:"#fe2b4c",
      paddingHorizontal:139,
      paddingVertical:10,
      borderRadius:4,
  },
  registerBtnText:{
      color:'white',
      fontSize:18,
  },
  resetBtnText:{
    fontSize:18,
    borderStyle:'solid',
    borderBottomColor:'red',
    paddingBottom:5,
    margin:5,
    borderBottomWidth:2,
  },
 

 
})