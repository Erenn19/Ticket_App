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
import SscreenStyle, { SscreenStyleContainer } from '../styles/SscreenStyle';

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
            image: require('../../images/Music.png'),
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
            image: require('../../images/Sports.png'),
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
            image: require('../../images/Sports.png'),
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
            image: require('../../images/Music.png'),
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
            image: require('../../images/Music.png'),
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
            image: require('../../images/Music.png'),
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
        <View className={SscreenStyleContainer.container} >
            <TextInput
                className={SscreenStyleContainer.ınputStyle}
            >
                <AntDesign className={SscreenStyleContainer.searchIconStyle} name="search1" size={20} color="#CACDD4" />   Event name, artist, place
            </TextInput>
            <View className={SscreenStyleContainer.projectButtonContainer} >
                <ScrollView horizontal={true}>
                    <View className={SscreenStyleContainer.projectButtonStyle}>
                        <ProjectButton title='€40-90' />
                        <ProjectButton title='When' />
                        <ProjectButton title='Category' />
                        <ProjectButton title='Location' />
                        <ProjectButton title='Current Location' />
                    </View>
                    <View className={SscreenStyleContainer.eraserContainer}>
                        <FontAwesome5 className={SscreenStyleContainer.ıconStyle} name="eraser" size={24} color="#4f6d7a" />
                        <Entypo className={SscreenStyleContainer.ıconStyle} name="direction" size={24} color="#4f6d7a" />
                    </View>
                </ScrollView>
            </View>
            <MapView style={SscreenStyle.mapStyle}
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
            {selectedEvent ? <View style={SscreenStyle.searchResultContainer}>
                <BottomSheet isOpen={selectedEvent}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('SearchResult')}>
                            <View style={SscreenStyle.eventsContainer}>
                                <Text className={SscreenStyleContainer.titleStyle}>EVENTS</Text>
                                <Image style={SscreenStyle.musicFestivalImage} source={require('../../images/musicFestival2.png')} />
                                <Text style={SscreenStyle.ımageHistoryText}>Daboi Concer… FRIDAY AUG 24, 9PM</Text>
                                <Text style={SscreenStyle.ımageSubText}>Brightlight Music Festival</Text>
                                <Feather style={SscreenStyle.musicIconStyle} name="music" size={17} color="gray" /><Text style={SscreenStyle.textTitle}>Indie Rock <Fontisto name="ticket" size={10} color="gray" /> €40-€90</Text>
                            </View>
                        </TouchableOpacity>
                        <ProjectEvent />
                        <View style={SscreenStyle.containerEvents}>
                            <Text className={SscreenStyleContainer.placesText}>Places</Text>
                            <View className={SscreenStyleContainer.emptyView}></View>
                            <Text style={SscreenStyle.locationText}>Lizbońska 4, Warsaw</Text>
                            <Text className={SscreenStyleContainer.locationSubText}>Daboi Concert Hall</Text>
                            <Feather style={SscreenStyle.musicIcon} name="music" size={17} color="gray" /><Text style={SscreenStyle.textTitle}>Music</Text>

                            <View className={SscreenStyleContainer.emptyView}></View>
                            <Text style={SscreenStyle.locationText2}>Zamieniecka 8, Warsaw</Text>
                            <Text className={SscreenStyleContainer.locationSubText}>Bright Lights Hall</Text>
                            <MaterialIcons style={SscreenStyle.musicIcon} name="sports-tennis" size={17} color="gray" /><Text style={SscreenStyle.gymnasticsText}>Gymnastics</Text>
                            <View className={SscreenStyleContainer.buttonContainer}>
                                <Button
                                    title="Show all 25 performers"
                                    color="#FC1055"
                                />
                            </View>
                            <Text className={SscreenStyleContainer.placesText}>Performers</Text>
                            <Image style={SscreenStyle.jazzLogoImg} source={require('../../images/Jazz_logo.png')} />
                            <Text style={SscreenStyle.drumpfetsText}>Drumpfets</Text>
                            <Text style={SscreenStyle.ımageSubText}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Jazz</Text>
                            <Text style={SscreenStyle.jazzSubText}>No Next Event</Text>

                            <Image className={SscreenStyleContainer.musicFestival2Image} source={require('../../images/musicFestival2.png')} />
                            <Text style={SscreenStyle.sawBirdsText}>Sawbirds</Text>
                            <Text style={SscreenStyle.ımageSubText}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                            <Text style={SscreenStyle.ındieRockSub}>Next event Friday Aug 25, 10PM</Text>
                            <View className={SscreenStyleContainer.buttonContainer}>
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

