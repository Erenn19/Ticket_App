import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TouchableText = (props) => {
    return (
        <TouchableOpacity>
            <Text style={{ color: 'white', marginRight: 100, fontSize: 17, marginTop: 1, textAlign: 'center', justifyContent: 'center', marginBottom: 2 }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default TouchableText

const styles = StyleSheet.create({})