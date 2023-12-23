import { StyleSheet } from "react-native"
const TicketStyle = StyleSheet.create({

    dayTextStyle: {
        marginLeft: 80,
        margin: -35,
        fontWeight: 'bold',
        fontSize: 19,
        color: '#222834',
        marginTop: -75
    }
    
})

export class ticketScreenContainer {
    static container = "w-full	h-full	bg-white"
    static varsawText = "font-bold pl-2 text-2xl text-current mt-0 ml-2"
    static calendarIcon = "pl-56"
    static monthsStyle = "pl-4"
    static varsawStyle = "m-1 p-9 ml-16 mt-2"
    static septemberStyle = "font-bold text-red-500	pt-2 text-lg"
    static capitalVarsaw = "font-normal	text-stone-400"
    static timeStyle = "mt-2 text-stone-400"
    static dayContainerStyle = "bg-gray-200	items-center justify-center rounded-xl m-4 w-10 h-16 mt-10"
    static dayNumberStyle = "text-center font-bold text-current text-xs mt-0 justify-center"
    static daysStyles = "font-normal text-slate-400 text-xs text-center justify-center"
    static antDesignContainer = "pl-10 pt-10"
}
export default TicketStyle