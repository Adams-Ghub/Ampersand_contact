import React from 'react';
import {StyleSheet,View,Text, Image, TouchableOpacity} from 'react-native';
import {QRCode as CustomQRCode} from 'react-native-custom-qr-codes-expo';

class Home extends React.Component{
    render(){

        return(
            <View style={style.mainContainer}>
                <View style={style.container}>
                    <View style={style.textContainer}>
                        <Text style={style.mainText}>
                            Exchange Contact Information
                        </Text>
                        <Text style={style.subText}>
                            Scan this QR below to share your contact
                        </Text>
                    </View>

                    <View style={style.qrcodeContainer}>
                        <CustomQRCode content="Lary Hutchson" codestyle="square" size="250" padding={Number('1')} />
                    </View>

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
                    
                </View>
                <View style={style.scanQRSectionContainer}>
                    <Text style={style.addConnectionText}>
                        Want to add a new connection ?
                    </Text>
                    <View style={style.scanQRBtnContainer}>
                        <TouchableOpacity style={style.scanQRBtn} >
                            <Text style={style.scanQRBtnText}>
                                Scan QR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default Home

const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'column'
    },
    container:{
        paddingHorizontal:40,
        paddingTop:60,
        marginBottom:30,
    },
    sectionOne:{
        flexDirection:'row',
        marginTop:20

    },
    contactImage:{
        borderRadius:100,
        width:90,
        height:90,
        marginRight:20,
    },
    nameText:{
        fontSize:22,
        letterSpacing:1,
        marginBottom:5,
    },
    roleText:{
        fontSize:22,
        color:'#bbb',
        marginTop:5,
    },
    nameAndRoleContainer:{
        marginTop:5,
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
    textContainer:{
        marginTop:40,
    },
    mainText:{
        fontSize:20,
        fontWeight:'600'
    },
    subText:{
        color:'#999',
        fontSize:20,
        marginVertical:15,
        lineHeight:28,
    },
    qrcodeContainer:{
        alignItems:'center',
        marginVertical:45,
    },
    scanQRSectionContainer:{
        flexDirection:'row',
        marginTop:40,
        paddingHorizontal:40,
        paddingVertical:15,
        justifyContent:'space-between',
        alignItems:'center',
        borderStyle:'solid',
        borderTopColor:'#eee',
        borderTopWidth:2
    },
    scanQRBtnText:{
        fontSize:17,
        color:"#ab4b2c",
        paddingHorizontal:20,
        paddingVertical:5,
    },
    scanQRBtn:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#ab4b2c',
        borderRadius:3,
    },
})