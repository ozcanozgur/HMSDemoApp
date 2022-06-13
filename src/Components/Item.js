import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const Item = ({ data, navigation }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: '#fff',
            padding: 3,
            height: 90,
            flexDirection: 'row',
            marginVertical: 0,
        }}
            onPress={() => navigation.navigate('Details', {
                data: data
            })}
        >
            <View style={{ flex: 4, borderWidth: 0.3, borderColor: 'gray' }}>
                <Image
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}
                    source={data.img}
                />
            </View>
            <View style={{ flex: 10, paddingLeft: 10, paddingVertical: 5, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 11, color: 'black' }}>{data.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                    <Text style={{ fontSize: 11, color: 'black' }}>{data.location.address}</Text>
                    <Text style={{ fontSize: 11, color: 'blue', fontWeight: 'bold' }}>{data.price} TL</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
};

export default Item;