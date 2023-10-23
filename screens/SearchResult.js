import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const SearchResult = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: '#10181F', width: '100%', height: '100%' }}>
            <View style={{ justifyContent: 'center' }}>
                <Image style={{ width: '100%', borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginBottom: 15 }} source={require('../images/Photo.png')} />
            </View>
            <View style={{ backgroundColor: '#10181F', }}>
                <Text style={{ fontSize: 37, color: 'white', fontWeight: 'bold' }}>Brightlight Festival</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ backgroundColor: '#10181F', color: 'white', margin: 10 }}><AntDesign name="calendar" size={18} color="white" />  Friday, 24 Aug 2019 6:30PM - 9:30PM</Text>
                <Text style={{ backgroundColor: '#10181F', color: 'white', margin: 10 }}><Entypo name="location-pin" size={20} color="white" /> Daboi Concert Hall
                </Text>
                <Text style={{ backgroundColor: '#10181F', color: 'white', margin: 13 }}><FontAwesome name="music" size={15} color="white" />   Indie Rock</Text>
                <Text style={{ backgroundColor: '#10181F', color: 'white', margin: 10 }}><Entypo name="ticket" size={20} color="white" />  €40 - 90</Text>
                <View style={{ backgroundColor: '#10181F', marginTop: 80, width: '100%', height: '100%', borderRadius: 10, marginLeft: 40 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>     €30 - €80</Text>
                    <Text style={{ fontWeight: 'normal', color: '#616368' }}>Get now on ebilet.pl</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <View style={{ width: 150, height: 60, marginLeft: 200, marginTop: -55, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', fontSize: 15 }}>
                                Buy tickets
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        </View >
    )
}

export default SearchResult

const styles = StyleSheet.create({})