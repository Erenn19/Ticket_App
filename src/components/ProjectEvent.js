import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';


const ProjectEvent = () => {
    return (
        <View style={{ height: 950, marginTop: -800 }}>
            <View style={{ backgroundColor: '#BDC0C4', marginTop: 20, width: 145, height: 90, borderRadius: 20, marginLeft: 2 }}></View>
            <Text style={{ marginLeft: 150, marginTop: -80, fontSize: 12, margin: 3 }}>Dirt Traxx WEDNESDAY AUG 22, 12PM</Text>
            <Text style={{ marginLeft: 150, fontWeight: 'bold', margin: 10 }}>Brightbike Adventure</Text>
            <MaterialIcons style={{ marginLeft: 145 }} name="sports-tennis" size={24} color="gray" /><Text style={{ marginLeft: 175, margin: 20, marginTop: -22, color: 'gray' }}>Motorcross  <Fontisto name="ticket" size={10} color="gray" /> €10</Text>
            <View style={{ marginTop: 15 }}>
                <Button
                    title="Show all 5 events"
                    color="#FC1055"
                />
            </View>
        </View>
    )
}

export default ProjectEvent

const styles = StyleSheet.create({})