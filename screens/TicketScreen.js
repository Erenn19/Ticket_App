import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const TicketScreen = () => {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <Text style={{ fontWeight: 'bold', paddingLeft: 12, fontSize: 25, color: '#373A42' }}>WARSAW
                <View style={{ paddingLeft: 20, paddingTop: 20 }}>
                    <AntDesign name="down" size={15} color="#373A42" />
                </View>
                <View style={{ paddingLeft: 220 }}>
                    <MaterialCommunityIcons name="calendar-blank" size={24} color="#FC1055" />
                </View>
            </Text>
            <View style={{ paddingLeft: 13 }}>
                <Text style={{ color: '#FC1055', fontWeight: 'bold', paddingTop: 15, fontSize: 16 }}>SEPTEMBER</Text>
                <View style={{ backgroundColor: '#f6f7f8', height: 50, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#222834', fontSize: 20 }}>12             <Text style={{ fontWeight: 'normal', color: '#C1C1C1', fontSize: 10 }}>THU</Text></Text>
                </View>
                <Text style={{ marginLeft: 80, margin: -45, fontWeight: 'bold', fontSize: 19, color: '#222834' }}>Trying New Material</Text>
            </View>
            <View style={{ margin: 20, padding: 30, marginLeft: 65 }}>
                <Text style={{ fontWeight: 'normal', color: '#BDC0C4' }}>Capitol Theater, Warsaw                 </Text>
                <Text style={{ marginTop: 5, color: '#BDC0C4' }}>19:00-20:45</Text>
            </View>
            <View style={{ paddingLeft: 13 }}>
                <View style={{ backgroundColor: '#f6f7f8', height: 50, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 20, marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#222834', fontSize: 20 }}>13             <Text style={{ fontWeight: 'normal', color: '#C1C1C1', fontSize: 11 }}>FRI</Text></Text>
                </View>
                <Text style={{ marginLeft: 80, margin: -45, fontWeight: 'bold', fontSize: 19, color: '#222834' }}>Trying New Material</Text>
            </View>
            <View style={{ margin: 20, padding: 30, marginLeft: 65 }}>
                <Text style={{ fontWeight: 'normal', color: '#BDC0C4' }}>Capitol Theater, Warsaw                 </Text>
                <Text style={{ marginTop: 5, color: '#BDC0C4' }}>19:00-20:45</Text>
            </View>
            <View style={{ paddingLeft: 13 }}>
                <View style={{ backgroundColor: '#f6f7f8', height: 50, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#222834', fontSize: 20 }}>18             <Text style={{ fontWeight: 'normal', color: '#C1C1C1', fontSize: 10 }}>WED</Text></Text>
                </View>
                <Text style={{ marginLeft: 80, margin: -45, fontWeight: 'bold', fontSize: 19, color: '#222834' }}>Trying New Material</Text>
            </View>
            <View style={{ margin: 20, padding: 30, marginLeft: 65 }}>
                <Text style={{ fontWeight: 'normal', color: '#BDC0C4' }}>Capitol Theater, Warsaw                 </Text>
                <Text style={{ marginTop: 5, color: '#BDC0C4' }}>19:00-20:45</Text>
            </View>
        </View>
    )
}

export default TicketScreen

const styles = StyleSheet.create({})