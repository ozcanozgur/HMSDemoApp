import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native'

import { HMSAccountAuthService, HMSAuthParamConstants, HMSAuthRequestOptionConstants, HMSAuthScopeListConstants } from "@hmscore/react-native-hms-account";

let signInData = {
    accountAuthParams: HMSAuthParamConstants.DEFAULT_AUTH_REQUEST_PARAM,
    authRequestOption: [HMSAuthRequestOptionConstants.ID_TOKEN, HMSAuthRequestOptionConstants.ACCESS_TOKEN],
    authScopeList: [HMSAuthScopeListConstants.EMAIL]
};

const Login = ({ navigation }) => {

    const login = () => HMSAccountAuthService.signIn(signInData)
        .then((response) => {
            console.log(response.account.name)
            navigation.navigate('HomePage', {
                user: {
                    id: response.account.unionId,
                    firstName: response.account.name
                },
            })
        })
        .catch((err) => { console.log(err) });

    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <View style={{
                flex: 1,
                width: '60%'
            }}>
                <Image
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                    source={require('./img/huawei-logo.png')}
                />
            </View>
            <View style={{ flex: 1, width: '100%', alignItems: 'center', paddingTop: 15 }}>
                <Text style={{ marginBottom: 20 }}>HMS CORE DEMO APP HOŞGELDİNİZ</Text>
                <Button
                    title="Login"
                    color="#e60000"
                    onPress={login}
                />
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});


export default Login;