import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import * as configcat from "configcat-js";


const App = () => {

    //variable to save the value of the flag locally
    const [flagValue, setFlagValue] = useState();

    //ConfigCat client
    let configCatClient = configcat.createClientWithAutoPoll("8z7aCC-DZEaPwUCnitpksg/TbJ8oi7sMUynCb8MxtTUDw", {
      pollIntervalSeconds: 10,
      configChanged: () => {
        updateFlagValue();
    },
    });


   const updateFlagValue = () => {
    configCatClient.getValueAsync("signUp", false).then(value => {setFlagValue(value)})
   }

  //styles for buttons
  const styles = StyleSheet.create({
    content: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    button: {
      backgroundColor: '#4CBE72',
      borderRadius: 10,
      margin: 12,
      height: 40,
      width: 200,
      justifyContent: 'center',
      alignItems:'center'
    },
  })


    return (
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        {/* checks value of the flag and if true displays a singup button */}
        {
          flagValue 
          ?
          <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.button}>
              <Text>SIGNUP</Text>
            </TouchableOpacity>
            <Text>Signing up is now open again! </Text>
          </View>
          : null
        
        }
      </View>
    )
  }


export default App;