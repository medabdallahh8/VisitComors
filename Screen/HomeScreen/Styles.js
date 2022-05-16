import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import colors from "../../Constant/Colors";

const paddingTop = Platform.OS == "android" ? StatusBar.currentHeight : 40

const {width , height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profilImage: {
        height: 40,
        width: 40,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: colors.bleupluclaire
    },
    header: {
        paddingTop: paddingTop,
        height: 60+ paddingTop,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        backgroundColor: colors.white
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    burgerMenu: {
        height: 25,
        width: 30,
        marginRight: 15
    },
    btnBurger: {
        flex: 1,
        justifyContent: "space-around"
    },
    barOne: {
        height: 3,
        width: 30,
        backgroundColor: colors.dark,
        borderRadius: 2,
    },
    barTwo: {
        height: 3,
        width: 18,
        backgroundColor: colors.dark,
        borderRadius: 2,
    },
    barThree: {
        height: 3,
        width: 22,
        backgroundColor: colors.dark,
        borderRadius: 2,
    },
    where: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    textLocation: {
        marginLeft: 5,
        fontSize: 16,
        fontFamily: "Nunito-Bold",
        letterSpacing: 0.8,
        color: colors.dark,
        letterSpacing: -0
    },
    scrollView: {
        paddingTop: 20,
        paddingBottom: 90
    },
    introduction: {
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 20
    },
    textintro: {
        fontSize: 25,
        fontFamily: "Nunito-Bold",
        textAlign: "auto"
    },
    comoros: {
        fontSize: 25,
        fontFamily: "Nunito-ExtraBold",
        textAlign: "auto",
        color: colors.bleupluclaire
    },
    touchableCategories: {
        height: 90,
        width: 90,
        marginRight: 15,
        backgroundColor: colors.grisClaire,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    flatlistCategorie: { 
        paddingLeft: 15,
        paddingVertical: 12,
        marginBottom: 15
    },
    textCategories: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: "Nunito-SemiBold"
    },
    touchableEvent: {
        marginRight: 18,
        borderRadius: 15,
        backgroundColor: colors.white,
        elevation: 2
    },
    imageEvent: {
        height: 160,
        width: 2*width/3 -20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    eventsInfo: {
        padding: 12
    },
    typeAndDate: {
        flexDirection: "row",
        alignItems: "center"
    },
    type: {
        fontSize: 15,
        textTransform: "uppercase",
        fontFamily: "Nunito-Bold",
        color: colors.bleupluclaire
    },
    separator: {
        fontSize: 15,
        textTransform: "uppercase",
        fontFamily: "Nunito-Bold",
        color: colors.dark
    },
    date: {
        fontSize: 14,
        textTransform: "capitalize",
        fontFamily: "Nunito-SemiBold",
        color: colors.dark
    },
    titleEvent: {
        marginTop: 5
    },
    titleEventText: {
        fontSize: 16,
        textTransform: "capitalize",
        fontFamily: "Nunito-Bold",
        color: colors.dark,
        flex: 1
    },
    titleCategorie: {
        fontSize: 18,
        fontFamily: "Nunito-ExtraBold",
        color: colors.dark,
    },
    eventContainertitle: {
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5
    },
    seeAll: {
        fontSize: 13,
        fontFamily: "Nunito-ExtraBold",
        color: colors.bleupluclaire
    },
    placeNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default styles