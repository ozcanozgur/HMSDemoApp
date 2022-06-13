import React from 'react';
import { Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { DATA } from './Data';
import BannerComponent from './Components/Banner';
import Item from './Components/Item';


const HomePage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <FlatList
                ListHeaderComponent={() => <BannerComponent />}
                data={DATA}
                renderItem={({ item, index }) => (< Item data={item} navigation={navigation} index={index} />)}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 1, width: '100%', backgroundColor: 'gray' }}></View>}
            />
        </SafeAreaView>
    );
};

export default HomePage;
