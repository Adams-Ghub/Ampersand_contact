import React from 'react'
import {View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native'
class RegisterSignIn  extends React.Component{

    render(){
        return(
            <View style={style.container}>
                <View style={style.sectionOneContainer}>
                    <Image style={style.sectionOneImage} source={require("../assets/registerSignIn.png")}/> 
                </View>

                <View style={style.sectionTwoContainer}>
                    <Text style={style.ampMsg}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                    <Text style={style.signInMsg}>Sign in or register with your Ampersand email</Text>

                    <View style={style.registerSingInBtnContainer}>
                        <View style={style.registerBtnContainer}>
                            <TouchableOpacity style={style.registerBtn}>
                                <Text style={style.registerBtnText}>
                                    REGISTER
                                </Text>
                            </TouchableOpacity>                        
                        </View>
                        <View style={style.signInBtnContainer}>
                            <TouchableOpacity style={style.signInBtn}>
                                <Text style={style.registerBtnText}>
                                    SIGN IN
                                </Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                </View>
                

            </View>
        )
    }
}
export default RegisterSignIn

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',      

  },
  ampMsg:{
      fontSize:20,
      color:"#888",
      textAlign:'left'
      
  },
  signInMsg:{
    marginVertical:10,  
    fontSize:15,
    color:"#ccc",
    textAlign:'left'
    
},
  sectionOneImage:{
      width:450,
      height:450,
  },
    sectionOneContainer:{
      justifyContent:"center",   

  },
  sectionTwoContainer:{
    paddingVertical:20,
    paddingHorizontal:25,
  },
  textContainer:{
    marginVertical:50,
    textAlign:'center',
    alignItems:'center'
  },
  registerSingInBtnContainer:{
      flexDirection:"row",
      justifyContent:'space-between',
      marginTop:170,
  },
  registerBtnText:{
    fontSize:18,
    borderStyle:'solid',
    borderBottomColor:'red',
    paddingBottom:5,
    margin:5,
    borderBottomWidth:2,
  },

 
})