import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import DetailsStyle, { detailScreenContainer } from '../styles/DetailsStyle';

const Details = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View className={detailScreenContainer.detailContainer}>
                    <Text className={detailScreenContainer.detail}>Details</Text>
                    <Text className={detailScreenContainer.detailText}>Free directories: directories are perfect for customers that are searching for a particular topic. What’s great about them is that you only have to post once and they are good for long periods of time. It saves a lot of your time when you don’t have to resubmit your information every week…</Text>
                    <Text className={detailScreenContainer.readMore}>Read More</Text>
                    <Text className={detailScreenContainer.updates}>Updates</Text>
                    <Text className={detailScreenContainer.history}>July 24, 2019</Text>
                    <Text className={detailScreenContainer.historyText}>Customers that are searching for a particular topic. What’s great about them is that you only have…</Text>
                    <Text className={detailScreenContainer.readMore}>Read More</Text>
                    <Text className={detailScreenContainer.locationStyle}>Location</Text>
                    <Image className={detailScreenContainer.mapStyle} source={require('../../images/Map.png')} />
                    <Text className={detailScreenContainer.mapText}>Data Boi Concert Hall</Text>
                    <Text className={detailScreenContainer.mapHistory}>5/7 Kolejowa, 01-217 Warsaw</Text>
                    <Text className={detailScreenContainer.performanceStyle}>Performers</Text>
                    <Image className={detailScreenContainer.jazzImg} source={require('../../images/Jazz_logo.png')} />
                    <Text style={DetailsStyle.drumpfetsStyle}>Drumpfets</Text>
                    <Text className={detailScreenContainer.musicalIconStyle}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                    <Text style={DetailsStyle.musicalIconText}>No Next Event</Text>
                    <View className={detailScreenContainer.sawbirdsContainer}>
                        <Image className={detailScreenContainer.sawbirdsImg} source={require('../../images/musicFestival2.png')} />
                        <Text style={DetailsStyle.sawbirdsText}>Sawbirds</Text>
                        <Text className={detailScreenContainer.musicalIconStyle}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Indie Rock</Text>
                        <Text style={DetailsStyle.eventText}>No Next Event</Text>
                    </View>
                    <Text className={detailScreenContainer.organizersStyle}>
                        Organizers
                    </Text>
                    <View className={detailScreenContainer.kissStudioContainer}>
                        <Image className={detailScreenContainer.kissStudioImg} source={require('../../images/Header.jpg')} />
                        <Text style={DetailsStyle.kissStudioText}>Kiss Studio</Text>
                        <Text style={DetailsStyle.kissStudioIcon}><Ionicons name="ios-musical-notes" size={14} color="gray" /> Concerts, parties</Text>
                        <Text style={DetailsStyle.kissStudioSub}>Next event Friday Aug 25, 10PM</Text>
                    </View>
                    <Text className={detailScreenContainer.venueText}>Also in this venue</Text>
                    <ScrollView horizontal={true} >
                        <Image source={require('../../images/Recommended.jpg')} />
                        <Image style={DetailsStyle.musicFestival3} source={require('../../images/musicFestival3.png')} />
                    </ScrollView>
                    <Text className={detailScreenContainer.moreLikeStyle}>More like this</Text>
                    <ScrollView horizontal={true} >
                        <Image source={require('../../images/Recommended.jpg')} />
                        <Image style={DetailsStyle.musicFestival3} source={require('../../images/musicFestival3.png')} />
                    </ScrollView>
                    <View style={DetailsStyle.buyTicketContainer}>
                        <Text className={detailScreenContainer.ticketPrice}>€30 - €80</Text>
                        <Text className={detailScreenContainer.ticketPriceText}>Get now on ebilet.pl</Text>
                        <View style={DetailsStyle.buyTicketButton}>
                            <Text className={detailScreenContainer.buyTicketButtonText}>
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