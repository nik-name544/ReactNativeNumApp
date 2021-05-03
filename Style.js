import { StyleSheet, Dimensions, Platform } from 'react-native';

export const colors = {
    black: "#000",
    white: "#fff",
    pink: "#f7287b",
    blue: "deepskyblue",
    purple: "#c717fc"
}

export const mp = StyleSheet.create({
    container: {
        flex: 1
    },
});

export const h = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS == 'android' ? colors.pink : colors.white,
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: Platform.OS == "ios" ? '#ccc' : "transparent",
        borderBottomWidth: Platform.OS == "ios" ? 1 : 0
    },
    text: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "600",
        fontFamily: "open-sans"
    }
})

export const sgs = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    btnWrapper: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 15
    },
    inputComponent: {
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: "open-sans-bold"
    },
    text: {
        fontSize: 18,
        fontFamily: "open-sans"
    },
    btn: {
        width: "45%"
    },
    input: {
        borderColor: colors.blue,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginTop: 10,
        textAlign: "center"
    },
    img: {
        // width: "80%",
        width: Dimensions.get("window").width * 0.8,
        height: Dimensions.get("window").height / 2.5,
        // height: 300,
        borderRadius: 30
    }
})

export const c = StyleSheet.create({
    card: {
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .25,
        shadowRadius: 6,
        backgroundColor: colors.white,
        elevation: 10,
        borderRadius: 10
    }
})

export const btn = StyleSheet.create({
    btn: {
        backgroundColor: colors.pink,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5
    },
    btnText: {
        color: colors.white,
        fontFamily: "open-sans",
        fontSize: 18
    }
})

export const gs = StyleSheet.create({
    listItems: {
        padding: 8,
        borderColor: colors.blue,
        marginVertical: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})