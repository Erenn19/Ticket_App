import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ProjectButton from '../components/ProjectButton';
import ProjectEvent from '../components/ProjectEvent';
const mapStyle = [
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "weight": 1
            }
        ]
    }
]
const SearchScreen = ({ navigation }) => {
    const [eventList, setEventList] = useState([
        {
            id: 1,
            coordinate: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            image: require('../images/Music.png'),
            title: 'Music'
        },
        {
            id: 2,
            coordinate: {
                latitude: 37.8000,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            image: require('../images/Sports.png'),
            title: 'Sports'
        },
        {
            id: 3,
            coordinate: {
                latitude: 37.78005,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            image: require('../images/Sports.png'),
            title: 'Sports'
        },
        {
            id: 4,
            coordinate: {
                latitude: 37.79005,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            image: require('../images/Music.png'),
            title: 'Music'
        },
        {
            id: 5,
            coordinate: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            image: require('../images/Music.png'),
            title: 'Music'
        },
        {
            id: 6,
            coordinate: {
                latitude: 37.77005,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            image: require('../images/Music.png'),
            title: 'Music'
        },
    ])
    const [mapRegion, , setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    const [selectedEvent, setSelectedEvent] = useState();
    useEffect(() => {
        console.log(selectedEvent)
    }, [selectedEvent]);

    return (
        <View style={styles.container} >

            <TextInput
                style={{
                    height: 50,
                    width: '100%',
                    color: 'black',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#CACDD4',
                    borderRadius: 7,
                    textShadowColor: '#CACDD4',
                    paddingLeft: 10,
                    padding: 10,
                    color: '#CACDD4'
                }}
            >
                <AntDesign style={{ textAlign: 'left', alignItems: 'flex-start' }} name="search1" size={20} color="#CACDD4" />   Event name, artist, place
            </TextInput>
            <View style={{ flexDirection: 'row', borderRadius: 6, backgroundColor: '#cfdee7', alignItems: 'center', padding: 10 }} >
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                        <ProjectButton title='€40-90' />
                        <ProjectButton title='When' />
                        <ProjectButton title='Category' />
                        <ProjectButton title='Location' />
                        <ProjectButton title='Current Location' />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <FontAwesome5 style={{ padding: 3 }} name="eraser" size={24} color="#4f6d7a" />
                        <Entypo style={{ padding: 3 }} name="direction" size={24} color="#4f6d7a" />
                    </View>
                </ScrollView>
            </View>
            <MapView style={styles.map}
                region={mapRegion}
                customMapStyle={mapStyle}
                provider='google'
            >
                {
                    eventList?.map((event) => (
                        <Marker onPress={() => {
                            setSelectedEvent(event)
                        }} image={event.image} coordinate={event.coordinate} title={event.title} />
                    ))
                }

            </MapView>
            {selectedEvent ? <View style={{ flex: 0 }}>
                <BottomSheet isOpen={selectedEvent}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchResult')}>
                            <View style={{ height: 950 }}>
                                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 20 }}>EVENTS</Text>
                                <Image style={{ width: '40%', height: 110, justifyContent: 'center', marginTop: 14 }} source={require('../images/musicFestival2.png')} />
                                <Text style={{ marginLeft: 150, marginTop: -110, fontSize: 12, margin: 4, marginTop: -90 }}>Daboi Concer… FRIDAY AUG 24, 9PM</Text>
                                <Text style={{ marginLeft: 150, fontWeight: 'bold', margin: 10 }}>Brightlight Music Festival</Text>
                                <Feather style={{ marginLeft: 145 }} name="music" size={17} color="gray" /><Text style={{ marginLeft: 170, marginTop: -18, color: 'gray' }}>Indie Rock <Fontisto name="ticket" size={10} color="gray" /> €40-€90</Text>
                            </View>
                        </TouchableOpacity>
                        <ProjectEvent />
                        <View style={{ marginTop: -780, marginTop: -750 }}>
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 25 }}>Places</Text>
                            <View style={{ backgroundColor: '#BDC0C4', marginTop: 20, width: 145, height: 90, borderRadius: 20, marginLeft: 2 }}></View>
                            <Text style={{ marginLeft: 150, marginTop: -84, fontSize: 12, margin: 4, fontWeight: 'bold' }}>Lizbońska 4, Warsaw</Text>
                            <Text style={{ marginLeft: 150, fontWeight: 'bold', margin: 10, fontSize: 20 }}>Daboi Concert Hall</Text>
                            <Feather style={{ marginLeft: 145 }} name="music" size={17} color="gray" /><Text style={{ marginLeft: 165, marginTop: -18, color: 'gray' }}>Music</Text>

                            <View style={{ backgroundColor: '#BDC0C4', marginTop: 20, width: 145, height: 90, borderRadius: 20, marginLeft: 2 }}></View>
                            <Text style={{ marginLeft: 150, marginTop: -84, fontSize: 12, margin: 4, fontWeight: 'bold' }}>Zamieniecka 8, Warsaw</Text>
                            <Text style={{ marginLeft: 150, fontWeight: 'bold', margin: 10, fontSize: 20 }}>Bright Lights Hall</Text>
                            <MaterialIcons style={{ marginLeft: 145 }} name="sports-tennis" size={17} color="gray" /><Text style={{ marginLeft: 165, marginTop: -18, color: 'gray' }}>Gymnastics</Text>
                            <View style={{ marginTop: 30, marginBottom: 15 }}>
                                <Button
                                    title="Show all 25 performers"
                                    color="#FC1055"
                                />
                            </View>
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 25 }}>Performers</Text>
                            <Image style={{ width: 115, marginLeft: 22, height: 95, justifyContent: 'center', marginTop: 12, borderRadius: 200 }} source={require('../images/Jazz_logo.png')} />
                            <Text style={{ marginLeft: 150, marginTop: -90, fontSize: 22, margin: 4, fontWeight: 'bold' }}>Drumpfets</Text>
                            <Text style={{ marginLeft: 150, color: 'gray', margin: 10 }}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Jazz</Text>
                            <Text style={{ marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1 }}>No Next Event</Text>

                            <Image style={{ width: 110, marginLeft: 22, height: 100, justifyContent: 'center', marginTop: 14, borderRadius: 200 }} source={require('../images/musicFestival2.png')} />
                            <Text style={{ marginLeft: 150, marginTop: -92, fontSize: 22, margin: 4, fontWeight: 'bold' }}>Sawbirds</Text>
                            <Text style={{ marginLeft: 150, margin: 10, color: 'gray' }}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                            <Text style={{ marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1 }}>Next event Friday Aug 25, 10PM</Text>
                            <View style={{ marginTop: 30, marginBottom: 10 }}>
                                <Button
                                    title="Show all 25 performers"
                                    color="#FC1055"
                                />
                            </View>
                        </View>

                    </ScrollView>
                </BottomSheet>
            </View>
                : <>
                </>
            }
        </View >
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 2
    }
})