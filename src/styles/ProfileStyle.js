import { StyleSheet } from 'react-native'

const ProfileStyle = StyleSheet.create({

    antDesignStyle: {
        paddingTop: 320,
        paddingLeft: 15
    },
    priceStyle: {
        paddingLeft: 320,
        margin: -20,
        fontWeight: 'bold',
        color: '#373A42'
    },

    perPersonStyle: {
        paddingLeft: 280,
        margin: -15,
        color: '#BDC0C4'
    },
    priceContainer: {
        marginTop: -50,
        backgroundColor: 'white',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },


})

export class profileStyleContainer {
    static profileContainer = "bg-white h-full	w-full"
    static ımageContainer = "flex-1	justify-center items-center"
    static ımageStyle = "mt-72"
    static ticketContainer = "flex-row"
    static ticketStyle = "font-bold	text-xl text-black pl-4 pt-80 ml-1"
    static priceText = "font-bold pt-80  text-base	 pl-48 text-red-500"
    static ticketIconContainer = "pt-5 pl-5 flex-row"
    static entypoIconContainer = "rounded-xl w-10 h-10 justify-center items-center	bg-pink-200"
    static entypoIconContainer1 = "rounded-xl w-10 h-10 justify-center items-center	bg-teal-200"
    static entypoIconContainer2 = "rounded-xl w-10 h-10 justify-center items-center	bg-sky-200"
    static section = "font-bold  text-black pl-3"
    static seatsStyle = "pt-6 pl-3 font-bold  text-neutral-300"
    static buttonContainer = "h-14	bg-rose-600 w-48 rounded-full justify-center items-center mt-32 ml-52"
    static entypo = "font-bold"
    static eBiletStyle = "text-neutral-400"
}
export default ProfileStyle