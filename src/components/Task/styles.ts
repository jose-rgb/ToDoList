import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
    taskContainer: {
		top: 60,
		width: '90%',
		height: 64,
		backgroundColor: '#262626',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 4,
		paddingHorizontal: 12,
		paddingVertical: 20,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#333333',
	},
	textContainer: {
		width: '80%',
		height: 40,
		alignContent: 'center',
		justifyContent: 'center',
		marginHorizontal: 8,
	},
	textDone: {
		fontSize: 14,
		color: '#808080',
		textDecorationLine: 'line-through',
	},
	textCreated: {
		fontSize: 14,
		color: '#F2F2F2',
		textDecorationLine: 'none',
	},
})