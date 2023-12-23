import { StyleSheet } from 'react-native'

const Sresult = StyleSheet.create({
    buyTicketButton: {
        width: 150,
        height: 60,
        marginLeft: 200,
        marginTop: -55,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center'
    },
})

export class SresultContainer {
    static container = "bg-sky-950	w-full h-full"
    static ımageContainer = "justify-center	"
    static ımage = "w-full rounded-b-3xl mb-5"
    static textContainer = "bg-sky-950"
    static mainText = "text-3xl	text-white	font-bold"
    static ıconContainer = "mt-2"
    static ıconText = "bg-sky-950 text-white m-3"
    static bottomContainer = "bg-sky-950 mt-16	w-full h-full rounded-lg ml-10"
    static priceStyle = "font-bold 	text-white text-base"
    static priceText = "font-bold 	text-zinc-300"
    static buyTicketText = "text-center	font-bold text-rose-600	text-base	"
}


export default Sresult