import React from 'react';
import {StyleSheet,View,Text, AppRegistry, Linking,  TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


class QRScanner extends React.Component{
    constructor(props){
        super(props)

        this.onSuccess=this.onSuccess.bind(this)
    }   
     
    onSuccess = (e) => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };

    render(){

       
        return(
            <View style={style.mainContainer}>
                <View style={style.container}>
                <QRCodeScanner
                        onRead={this.onSuccess}
                        flashMode={RNCamera.Constants.FlashMode.torch}
                        topContent={
                        <Text style={styles.centerText}>
                            Go to{' '}
                            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                            your computer and scan the QR code.
                        </Text>
                        }
                        bottomContent={
                        <TouchableOpacity style={styles.buttonTouchable}>
                            <Text style={styles.buttonText}>OK. Got it!</Text>
                        </TouchableOpacity>
                        }
                    />
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
AppRegistry.registerComponent('default', () => QRScanner)
// export default QRScanner

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

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      }
})