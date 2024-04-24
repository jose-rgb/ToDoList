import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { TaskDTO } from "../../dtos/TaskDTO";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TasksProps = TaskDTO & {
    onTaskDone: (id: string) => void
	onTaskDeleted: (id: string) => void
}

export function Task({
    id,
    title,
    isCompleted,
    onTaskDone,
    onTaskDeleted,
}:TasksProps){
    return (
        <View style={styles.taskContainer}>

            <TouchableOpacity onPress={() => onTaskDone(id)}>
                <MaterialCommunityIcons
                    name={
                        isCompleted
                                ? 'checkbox-marked-circle-outline'
                                : 'checkbox-blank-circle-outline'
                    }
                    size={22}
                    color={
                        isCompleted
                                ? '#8284FA'
                                : '#4EA8DE'
                    }   
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
				<Text
					style={isCompleted ? styles.textDone : styles.textCreated}
				>
					Integer urna interdum massa libero auctor neque turpis turpis semper.
				</Text>
			</View>

            <TouchableOpacity onPress={() => onTaskDeleted(id)}>
                    <MaterialCommunityIcons 
                        name="trash-can-outline"
                        size={20}
                        color='#808080'
                    />
            </TouchableOpacity>
        </View>
    )
}