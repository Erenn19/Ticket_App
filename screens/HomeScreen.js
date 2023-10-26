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
const HomeScreen = () => {
    return (
        <ScrollView alwaysBounceHorizontal={false} directionalLockEnabled={false}  >
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', width: '100%', height: '100%' }}>
                <Text style={{ fontWeight: 'bold', fontSize: '28', color: '#373A42', textAlign: 'left', paddingLeft: 20 }}>For You                                      <Feather style={{ textAlign: 'right', paddingRight: 50 }} name="sliders" size={24} color="#FC1055" />
                </Text>
                <ScrollView horizontal={true}>
                    <Box style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/musicFestival2.png')} />
                        <Image style={{ marginLeft: -32 }} source={require('../images/musicFestival.png')} />
                    </Box>
                </ScrollView>
                <Text style={{ fontWeight: 'bold', fontSize: '28', color: '#373A42', textAlign: 'left', paddingLeft: 20 }}>Collections</Text>
                <ScrollView horizontal={true}>
                    <Box style={{ flexDirection: 'row' }}>
                        <Image source={require('../images/Recommended.jpg')} />
                        <Image style={{ marginLeft: -37 }} source={require('../images/Recommended2.png')} />
                    </Box>
                </ScrollView>
                <Text style={{ fontWeight: 'bold', fontSize: '28', color: '#373A42', textAlign: 'left', paddingLeft: 20 }}>Discover</Text>
                <Box style={{ flexDirection: 'row', padding: 10 }}>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#ff8fa3', alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 135, height: 56 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#ffcad4', borderRadius: 10, height: 30, width: 33, padding: 2 }}>
                                    <EvilIcons name="location" size={30} color="#FC1055" />
                                </View>
                                <Text style={{ color: '#FC1055', textAlign: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>YOUR AREA</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* <iconButton iconElement={EvilIcons} icon={<EvilIcons name="location" size={30} color="#FC1055" />} /> */}
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', backgroundColor: '#90e0ef', alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 135, height: 56 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#a2d2ff', borderRadius: 10, height: 30, width: 33, padding: 2 }}>
                                    <Feather style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} name="music" size={20} color="#5798FF" />
                                </View>
                                <Text style={{ color: '#5798FF', textAlign: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>Music</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', backgroundColor: '#ffbe0b', alignItems: 'center', justifyContent: 'center', borderRadius: 100, width: 135, height: 56 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: '#f4a261', borderRadius: 10, height: 30, width: 33, padding: 2 }}>
                                    <MaterialIcons name="sports-tennis" size={24} color="yellow" />
                                </View>
                                <Text style={{ color: 'yellow', textAlign: 'center', flexDirection: 'column', alignItems: 'center', padding: 5 }}>Sports</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Box>
                <VarsawBar />
                <Text style={{ fontSize: 15, color: '#FC1055', marginTop: 30, marginLeft: 15 }}>SEP</Text>
                <Text style={{ width: 45, height: 60, marginTop: 15, marginLeft: 3, fontWeight: 'bold', fontSize: 20, color: '#222834', textAlign: 'center', fontStyle: 'normal', fontWeight: 600 }}>12           <Text style={{ fontWeight: 'normal', fontSize: 10, color: '#C1C1C1' }}>THU</Text></Text>
                <View style={{ alignItems: 'center', borderRadius: 20, marginRight: 200 }}>
                    <Image style={{ marginRight: -280, marginTop: -100 }} source={require('../images/Recommended.jpg')} />
                </View>
                <View style={{ borderRadius: 10, width: 330, backgroundColor: '#cccccc', height: 40, marginLeft: 70, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableText text='3 EVENTS MORE' />
                    <View style={{ marginLeft: 280, marginTop: -20 }}>
                        <AntDesign name="right" size={15} color="white" />
                    </View>
                </View>
                <Text style={{ width: 45, height: 60, marginTop: 15, marginLeft: 3, fontWeight: 'bold', fontSize: 20, color: '#222834', textAlign: 'center', fontStyle: 'normal', fontWeight: 600 }}>13           <Text style={{ fontWeight: 'normal', fontSize: 10, color: '#C1C1C1' }}>FRI</Text> </Text>
                <View style={{ alignItems: 'center', borderRadius: 20, marginTop: 40, marginRight: 200 }}>
                    <Image style={{ marginRight: -280, marginTop: -100, width: 370, marginRight: -250 }} source={require('../images/musicFestival3.png')} />
                </View>
                <View style={{ borderRadius: 10, width: 330, backgroundColor: '#cccccc', height: 40, marginLeft: 70, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableText text='6 EVENTS MORE' />
                    <View style={{ marginLeft: 280, marginTop: -20 }}>
                        <AntDesign name="right" size={15} color="white" />
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}
export default HomeScreen