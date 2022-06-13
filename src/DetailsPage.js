import React, { useRef, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Map from './Components/Map';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({ navigation, setScrollEnableProp }) {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            //e.preventDefault();
            navigation.jumpTo('Advertisement');
            setScrollEnableProp(true);
        });

        return unsubscribe;
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

const DetailsPage = ({ route }) => {
    const { title, location } = route.params.data;
    const [scrollEnable, setScrollEnable] = useState(true);
    let scrollViewRef = useRef(null);
    return (
        <ScrollView style={{}} ref={scrollViewRef} scrollEnabled={scrollEnable} >
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 12 }}>{title}</Text>
                <View style={{ height: 210, backgroundColor: 'white' }}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }}
                        source={route.params.data.img}
                    />
                </View>
            </View>
            <View style={{ height: 5, backgroundColor: '#080d36', marginTop: 2 }}></View>
            <View style={{ height: 685 }}>
                <Tab.Navigator>
                    <Tab.Screen name="Advertisement" options={{ swipeEnabled: false }} >
                        {props => <HomeScreen {...props} setScrollEnableProp={setScrollEnable} _scrollViewRef={scrollViewRef} />}
                    </Tab.Screen>
                    <Tab.Screen name="Location" options={{ swipeEnabled: false }} >
                        {props => <Map {...props} setScrollEnableProp={setScrollEnable} locations={location} _scrollViewRef={scrollViewRef} />}
                    </Tab.Screen>
                </Tab.Navigator>
            </View>
        </ScrollView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});


export default DetailsPage;