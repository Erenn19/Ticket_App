import { StyleSheet } from 'react-native'

const DetailsStyle = StyleSheet.create({

    drumpfetsStyle: {
        marginLeft: 150,
        marginTop: -90,
        fontSize: 17,
        margin: 4,
        fontWeight: 'bold'
    },
    musicalIconText: {
        marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1
    },
    sawbirdsText: {
        marginLeft: 150, marginTop: -78, fontSize: 17, margin: 4, fontWeight: 'bold'
    },
    eventText: {
        marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1
    },
    kissStudioText: {
        marginLeft: 150, marginTop: -90, fontSize: 17, margin: 4, fontWeight: 'bold'
    },
    kissStudioIcon: {
        marginLeft: 150, color: 'gray', margin: 10
    },
    kissStudioSub: {
        marginLeft: 150, marginTop: -18, color: 'gray', marginTop: 1
    },

    musicFestival3: {
        marginLeft: -50, marginTop: -5
    },
    buyTicketContainer: {
        backgroundColor: 'white', marginTop: 10, height: 100, borderTopEndRadius: 30, borderTopLeftRadius: 30
    },

    buyTicketButton: {
        width: 150, height: 60, marginLeft: 230, marginTop: -20, backgroundColor: '#FC1055', borderRadius: 20, justifyContent: 'center', marginTop: -50
    },
})


export class detailScreenContainer {
    static detailContainer = "w-full h-full bg-white"
    static detail = "font-bold	text-2xl ml-2 mt-2"
    static detailText = "m-2 text-current"
    static readMore = "text-rose-500 font-bold	text-base ml-2"
    static updates = "mt-3 font-bold text-2xl ml-2"
    static history = "text-gray-500	font-bold text-base	ml-2 mt-2 mb-1"
    static historyText = "text-gray-500 ml-2 mb-2"
    static locationStyle = "font-bold text-2xl mt-3 ml-3"
    static mapStyle = "m-8 mb-10"
    static mapText = "text-gray-500 text-xl	ml-3 font-bold"
    static mapHistory = "text-gray-500 ml-3 mt-1"
    static performanceStyle = "font-bold text-2xl ml-3 mt-3 mb-3"
    static jazzImg = "h-24	w-28 ml-6"
    static sawbirdsContainer = "mt-10"
    static sawbirdsImg = "h-20 w-32	 ml-4 rounded-2xl"
    static kissStudioContainer = "mb-10"
    static buyTicketButtonText = "text-center text-white text-base	mt-0 font-bold"
    static ticketPriceText = "text-gray-500 ml-16"
    static ticketPrice = "font-bold text-lg	mt-2 ml-20"
    static moreLikeStyle = "font-bold ml-6 text-xl"
    static venueText = "font-bold ml-5 text-xl"
    static musicalIconStyle = "text-gray-500 m-2 ml-36"
    static organizersStyle = "font-bold text-2xl ml-5 mt-4 mb-2"
    static kissStudioImg = "w-28 h-20 rounded-xl ml-6"
}
export default DetailsStyle