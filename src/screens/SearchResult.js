import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Sresult, { SresultContainer } from '../styles/Sresult';

const SearchResult = ({ navigation }) => {

    return (
        <View className={SresultContainer.container}>
            <View className={SresultContainer.ımageContainer}>
                <Image className={SresultContainer.ımage} source={require('../../images/Photo.png')} />
            </View>
            <View className={SresultContainer.textContainer}>
                <Text className={SresultContainer.mainText}>Brightlight Festival</Text>
            </View>
            <View className={SresultContainer.ıconContainer}>
                <Text className={SresultContainer.ıconText}><AntDesign name="calendar" size={18} color="white" />  Friday, 24 Aug 2019 6:30PM - 9:30PM</Text>
                <Text className={SresultContainer.ıconText}><Entypo name="location-pin" size={20} color="white" /> Daboi Concert Hall
                </Text>
                <Text className={SresultContainer.ıconText}><FontAwesome name="music" size={15} color="white" />   Indie Rock</Text>
                <Text className={SresultContainer.ıconText}><Entypo name="ticket" size={20} color="white" />  €40 - 90</Text>
                <View className={SresultContainer.bottomContainer}>
                    <Text className={SresultContainer.priceStyle}>     €30 - €80</Text>
                    <Text className={SresultContainer.priceText}>Get now on ebilet.pl</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <View style={Sresult.buyTicketButton}>
                            <Text className={SresultContainer.buyTicketText}>
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

