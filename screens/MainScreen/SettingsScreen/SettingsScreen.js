import React from 'react';
import { View, Text} from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'#333333'}}>
        <Text style={{ color:'white'}} >Settings!</Text>
      </View>
    );
  }

export default SettingsScreen;