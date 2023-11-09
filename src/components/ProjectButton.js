import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

const ProjectButton = (props) => {
    return (
        <View style={{ backgroundColor: '#ffffff', borderRadius: 20, padding: 1, margin: 5, justifyContent: 'center' }}>
            <Button color="#add7f6" title={props.title} />
        </View>
    )
}

export default ProjectButton;

const styles = StyleSheet.create({})