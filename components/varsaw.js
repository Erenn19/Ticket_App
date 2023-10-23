import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const VarsawBar = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginTop: 50 }}>
                <Entypo style={{ paddingLeft: 16 }} name="direction" size={16} color="#C1C6C6" />
                <Text style={{ color: '#CACDD4', paddingLeft: 4 }}>
                    VARSAW
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: '40', marginTop: 0, textAlign: 'left', marginLeft: 10 }}> Upcoming                     <View><AntDesign style={{ textAlign: 'right', marginBottom: 8 }} name="arrowright" size={20} color="#FC1055" /></View>
                </Text>
            </View>
        </View>
    )
}
export default VarsawBar
const styles = StyleSheet.create({})