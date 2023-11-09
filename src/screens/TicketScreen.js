import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TicketStyle from '../styles/TicketStyle';

const TicketScreen = () => {
    return (
        <View style={TicketStyle.container}>
            <Text style={TicketStyle.varsawText}>WARSAW
                <View style={TicketStyle.antDesignContainer}>
                    <AntDesign name="down" size={15} color="#373A42" />
                </View>
                <View style={TicketStyle.calendarIcon}>
                    <MaterialCommunityIcons name="calendar-blank" size={24} color="#FC1055" />
                </View>
            </Text>
            <View style={TicketStyle.monthsStyle}>
                <Text style={TicketStyle.septemberStyle}>SEPTEMBER</Text>
                <View style={TicketStyle.dayContainerStyle}>
                    <Text style={TicketStyle.dayNumberStyle}>12             <Text style={TicketStyle.daysStyles}>THU</Text></Text>
                </View>
                <Text style={TicketStyle.dayTextStyle}>Trying New Material</Text>
            </View>
            <View style={TicketStyle.varsawStyle}>
                <Text style={TicketStyle.capitalVarsaw}>Capitol Theater, Warsaw                 </Text>
                <Text style={TicketStyle.timeStyle}>19:00-20:45</Text>
            </View>
            <View style={TicketStyle.monthsStyle}>
                <View style={TicketStyle.dayContainerStyle}>
                    <Text style={TicketStyle.dayNumberStyle}>13             <Text style={TicketStyle.daysStyles}>FRI</Text></Text>
                </View>
                <Text style={TicketStyle.dayTextStyle}>Trying New Material</Text>
            </View>
            <View style={TicketStyle.varsawStyle}>
                <Text style={TicketStyle.capitalVarsaw}>Capitol Theater, Warsaw                 </Text>
                <Text style={TicketStyle.timeStyle}>19:00-20:45</Text>
            </View>
            <View style={TicketStyle.monthsStyle}>
                <View style={TicketStyle.dayContainerStyle}>
                    <Text style={TicketStyle.dayNumberStyle}>18             <Text style={TicketStyle.daysStyles}>WED</Text></Text>
                </View>
                <Text style={TicketStyle.dayTextStyle}>Trying New Material</Text>
            </View>
            <View style={TicketStyle.varsawStyle}>
                <Text style={TicketStyle.capitalVarsaw}>Capitol Theater, Warsaw                 </Text>
                <Text style={TicketStyle.timeStyle}>19:00-20:45</Text>
            </View>
        </View>
    )
}

export default TicketScreen

