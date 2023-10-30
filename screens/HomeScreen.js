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
import HomeScreenStyle from '../styles/HomeScreenStyle';
const HomeScreen = () => {
    return (
        <ScrollView alwaysBounceHorizontal={false} directionalLockEnabled={false}  >
            <View style={HomeScreenStyle.homeScreenContainer}>
                <Text style={HomeScreenStyle.forYouStyle}>For You                                      <Feather style={HomeScreenStyle.slidersIcon} name="sliders" size={24} color="#FC1055" />
                </Text>
                <ScrollView horizontal={true}>
                    <Box style={HomeScreenStyle.boxContainer}>
                        <Image source={require('../images/musicFestival2.png')} />
                        <Image style={HomeScreenStyle.boxImg} source={require('../images/musicFestival.png')} />
                    </Box>
                </ScrollView>
                <Text style={HomeScreenStyle.collectionsStyle}>Collections</Text>
                <ScrollView horizontal={true}>
                    <Box style={HomeScreenStyle.boxContainer}>
                        <Image source={require('../images/Recommended.jpg')} />
                        <Image style={HomeScreenStyle.recommendedImg} source={require('../images/Recommended2.png')} />
                    </Box>
                </ScrollView>
                <Text style={HomeScreenStyle.discoverText}>Discover</Text>
                <Box style={HomeScreenStyle.boxTouchable}>
                    <TouchableOpacity>
                        <View style={HomeScreenStyle.locationIconContainer}>
                            <View style={HomeScreenStyle.viewContainer}>
                                <View style={HomeScreenStyle.locationIcon}>
                                    <EvilIcons name="location" size={30} color="#FC1055" />
                                </View>
                                <Text style={HomeScreenStyle.ıconText}>YOUR AREA</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* <iconButton iconElement={EvilIcons} icon={<EvilIcons name="location" size={30} color="#FC1055" />} /> */}
                    <TouchableOpacity>
                        <View style={HomeScreenStyle.locationMusicContainer}>
                            <View style={HomeScreenStyle.viewContainer}>
                                <View style={HomeScreenStyle.musicContainer}>
                                    <Feather style={HomeScreenStyle.musicStyle} name="music" size={20} color="#5798FF" />
                                </View>
                                <Text style={HomeScreenStyle.musicText}>Music</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={HomeScreenStyle.sportsContainer}>
                            <View style={HomeScreenStyle.viewContainer}>
                                <View style={HomeScreenStyle.sportsIcon}>
                                    <MaterialIcons name="sports-tennis" size={24} color="yellow" />
                                </View>
                                <Text style={HomeScreenStyle.sportsText}>Sports</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Box>
                <VarsawBar />
                <Text style={HomeScreenStyle.sepText}>SEP</Text>
                <Text style={HomeScreenStyle.dayStyle}>12           <Text style={HomeScreenStyle.thuText}>THU</Text></Text>
                <View style={HomeScreenStyle.recommendedImgContainer}>
                    <Image style={HomeScreenStyle.ımgStyle} source={require('../images/Recommended.jpg')} />
                </View>
                <View style={HomeScreenStyle.eventsButtonStyle}>
                    <TouchableText text='3 EVENTS MORE' />
                    <View style={HomeScreenStyle.rightIconContainer}>
                        <AntDesign name="right" size={15} color="white" />
                    </View>
                </View>
                <Text style={HomeScreenStyle.dayStyle}>13           <Text style={HomeScreenStyle.thuText}>FRI</Text> </Text>
                <View style={HomeScreenStyle.musicFestivalImg}>
                    <Image style={HomeScreenStyle.ımageStyle} source={require('../images/musicFestival3.png')} />
                </View>
                <View style={HomeScreenStyle.eventsButtonStyle}>
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