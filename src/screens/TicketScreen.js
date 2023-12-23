import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TicketStyle, { ticketScreenContainer } from '../styles/TicketStyle';

const TicketScreen = () => {
    return (
        <View className={ticketScreenContainer.container}>
            <Text className={ticketScreenContainer.varsawText}>WARSAW
                <View className={ticketScreenContainer.antDesignContainer}>
                    {/* <AntDesign name="down" size={15} color="#373A42" /> */}
                </View>
                <View className={ticketScreenContainer.calendarIcon}>
                    <MaterialCommunityIcons name="calendar-blank" size={24} color="#FC1055" />
                </View>
            </Text>
            <View className={ticketScreenContainer.monthsStyle}>
                <Text className={ticketScreenContainer.septemberStyle}>SEPTEMBER</Text>
                <View className={ticketScreenContainer.dayContainerStyle}>
                    <Text className={ticketScreenContainer.dayNumberStyle}>12             <Text className={ticketScreenContainer.daysStyles}>THU</Text></Text>
                </View>
                <Text style={TicketStyle.dayTextStyle}>Trying New Material</Text>
            </View>
            <View className={ticketScreenContainer.varsawStyle}>
                <Text className={ticketScreenContainer.capitalVarsaw}>Capitol Theater, Warsaw                 </Text>
                <Text className={ticketScreenContainer.timeStyle}>19:00-20:45</Text>
            </View>
            <View className={ticketScreenContainer.monthsStyle}>
                <View className={ticketScreenContainer.dayContainerStyle}>
                    <Text className={ticketScreenContainer.dayNumberStyle}>13             <Text className={ticketScreenContainer.daysStyles}>FRI</Text></Text>
                </View>
                <Text style={TicketStyle.dayTextStyle}>Trying New Material</Text>
            </View>
            <View className={ticketScreenContainer.varsawStyle}>
                <Text className={ticketScreenContainer.capitalVarsaw}>Capitol Theater, Warsaw                 </Text>
                <Text className={ticketScreenContainer.timeStyle}>19:00-20:45</Text>
            </View>
            <View className={ticketScreenContainer.monthsStyle}>
                <View className={ticketScreenContainer.dayContainerStyle}>
                    <Text className={ticketScreenContainer.dayNumberStyle}>18             <Text className={ticketScreenContainer.daysStyles}>WED</Text></Text>
                </View>
                <Text style={TicketStyle.dayTextStyle}>Trying New Material</Text>
            </View>
            <View className={ticketScreenContainer.varsawStyle}>
                <Text className={ticketScreenContainer.capitalVarsaw}>Capitol Theater, Warsaw                 </Text>
                <Text className={ticketScreenContainer.timeStyle}>19:00-20:45</Text>
            </View>
        </View>
    )
}

export default TicketScreen

