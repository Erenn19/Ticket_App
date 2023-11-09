import { StyleSheet } from "react-native"
const TicketStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    varsawText: {
        fontWeight: 'bold',
        paddingLeft: 12,
        fontSize: 25,
        color: '#373A42'
    },
    calendarIcon: {
        paddingLeft: 220
    },
    monthsStyle: {
        paddingLeft: 13
    },
    varsawStyle: {
        margin: 20,
        padding: 30,
        marginLeft: 65
    },
    septemberStyle: {
        color: '#FC1055',
        fontWeight: 'bold',
        paddingTop: 15,
        fontSize: 16
    },
    capitalVarsaw: {
        fontWeight: 'normal',
        color: '#BDC0C4'
    },
    timeStyle: {
        marginTop: 5,
        color: '#BDC0C4'
    },
    dayContainerStyle: {
        backgroundColor: '#f6f7f8',
        height: 50,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    dayTextStyle: {
        marginLeft: 80,
        margin: -45,
        fontWeight: 'bold',
        fontSize: 19,
        color: '#222834'
    },
    dayNumberStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#222834',
        fontSize: 20
    },
    daysStyles: {
        fontWeight: 'normal',
        color: '#C1C1C1',
        fontSize: 10
    },
    antDesignContainer: {
        paddingLeft: 20,
        paddingTop: 20
    }
})
export default TicketStyle