import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Sresult from '../styles/Sresult';

const SearchResult = ({ navigation }) => {

    return (
        <View style={Sresult.container}>
            <View style={Sresult.ımageContainer}>
                <Image style={Sresult.ımage} source={require('../../images/Photo.png')} />
            </View>
            <View style={Sresult.textContainer}>
                <Text style={Sresult.mainText}>Brightlight Festival</Text>
            </View>
            <View style={Sresult.ıconContainer}>
                <Text style={Sresult.ıconText}><AntDesign name="calendar" size={18} color="white" />  Friday, 24 Aug 2019 6:30PM - 9:30PM</Text>
                <Text style={Sresult.ıconText}><Entypo name="location-pin" size={20} color="white" /> Daboi Concert Hall
                </Text>
                <Text style={Sresult.ıconText}><FontAwesome name="music" size={15} color="white" />   Indie Rock</Text>
                <Text style={Sresult.ıconText}><Entypo name="ticket" size={20} color="white" />  €40 - 90</Text>
                <View style={Sresult.bottomContainer}>
                    <Text style={Sresult.priceStyle}>     €30 - €80</Text>
                    <Text style={Sresult.priceText}>Get now on ebilet.pl</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                        <View style={Sresult.buyTicketButton}>
                            <Text style={Sresult.buyTicketText}>
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

