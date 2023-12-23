import { StyleSheet } from 'react-native'

const HomeScreenStyle = StyleSheet.create({
    ımgStyle: {
        marginRight: -280,
        marginTop: -100
    },
    rightIconContainer: {
        marginLeft: 280,
        marginTop: -20
    },
    ımageStyle: {
        marginRight: -280,
        marginTop: -100,
        width: 370,
        marginRight: -250
    },
})

export class homeScreenContainer {
    static homeScreen = "flex: 1 bg-white justify-center w-full h-full"
    static forYouText = "text-3xl font-bold	text-stone-700 text-left pl-4"
    static slidersIcon = "text-right pr-0"
    static collections = "font-bold text-3xl text-stone-700 pl-4"
    static image = "ml-0"
    static discover = "font-bold text-2xl text-stone-700 pl-6"
    static boxContainerC = "flex-row p-2"
    static yourArea = "w-32 h-14 items-center justify-center	rounded-2xl	 bg-rose-400"
    static yourAreaView = "bg-red-200	rounded-xl h-7 w-7 items-center	"
    static yourAreaText = "text-rose-700 items-center justify-center p-1 text-center"
    static musicContainer = "flex-row bg-cyan-500 w-36 rounded-2xl justify-center items-center h-14"
    static musicIcon = "bg-cyan-300 rounded-2xl w-10 h-8 items-center justify-center"
    static musicIconC = "justify-center items-center text-center "
    static musicText = "text-indigo-600 items-center text-center justify-center flex-row p-3 pt-2"
    static sportContainer = "flex-row bg-yellow-500	items-center text-center justify-center w-32 rounded-2xl"
    static sportTennis = "bg-yellow-600	items-center text-center justify-center w-8 h-14 rounded-2xl"
    static sportsText = "flex-row items-center text-center justify-center p-5 text-yellow-800"
    static box = "flex-row"
    static sepText = "text-2xl text-rose-600 mb-2 ml-4 mt-5"
    static dayStyle = "w-12  h-20 m-15 ml-3 font-bold text-xl text-current text-center not-italic font-semibold "
    static thuText = "font-normal text-base	text-current"
    static recommendedImgContainer = "items-center	rounded-md	mr-52"
    static eventsButtonStyle = "rounded-lg	w-80 bg-zinc-300 h-10 ml-20 text-center	items-center justify-center	"
    static musicFestivalImg = "items-center	rounded-lg	mt-10 mr-48"
}
export default HomeScreenStyle