import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import colors from "../../Constant/Colors";

const paddingTop = Platform.OS == "android" ? StatusBar.currentHeight : 40

const { width , height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profilImage: {
        height: 50,
        width: 50,
        borderRadius: 30,
        borderWidth: 2,
        marginRight: 15
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
    where: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    textLocation: {
        marginLeft: 5,
        fontSize: 17,
        fontFamily: "Nunito-Bold",
        letterSpacing: 0.8,
        color: colors.dark,
        letterSpacing: -0
    },
    card: {
        marginBottom: 20,
        marginHorizontal: 20
    },
    profil: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    nameProfil: {
        color: colors.dark,
        fontFamily: "Nunito-Medium",
        fontSize: 15
    },
    name: {
        color: colors.rouge,
        fontFamily: "Nunito-Bold",
        fontSize: 15
    },
    timestamp: {
        color: colors.grisFonce,
        fontFamily: "Nunito-Bold",
        fontSize: 13 
    },
    imageContainer: {
        height: 300, 
        width: "100%",
        borderRadius: 15,
        elevation: 2,
        backgroundColor: colors.white
    },
    imagePost: { 
        height: 300, 
        width: "100%",
        borderRadius: 15
    },
    cardFooter: {
        marginVertical: 10
    },
    title: {
        color: colors.dark,
        fontFamily: "Nunito-ExtraBold",
        fontSize: 17,
        letterSpacing: 0.2,
        marginBottom: 15
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    btnTouchable: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 18
    },
    numberLikes: {
        color: colors.grisFonce,
        fontFamily: "Nunito-Bold",
        fontSize: 14,
        marginLeft: 5
    },
    flatlistCategorie: {
        paddingTop: 20,
        paddingBottom: 90
    },
    searchBtn: {
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: colors.grisClaire,
        marginBottom: 25,
        height: 48,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    searchText: {
        flex: 1,
        fontSize: 15,
        fontFamily: "Nunito-Bold",
        letterSpacing: 0.2,
        color: colors.grisFonce,
    }
})

export default styles