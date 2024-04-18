import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        height: 52,
		width: '75%',
		backgroundColor: '#262626',
		borderRadius: 5,
		padding: 16,
		fontSize: 14,
		fontFamily: 'Inter_400Regular',
		
		marginRight: 4,
		borderColor: '#0D0D0D',
		borderWidth: 1,
		borderStyle: 'solid',
		position: 'relative',

    },
	inputFocus: {
		height: 52,
		width: '75%',
		backgroundColor: '#262626',
		borderRadius: 5,
		padding: 16,
		fontSize: 14,
		color: '#F2F2F2',
		
		marginRight: 4,
		borderColor: '#5E60CE',
		borderStyle: 'solid',
		borderWidth: 1,
		position: 'relative',
	},
	form: {
		position: 'absolute',
		top: 148,
		height: 52,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: 52,
		height: 52,
		borderRadius: 5,
		backgroundColor: "#1E6F9F",
		alignItems: 'center',
		justifyContent: 'center',
	}
})