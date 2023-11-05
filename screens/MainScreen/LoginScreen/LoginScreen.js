import * as React from 'react';
import { Button, View, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>This is login Screen</Text>
            <Button title='Log In' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

export default LoginScreen;