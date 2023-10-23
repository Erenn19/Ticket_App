import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Details = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, marginLeft: 9, marginTop: 20 }}>Details</Text>
                    <Text style={{ margin: 10, color: '#616368' }}>Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16, marginLeft: 9 }}>Read More</Text>
                    <Text style={{ marginTop: 32, fontWeight: 'bold', fontSize: 20, marginLeft: 8 }}>Updates</Text>
                    <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 15, marginLeft: 8, marginTop: 10 }}>July 24, 2019</Text>
                    <Text style={{ color: '#616368', marginLeft: 8 }}>Customers that are searching for a particular topic. What’s great about them is that you only have…</Text>
                    <Text style={{ color: '#FC1055', marginTop: 15, marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>Read More</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20, marginLeft: 10 }}>Location</Text>
                    <Image style={{ margin: 30 }} source={require('../images/Map.png')} />
                    <Text style={{ color: '#616368', fontSize: 15, marginLeft: 14, marginTop: -20, fontWeight: 'bold' }}>Data Boi Concert Hall</Text>
                    <Text style={{ color: '#616368', marginLeft: 14, marginTop: 10 }}>5/7 Kolejowa, 01-217 Warsaw</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, marginLeft: 20, marginTop: 10, marginBottom: 14 }}>Performers</Text>
                    <Image style={{ height: 100, width: 120, marginLeft: 20 }} source={require('../images/Jazz_logo.png')} />
                    <Text style={{ marginLeft: 150, marginTop: -90, fontSize: 17, margin: 4, fontWeight: 'bold' }}>Drumpfets</Text>
                    <Text style={{ marginLeft: 150, color: 'gray', margin: 10 }}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                    <Text style={{ marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1 }}>No Next Event</Text>
                    <View style={{ marginTop: 35 }}>
                        <Image style={{ height: 100, width: 120, marginLeft: 20, borderRadius: 100 }} source={require('../images/musicFestival2.png')} />
                        <Text style={{ marginLeft: 150, marginTop: -90, fontSize: 17, margin: 4, fontWeight: 'bold' }}>Sawbirds</Text>
                        <Text style={{ marginLeft: 150, color: 'gray', margin: 10 }}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                        <Text style={{ marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1 }}>No Next Event</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 18, marginTop: 20, marginBottom: 10 }}>
                        Organizers
                    </Text>
                    <View style={{ marginBottom: 60 }}>
                        <Image style={{ width: 100, height: 100, borderRadius: 100, marginLeft: 23 }} source={require('../images/Header.jpg')} />
                        <Text style={{ marginLeft: 150, marginTop: -90, fontSize: 17, margin: 4, fontWeight: 'bold' }}>Kiss Studio</Text>
                        <Text style={{ marginLeft: 150, color: 'gray', margin: 10 }}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Concerts, parties</Text>
                        <Text style={{ marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1 }}>Next event Friday Aug 25, 10PM</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold', marginLeft: 20, fontSize: 20 }}>Also in this venue</Text>
                    <ScrollView horizontal={true} >
                        <Image source={require('../images/Recommended.jpg')} />
                        <Image style={{ marginLeft: -50, marginTop: -5 }} source={require('../images/musicFestival3.png')} />
                    </ScrollView>
                    <Text style={{ fontWeight: 'bold', marginLeft: 20, fontSize: 20 }}>More like this</Text>
                    <ScrollView horizontal={true} >
                        <Image source={require('../images/Recommended.jpg')} />
                        <Image style={{ marginLeft: -50, marginTop: -5 }} source={require('../images/musicFestival3.png')} />
                    </ScrollView>
                    <View style={{ backgroundColor: 'white', marginTop: 10, height: 100, borderTopEndRadius: 30, borderTopLeftRadius: 30 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 80, marginTop: 30 }}>€30 - €80</Text>
                        <Text style={{ color: '#A6AAB1', marginLeft: 65 }}>Get now on ebilet.pl</Text>
                        <View style={{ width: 150, height: 60, marginLeft: 230, marginTop: -20, backgroundColor: '#FC1055', borderRadius: 20, justifyContent: 'center', marginTop: -50 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 15, marginTop: 2 }}>
                                Buy tickets
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default Details