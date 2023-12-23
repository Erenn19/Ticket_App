import { Dimensions, StyleSheet } from 'react-native'

const SscreenStyle = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 2
    },
    eventsContainer: {
        height: 950
    },
    musicIcon: {
        marginLeft: 145
    },
    musicFestivalImage: {
        width: '40%',
        height: 110,
        justifyContent: 'center',
        marginTop: 14
    },
    ımageHistoryText: {
        marginLeft: 150,
        marginTop: -110,
        fontSize: 12,
        margin: 4,
        marginTop: -90
    },
    ımageSubText: {
        marginLeft: 150,
        fontWeight: 'bold',
        margin: 10,
        color: 'black'
    },
    musicIconStyle: {
        marginLeft: 145
    },
    textTitle: {
        marginLeft: 170,
        marginTop: -18,
        color: 'gray'
    },
    containerEvents: {
        marginTop: -780,
        marginTop: -750
    },
    locationText: {
        marginLeft: 145,
        marginTop: -84,
        fontSize: 12,
        margin: 4,
        fontWeight: 'bold'
    },
    locationText2: {
        marginLeft: 145,
        marginTop: -84,
        fontSize: 12,
        margin: 4,
        fontWeight: 'bold'
    },
    gymnasticsText: {
        marginLeft: 165,
        marginTop: -18,
        color: 'gray'
    },
    buttonContainer: {
        marginTop: 30,
        marginBottom: 15
    },
    jazzLogoImg: {
        width: 115,
        marginLeft: 22,
        height: 95,
        justifyContent: 'center',
        marginTop: 12,
        borderRadius: 200
    },
    drumpfetsText: {
        marginLeft: 150,
        marginTop: -90,
        fontSize: 22,
        margin: 4,
        fontWeight: 'bold'
    },
    jazzSubText: {
        marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1
    },
    sawBirdsText: {
        marginLeft: 150,
        marginTop: -92,
        fontSize: 22,
        margin: 4,
        fontWeight: 'bold'
    },
    ındieRockSub: {
        marginLeft: 150,
        marginTop: -18,
        color: 'gray',
        marginTop: 1
    }

})

export class SscreenStyleContainer {
    static container = "flex-1"
    static ınputStyle = "h-12 text-neutral-300 bg-white border-2 w-full border-blue-300	rounded-lg	pl-2 p-4 "
    static projectButtonStyle = "flex-row text-center justify-center	"
    static searchIconStyle = "text-left flex-start"
    static projectButtonContainer = "flex-row rounded-lg bg-cyan-200	items-center	p-2"
    static eraserContainer = "flex-column"
    static ıconStyle = "p-2"
    static titleStyle = "ml-2 font-bold	text-xl	"
    static placesText = "ml-2 font-bold text-2xl"
    static musicFestival2Image = "w-28	ml-6 h-24	rounded-3xl	 justify-center	mt-3.5	"
    static locationSubText = "font-bold m-3	text-xs	ml-36"
    static buttonContainer = "mt-8 mb-2"
    static emptyView = "bg-slate-400 mt-5	w-36	h-24	rounded-2xl	ml-0"
}

export default SscreenStyle