import { Text, View, Image, Button } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const TicketScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
            <View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ marginTop: 300 }} source={require('../images/Tickets.png')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ paddingTop: 310, fontWeight: 'bold', fontSize: 20, paddingLeft: 22, color: 'black' }}>Tickets</Text>
                    <Text style={{ paddingTop: 315, fontWeight: 'bold', fontSize: 15, paddingLeft: 22, paddingLeft: 200, color: '#FC1055' }}>BY PRICE</Text>
                    <AntDesign style={{ paddingTop: 315, paddingLeft: 15 }} name="swap" size={24} color="#FC1055" />
                </View>
                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#FFD6E2', borderRadius: 10, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="ticket" size={24} color="#FC1055" />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#373A42', paddingLeft: 10 }}>Section P, Row 3</Text><Text style={{ paddingLeft: 320, margin: -20, fontWeight: 'bold', color: '#373A42' }}>€30</Text>
                        <Text style={{ paddingTop: 25, paddingLeft: 10, fontWeight: 'normal', color: '#BDC0C4' }}>12 Seats available</Text><Text style={{ paddingLeft: 280, margin: -15, color: '#BDC0C4' }}>per person</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#D3FFF1', borderRadius: 10, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="ticket" size={24} color="#20DEAB" />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#373A42', paddingLeft: 10 }}>Section P, Row 3</Text><Text style={{ paddingLeft: 320, margin: -20, fontWeight: 'bold', color: '#373A42' }}>€40</Text>
                        <Text style={{ paddingTop: 25, paddingLeft: 10, fontWeight: 'normal', color: '#BDC0C4' }}>13 Seats available</Text><Text style={{ paddingLeft: 280, margin: -15, color: '#BDC0C4' }}>per person</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 20, paddingLeft: 22, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#E3F4FF', borderRadius: 10, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
                        <Entypo name="ticket" size={24} color="#54A5FF" />
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#373A42', paddingLeft: 10 }}>Section P, Row 3</Text><Text style={{ paddingLeft: 320, margin: -20, fontWeight: 'bold', color: '#373A42' }}>€50</Text>
                        <Text style={{ paddingTop: 25, paddingLeft: 10, fontWeight: 'normal', color: '#BDC0C4' }}>14 Seats available</Text><Text style={{ paddingLeft: 280, margin: -15, color: '#BDC0C4' }}>per person</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 60, backgroundColor: '#FC1055', width: 200, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 120, marginLeft: 200 }}>
                <Button
                    color={'white'}
                    title="Finish"
                    onPress={() => alert("You bought the ticket")}
                />
            </View>
            <View style={{ marginTop: -50, backgroundColor: 'white', width: 200, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>
                    <Entypo name="ticket" size={15} color="black" />  2 * €80
                </Text>
                <Text style={{ color: '#A6AAB1' }}>Get now on ebilet.pl</Text>
            </View>
        </View>
    )
}
export default TicketScreen