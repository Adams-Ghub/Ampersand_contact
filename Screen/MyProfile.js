
import React from 'react';
import {StyleSheet,View,Text, Image, ViewBase} from 'react-native';
import {Entypo,Feather,EvilIcons} from '@expo/vector-icons'

class MyProfile extends React.Component{
    render(){

        return(
            <View style={style.container}>
                <View style={style.sectionOne}>
                    <Image style={style.contactImage} source={require('../assets/contactPic.png')} />
                    <View style={style.nameAndRoleContainer}>
                        <Text style={style.nameText}>
                            Larry Hutchson
                        </Text>
                        <Text style={style.roleText}>
                            Sales Executive
                        </Text>
                    </View>
                    
                </View>
                <View style={style.socialIconContainer}>
                    <View style={style.twiterContainer}>
                        <Entypo name="twitter-with-circle" size={50} color="#666" />                        
                    </View>
                    <View style={style.linkInContainer}>                        
                        <Entypo name="linkedin-with-circle" size={50} color="#888" />
                    </View>
                </View>

                <View style={style.contactDetailsSectionContainer}>
                    <View style={style.contactDetailsContainer}>
                        <Feather name="phone" size={24} color="#999" />
                        <Text style={style.contactText}>
                            +233 (245) 234 123
                        </Text>
                    </View>
                    <View style={style.contactDetailsContainer}>
                        <Feather name="mail" size={24} color="#999" />
                        <Text style={style.contactText}>
                            larry@ampersandllc.co
                        </Text>
                    </View>
                    <View style={style.contactDetailsContainer}>
                        <EvilIcons name="location" size={30} color="#999" />
                        <Text style={style.contactText}>
                            Shoreditch, UK
                        </Text>
                    </View>
                </View>
                
            </View>
        )
    }
}
export default MyProfile

const style=StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical:60,
    },
    sectionOne:{
        flexDirection:'row',
        marginVertical:20

    },
    contactImage:{
        borderRadius:100,
        width:100,
        height:100,
        marginRight:20,
    },
    nameText:{
        fontSize:24,
        letterSpacing:1,
    },
    roleText:{
        fontSize:24,
        color:'#bbb',
    },
    nameAndRoleContainer:{
        marginTop:10,
    },
    socialIconContainer:{
        flexDirection:'row',
        marginVertical:20,

    },
    twiterContainer:{
        marginRight:15,
    },
    contactDetailsSectionContainer:{
        marginVertical:30,
        
    },

    contactDetailsContainer:{
        flexDirection:'row',
        marginVertical:13,
    },
    contactText:{
        marginLeft:10,
        fontSize:20,
    },
    
})