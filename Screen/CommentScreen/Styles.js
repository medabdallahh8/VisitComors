import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import colors from "../../Constant/Colors";

const paddingTop = Platform.OS == "android" ? StatusBar.currentHeight : 40

const { width , height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
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
        alignItems: "flex-start",
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
    flatlistCategorie: {
        paddingTop: 20,
    },
    commentContainer: {
        marginTop: 8
    },
    commentText: {
        fontSize: 13,
        fontFamily: "Nunito-SemiBold",
        color: colors.dark,
        textAlign:"justify"
    },
    textInpuContainer: {
        position: "absolute",
        bottom: 0,
        zIndex: 10,
        backgroundColor: colors.rouge
    }
})

export default styles