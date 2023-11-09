import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { cloneElement, createElement } from 'react'

export const iconButton = ({ props }) => {
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', backgroundColor: '#90e0ef', alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 135, height: 56 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#a2d2ff', borderRadius: 10, height: 30, width: 33, padding: 2 }}>
                        {cloneElement(props.icon, {
                            size: 35
                        }
                        )}
                        {createElement(props.iconElement, {

                        })}
                    </View>
                    <Text style={{ color: '#5798FF', textAlign: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>Music</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default iconButton

const styles = StyleSheet.create({})