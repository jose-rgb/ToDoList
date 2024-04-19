import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        top: 50,
		height: 52,
		width: '89%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        
    },
    createdTasks: {
        marginLeft: 4,
        flexDirection: 'row',
        alignItems: 'center',    
    }, 
    textCreated: {
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4EA8DE',
    },  
    completedTasks: {
        marginRight: 4,
        flexDirection: 'row',
        alignItems: 'center', 
    },
    textCompleted: {
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#8284FA',
    },
    counterContainer: {
        backgroundColor: '#333333',
		width: 28,
		height: 22,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
    },
    counter: {
        fontFamily: 'Inter_700Bold',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#D9D9D9',
    }
})