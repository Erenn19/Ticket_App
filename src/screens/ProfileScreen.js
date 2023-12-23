import { Text, View, Image, Button } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ProfileStyle, { profileStyleContainer } from '../styles/ProfileStyle';

const ProfileScreen = () => {
    return (
        <View className={profileStyleContainer.profileContainer}>
            <View>
                <View className={profileStyleContainer.ımageContainer}>
                    <Image className={profileStyleContainer.ımageStyle} source={require('../../images/Tickets.png')} />
                </View>
                <View className={profileStyleContainer.ticketContainer}>
                    <Text className={profileStyleContainer.ticketStyle}>Tickets</Text>
                    <Text className={profileStyleContainer.priceText}>BY PRICE</Text>
                    <AntDesign style={ProfileStyle.antDesignStyle} name="swap" size={24} color="#FC1055" />
                </View>

                <View className={profileStyleContainer.ticketIconContainer}>
                    <View className={profileStyleContainer.entypoIconContainer}>
                        <Entypo name="ticket" size={24} color="#FC1055" />
                    </View>
                    <View>
                        <Text className={profileStyleContainer.section}>Section P, Row 3</Text><Text style={ProfileStyle.priceStyle}>€30</Text>
                        <Text className={profileStyleContainer.seatsStyle}>12 Seats available</Text><Text style={ProfileStyle.perPersonStyle}>per person</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View className={profileStyleContainer.entypoIconContainer1}>
                        <Entypo name="ticket" size={24} color="#20DEAB" />
                    </View>
                    <View>
                        <Text className={profileStyleContainer.section}>Section P, Row 3</Text><Text style={ProfileStyle.priceStyle}>€40</Text>
                        <Text className={profileStyleContainer.seatsStyle}>13 Seats available</Text><Text style={ProfileStyle.perPersonStyle}>per person</Text>
                    </View>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View className={profileStyleContainer.entypoIconContainer2}>
                        <Entypo name="ticket" size={24} color="#54A5FF" />
                    </View>
                    <View>
                        <Text className={profileStyleContainer.section}>Section P, Row 3</Text><Text style={ProfileStyle.priceStyle}>€50</Text>
                        <Text className={profileStyleContainer.seatsStyle}>14 Seats available</Text><Text style={ProfileStyle.perPersonStyle}>per person</Text>
                    </View>
                </View>

            </View>
            <View className={profileStyleContainer.buttonContainer}>
                <Button
                    color={'white'}
                    title="Finish"
                    onPress={() => alert("You bought the ticket")}
                />
            </View>
            <View style={ProfileStyle.priceContainer}>
                <Text className={profileStyleContainer.entypo}>
                    <Entypo name="ticket" size={15} color="black" />  2 * €80
                </Text>
                <Text className={profileStyleContainer.eBiletStyle}>Get now on ebilet.pl</Text>
            </View>
        </View>
    )
}
export default ProfileScreen