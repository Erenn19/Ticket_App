import { Dimensions, StyleSheet } from 'react-native'

const SscreenStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    ınputStyle: {
        height: 50,
        width: '100%',
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#CACDD4',
        borderRadius: 7,
        textShadowColor: '#CACDD4',
        paddingLeft: 10,
        padding: 10,
        color: '#CACDD4'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 2
    },
    projectButtonStyle: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center'
    },
    searchIconStyle: {
        textAlign: 'left',
        alignItems: 'flex-start'
    },
    projectButtonContainer: {
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#cfdee7',
        alignItems: 'center',
        padding: 10
    },
    eraserContainer: {
        flexDirection: 'column'
    },
    ıconStyle: {
        padding: 3
    },
    searchResultContainer: {
        flex: 0
    },
    eventsContainer: {
        height: 950
    },
    titleStyle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    musicFestivalImg: {
        width: '40%',
        height: 110,
        justifyContent: 'center',
        marginTop: 14
    },
    eventsText: {
        marginLeft: 150,
        marginTop: -110,
        fontSize: 12,
        margin: 4,
        marginTop: -90
    },
    eventSubText: {
        marginLeft: 150,
        fontWeight: 'bold',
        margin: 10
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
    placesText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 25
    },
    emptyView: {
        backgroundColor: '#BDC0C4',
        marginTop: 20,
        width: 145,
        height: 90,
        borderRadius: 20,
        marginLeft: 2
    },
    locationText: {
        marginLeft: 150,
        marginTop: -84,
        fontSize: 12,
        margin: 4,
        fontWeight: 'bold'
    },
    locationSubText: {
        marginLeft: 150,
        fontWeight: 'bold',
        margin: 10,
        fontSize: 20
    },
    locationText2: {
        marginLeft: 150,
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
    musicFestival2Image: {
        width: 110,
        marginLeft: 22,
        height: 100,
        justifyContent: 'center',
        marginTop: 14,
        borderRadius: 200
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

export default SscreenStyle