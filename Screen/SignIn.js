import React from 'react'
import {View,Image,Text,StyleSheet,TouchableOpacity, TextInput} from 'react-native'



class SignIn  extends React.Component{

    render(){
        return(
            <View style={style.container}>
                <View style={style.signInImageContainer}>
                    <Image style={style.signInImage} source={require("../assets/signIn.png")}/> 
                </View>

                <View style={style.sectionTwoContainer}>
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

                        <View style={style.passwordInputContainer}>
                            <Text style={style.passwordText}>
                                Password
                            </Text>
                            <TextInput 
                                placeholder="......"
                                style={style.passwordInput}
                                ></TextInput>
                            
                        </View>

                            
                        <View style={style.signInBtnContainer}>
                            <TouchableOpacity style={style.signInBtn}>
                                <Text style={style.signInBtnText}>
                                    SIGN IN
                                </Text>
                            </TouchableOpacity>                        
                        </View>
                        <View style={style.forgotTextResetBtnContainer}>
                            <Text style={style.forgotText}>
                                Forgot ?
                            </Text>
                            <TouchableOpacity style={style.resetBtn}>
                                <Text style={style.resetBtnText}>
                                    Reset Password
                                </Text>
                            </TouchableOpacity> 
                            
                        </View>
                </View>
                     
                
                
                

            </View>
        )
    }
}
export default SignIn

const style=StyleSheet.create({
    container:{
        flex:1,        
        
        backgroundColor:'#fff',      

  },
  emailInputContainer:{
      textAlign:'right'
      
  },
  signInMsg:{
    marginVertical:10,  
    fontSize:15,
    color:"#ccc",
    textAlign:'left'
    
},
  signInImage:{
      width:420,
      height:220,
  },
    emailPasswordInputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        paddingBottom:20,
        borderStyle:'solid',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
  },
  passwordInputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
   
},

  forgotTextResetBtnContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    
  },
  sectionTwoContainer:{
    paddingVertical:20,
    paddingHorizontal:25,
    marginTop:80,
  },
  emailPasswordInput:{
    fontSize:20,
    textAlign:'right', 
    
  },
  passwordInput:{
    fontSize:20,
    textAlign:'right', 
    
  },
  passwordText:{
    fontSize:23,
    paddingRight:15,
  },

  emailPasswordText:{
    fontSize:23,
    paddingRight:15,
  },

  signInBtnContainer:{     
      justifyContent:'center',
      alignItems:'center',
      marginTop:55,
      marginBottom:40,
      
  },
  signInBtn:{
      backgroundColor:"#fe2b4c",
      paddingHorizontal:148,
      paddingVertical:10,
      borderRadius:4,
  },
  signInBtnText:{
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
  forgotText:{
      fontSize:18,
      marginVertical:5,
      paddingRight:6,
  }
  

 
})