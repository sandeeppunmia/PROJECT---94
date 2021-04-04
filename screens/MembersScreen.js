import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import db from '../config';
import firebase from'firebase';
import MyHeader from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize';

export default class MembersScreen extends Component{

    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            name:'',
            contact:'',
            isModalVisible:'false',
            confirmPassword:''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <MyHeader title="Members"
                   navigation={this.props.navigation}/>
            
            <TextInput style={styles.formTextInput}
                            placeholder={'Name'}
                            maxLength={30}
                            onChangeText={(text)=>{
                                this.setState({
                                    name:text
                                })
            }}
            value={this.state.name}
            />

            <TextInput style={styles.formTextInput}
                            placeholder={'Contact'}
                            maxLength={10}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                this.setState({
                                    contact:text
                                })
            }}
            value={this.state.contact}
            />

            <TouchableOpacity 
            style={styles.button}
            onPress={()=>{
                //this.updateUserDetails()
            }}>
                <Text style={styles.buttonText}>
                    Add Member
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    formTextInput:{
        width:'90%',
        height:RFValue(50),
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:2,
        borderWidth:1,
        marginTop:20,
        padding:RFValue(10),
        marginBottom:RFValue(20),
        marginRight:RFValue(20)
    },
    button:{
        width:'100%',
        height:RFValue(60),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFValue(50),
        backgroundColor:'#32867d',
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.44,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20,
        marginRight:RFValue(100)
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    }
})