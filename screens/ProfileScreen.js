import { Text, View, Image, Button } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ProfileStyle from '../styles/ProfileStyle';

const ProfileScreen = () => {
    return (
        <View style={ProfileStyle.profileContainer}>
            <View>
                <View style={ProfileStyle.ımageContainer}>
                    <Image style={ProfileStyle.ımageStyle} source={require('../images/Tickets.png')} />
                </View>
                <View style={ProfileStyle.ticketContainer}>
                    <Text style={ProfileStyle.ticketStyle}>Tickets</Text>
                    <Text style={ProfileStyle.priceText}>BY PRICE</Text>
                    <AntDesign style={ProfileStyle.antDesignStyle} name="swap" size={24} color="#FC1055" />
                </View>

                <View style={ProfileStyle.ticketIconContainer}>
                    <View style={ProfileStyle.entypoIconContainer}>
                        <Entypo name="ticket" size={24} color="#FC1055" />
                    </View>
                    <View>
                        <Text style={ProfileStyle.section}>Section P, Row 3</Text><Text style={ProfileStyle.priceStyle}>€30</Text>
                        <Text style={ProfileStyle.seatsStyle}>12 Seats available</Text><Text style={ProfileStyle.perPersonStyle}>per person</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View style={ProfileStyle.entypoIconContainer1}>
                        <Entypo name="ticket" size={24} color="#20DEAB" />
                    </View>
                    <View>
                        <Text style={ProfileStyle.section}>Section P, Row 3</Text><Text style={ProfileStyle.priceStyle}>€40</Text>
                        <Text style={ProfileStyle.seatsStyle}>13 Seats available</Text><Text style={ProfileStyle.perPersonStyle}>per person</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View style={ProfileStyle.entypoIconContainer2}>
                        <Entypo name="ticket" size={24} color="#54A5FF" />
                    </View>
                    <View>
                        <Text style={ProfileStyle.section}>Section P, Row 3</Text><Text style={ProfileStyle.priceStyle}>€50</Text>
                        <Text style={ProfileStyle.seatsStyle}>14 Seats available</Text><Text style={ProfileStyle.perPersonStyle}>per person</Text>
                    </View>
                </View>

            </View>
            <View style={ProfileStyle.buttonContainer}>
                <Button
                    color={'white'}
                    title="Finish"
                    onPress={() => alert("You bought the ticket")}
                />
            </View>
            <View style={ProfileStyle.priceContainer}>
                <Text style={ProfileStyle.entypo}>
                    <Entypo name="ticket" size={15} color="black" />  2 * €80
                </Text>
                <Text style={ProfileStyle.eBiletStyle}>Get now on ebilet.pl</Text>
            </View>
        </View>
    )
}
export default ProfileScreen