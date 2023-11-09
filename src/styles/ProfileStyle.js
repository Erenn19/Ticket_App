import { StyleSheet } from 'react-native'

const ProfileStyle = StyleSheet.create({
    profileContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    ımageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ımageStyle: {
        marginTop: 300
    },
    ticketContainer: {
        flexDirection: 'row'
    },
    ticketStyle: {
        paddingTop: 310,
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 22,
        color: 'black'
    },
    priceText: {
        paddingTop: 315,
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 22,
        paddingLeft: 200,
        color: '#FC1055'
    },
    antDesignStyle: {
        paddingTop: 315,
        paddingLeft: 15
    },
    ticketIconContainer: {
        paddingTop: 20,
        paddingLeft: 22,
        flexDirection: 'row'
    },
    entypoIconContainer: {
        backgroundColor: '#FFD6E2',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    entypoIconContainer1: {
        backgroundColor: '#D3FFF1',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    entypoIconContainer2: {
        backgroundColor: '#E3F4FF',
        borderRadius: 10,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    section: {
        fontWeight: 'bold',
        color: '#373A42',
        paddingLeft: 10
    },
    priceStyle: {
        paddingLeft: 320,
        margin: -20,
        fontWeight: 'bold',
        color: '#373A42'
    },
    seatsStyle: {
        paddingTop: 25,
        paddingLeft: 10,
        fontWeight: 'normal',
        color: '#BDC0C4'
    },
    perPersonStyle: {
        paddingLeft: 280,
        margin: -15,
        color: '#BDC0C4'
    },
    buttonContainer: {
        height: 60,
        backgroundColor: '#FC1055',
        width: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 120,
        marginLeft: 200
    },
    priceContainer: {
        marginTop: -50,
        backgroundColor: 'white',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    entypo: {
        fontWeight: 'bold'
    },
    eBiletStyle: {
        color: '#A6AAB1'
    }

})
export default ProfileStyle