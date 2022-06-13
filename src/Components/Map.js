import React from 'react';
import { View } from 'react-native';
import HMSMap, { MapTypes, HMSMarker } from "@hmscore/react-native-hms-map";

const Map = ({ navigation, setScrollEnableProp, locations, _scrollViewRef }) => {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            //e.preventDefault();
            navigation.jumpTo('Location');
            if (_scrollViewRef) {
                _scrollViewRef.current.scrollToEnd();
            }
            setScrollEnableProp(false);
        });

        return unsubscribe;
    }, [navigation]);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <HMSMap HMSMap
                style={{ height: 700, width: 500 }}
                mapType={MapTypes.NORMAL}
                liteMode={false}
                camera={{
                    target: {
                        latitude: locations.coordinates.lat,
                        longitude: locations.coordinates.lng
                    },
                    zoom: 15,
                }}
            >
                <HMSMarker
                    coordinate={{
                        latitude: locations.coordinates.lat,
                        longitude: locations.coordinates.lng
                    }}
                />
            </HMSMap>
        </View>
    );
};

export default Map;