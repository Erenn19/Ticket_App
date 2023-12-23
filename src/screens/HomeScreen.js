import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react'
import Box from '../components/Box';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TouchableText from '../components/TouchableText';
import VarsawBar from '../components/Varsaw';
import HomeScreenStyle, { HomeScreenStyle_, HomeScreenStylee, boxContainer, boxContainerClass, collectionsContainer, discoverContainer, forYouTextContainer, homeScreenContainer, imageContainer, musicContainer, musicIconClass, musicIconContainer, musicText, sepTextContainer, slidersIconContainer, sportsContainer, sportsIconContainer, sportsText, yourAreaContainer, yourAreaText, yourAreaView } from '../styles/HomeScreenStyle';

const HomeScreen = () => {

    return (
        <ScrollView alwaysBounceHorizontal={false} directionalLockEnabled={false}  >
            <View className={homeScreenContainer.homeScreen}>
                <Text className={homeScreenContainer.forYouText}>For You                                   <Feather style={homeScreenContainer.slidersIcon} name="sliders" size={24} color="#FC1055" />
                </Text>
                <ScrollView horizontal={true}>
                    <Box className={homeScreenContainer.box}>
                        <Image source={require('../../images/musicFestival2.png')} />
                        <Image className={homeScreenContainer.image} source={require('../../images/musicFestival.png')} />
                    </Box>
                </ScrollView>
                <Text className={homeScreenContainer.collections}>Collections</Text>
                <ScrollView horizontal={true}>
                    <Box className={homeScreenContainer.box}>
                        <Image source={require('../../images/Recommended.jpg')} />
                        <Image className={homeScreenContainer.image} source={require('../../images/Recommended2.png')} />
                    </Box>
                </ScrollView>
                <Text className={homeScreenContainer.discover}>Discover</Text>
                <Box className={homeScreenContainer.boxContainerC}>
                    <TouchableOpacity>
                        <View className={homeScreenContainer.yourArea}>
                            <View className={homeScreenContainer.box}>
                                <View className={homeScreenContainer.yourAreaView}>
                                    <EvilIcons name="location" size={30} color="#FC1055" />
                                </View>
                                <Text className={homeScreenContainer.yourAreaText}>YOUR AREA</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* <iconButton iconElement={EvilIcons} icon={<EvilIcons name="location" size={30} color="#FC1055" />} /> */}
                    <TouchableOpacity>
                        <View className={homeScreenContainer.musicContainer}>
                            <View className={homeScreenContainer.box}>
                                <View className={homeScreenContainer.musicIcon}>
                                    <Feather className={homeScreenContainer.musicIconC} name="music" size={20} color="#5798FF" />
                                </View>
                                <Text className={homeScreenContainer.musicText}>Music</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View className={homeScreenContainer.sportContainer}>
                            <View className={homeScreenContainer.box}>
                                <View className={homeScreenContainer.sportTennis}>
                                    <MaterialIcons name="sports-tennis" size={24} color="yellow" />
                                </View>
                                <Text className={homeScreenContainer.sportsText}>Sports</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Box>
                <VarsawBar />
                <Text className={homeScreenContainer.sepText}>SEP</Text>
                <Text className={homeScreenContainer.dayStyle}>12           <Text className={homeScreenContainer.thuText}>THU</Text></Text>
                <View className={homeScreenContainer.recommendedImgContainer}>
                    <Image style={HomeScreenStyle.ımgStyle} source={require('../../images/Recommended.jpg')} />
                </View>
                <View className={homeScreenContainer.eventsButtonStyle}>
                    <TouchableText text='3 EVENTS MORE' />
                    <View style={HomeScreenStyle.rightIconContainer}>
                        <AntDesign name="right" size={15} color="white" />
                    </View>
                </View>
                <Text className={homeScreenContainer.dayStyle}>13           <Text className={homeScreenContainer.thuText}>FRI</Text> </Text>
                <View className={homeScreenContainer.musicFestivalImg}>
                    <Image style={HomeScreenStyle.ımageStyle} source={require('../../images/musicFestival3.png')} />
                </View>
                <View className={homeScreenContainer.eventsButtonStyle}>
                    <TouchableText text='6 EVENTS MORE' />
                    <View style={HomeScreenStyle.rightIconContainer}>
                        <AntDesign name="right" size={15} color="white" />
                    </View>
                </View>
            </View>

        </ScrollView >
    )
}
export default HomeScreen