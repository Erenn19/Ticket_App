import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import DetailsStyle from '../styles/DetailsStyle';

const Details = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={DetailsStyle.detailContainer}>
                    <Text style={DetailsStyle.detail}>Details</Text>
                    <Text style={DetailsStyle.detailText}>Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
                    <Text style={DetailsStyle.readMore}>Read More</Text>
                    <Text style={DetailsStyle.updates}>Updates</Text>
                    <Text style={DetailsStyle.history}>July 24, 2019</Text>
                    <Text style={DetailsStyle.historyText}>Customers that are searching for a particular topic. What’s great about them is that you only have…</Text>
                    <Text style={DetailsStyle.readMore}>Read More</Text>
                    <Text style={DetailsStyle.locationStyle}>Location</Text>
                    <Image style={DetailsStyle.mapStyle} source={require('../../images/Map.png')} />
                    <Text style={DetailsStyle.mapText}>Data Boi Concert Hall</Text>
                    <Text style={DetailsStyle.mapHistory}>5/7 Kolejowa, 01-217 Warsaw</Text>
                    <Text style={DetailsStyle.performanceStyle}>Performers</Text>
                    <Image style={DetailsStyle.jazzImg} source={require('../../images/Jazz_logo.png')} />
                    <Text style={DetailsStyle.drumpfetsStyle}>Drumpfets</Text>
                    <Text style={DetailsStyle.musicalIconStyle}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                    <Text style={DetailsStyle.musicalIconText}>No Next Event</Text>
                    <View style={DetailsStyle.sawbirdsContainer}>
                        <Image style={DetailsStyle.sawbirdsImg} source={require('../../images/musicFestival2.png')} />
                        <Text style={DetailsStyle.sawbirdsText}>Sawbirds</Text>
                        <Text style={DetailsStyle.musicalIconStyle}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                        <Text style={DetailsStyle.eventText}>No Next Event</Text>
                    </View>
                    <Text style={DetailsStyle.organizersStyle}>
                        Organizers
                    </Text>
                    <View style={DetailsStyle.kissStudioContainer}>
                        <Image style={DetailsStyle.kissStudioImg} source={require('../../images/Header.jpg')} />
                        <Text style={DetailsStyle.kissStudioText}>Kiss Studio</Text>
                        <Text style={DetailsStyle.kissStudioIcon}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Concerts, parties</Text>
                        <Text style={DetailsStyle.kissStudioSub}>Next event Friday Aug 25, 10PM</Text>
                    </View>
                    <Text style={DetailsStyle.venueText}>Also in this venue</Text>
                    <ScrollView horizontal={true} >
                        <Image source={require('../../images/Recommended.jpg')} />
                        <Image style={DetailsStyle.musicFestival3} source={require('../../images/musicFestival3.png')} />
                    </ScrollView>
                    <Text style={DetailsStyle.moreLikeStyle}>More like this</Text>
                    <ScrollView horizontal={true} >
                        <Image source={require('../../images/Recommended.jpg')} />
                        <Image style={DetailsStyle.musicFestival3} source={require('../../images/musicFestival3.png')} />
                    </ScrollView>
                    <View style={DetailsStyle.buyTicketContainer}>
                        <Text style={DetailsStyle.ticketPrice}>€30 - €80</Text>
                        <Text style={DetailsStyle.ticketPriceText}>Get now on ebilet.pl</Text>
                        <View style={DetailsStyle.buyTicketButton}>
                            <Text style={DetailsStyle.buyTicketButtonText}>
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