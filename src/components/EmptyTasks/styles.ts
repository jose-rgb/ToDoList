import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        top: 60,
        width: '87%',
        borderWidth: 2,
        borderTopColor: '#333333',
        borderEndColor: '#1A1A1A',
		borderStartColor: '#1A1A1A',
		borderBottomColor: '#1A1A1A',
        flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
        paddingVertical: 48,
		paddingHorizontal: 20,
    },
    image: {
		marginBottom: 16,
        width: 76,
        height: 76,
	},
    textBold: {
		fontSize: 14,
		fontFamily: 'Inter_700Bold',
		color: '#808080',
	},
    textRegular: {
        fontSize: 14,
		fontFamily: 'Inter_400Regular',
        color: '#808080',
	},
})