import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from './Button';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Box from './Box';
function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return label === 'Home' ? (
                    <Button height={80} flex={1} onPress={onPress}>
                        <AntDesign name="home" size={24} color={isFocused ? '#FC1055' : '#CACDD4'} />
                    </Button>
                ) : (
                    <Button height={80} flex={1} onPress={onPress}>
                        {label === 'Search' && <AntDesign name="search1" size={24} color={isFocused ? '#FC1055' : '#CACDD4'} />}
                        {label === 'Ticket' && <Entypo name="ticket" size={24} color={isFocused ? '#FC1055' : '#CACDD4'} />}
                        {label === 'Profile' && <AntDesign name="user" size={24} color={isFocused ? '#FC1055' : '#CACDD4'} />}
                    </Button>
                );
            })}
        </View>
    );
}

export default TabBar;