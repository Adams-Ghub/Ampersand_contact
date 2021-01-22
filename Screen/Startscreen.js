import React from 'react'
import {Text,Image,TouchableOpacity,StyleSheet, View} from 'react-native';

class Startscreen  extends React.Component{

    render(){
        return(
            <View style={style.container}>
                <View style={style.logoContainer}>
                    <Image source={require("../assets/LogoBlack.png")}/> 
                </View>
                <View style={style.textContainer}>
                    <Text style={style.ampAndContactText}>AMPERSAND</Text>
                    <Text style={style.ampAndContactText}>CONTACTS</Text>
                </View>
                <View style={style.getStarteBtnContainer}>
                    <TouchableOpacity style={style.getStarteBtn}>
                        <Text style={style.getStarteBtnText}>
                            GET STARTED
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
export default Startscreen
const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#f4f5f1',      

  },
  ampAndContactText:{
      fontSize:22,
      color:"#aaa",
      letterSpacing:2
  },
  logoContainer:{
      justifyContent:"center",
      marginVertical:140,

  },
  textContainer:{
    marginVertical:50,
    textAlign:'center',
    alignItems:'center'
  },
  getStarteBtnContainer:{
      marginTop:200,
  },
  getStarteBtnText:{
      fontSize:17,
      borderStyle:'solid',
      borderBottomColor:'red',
      padding:5,
      borderBottomWidth:2,
  },
})