import { View , TextInput, Alert, FlatList} from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import TasksInfo from "../../components/TasksInfo";
import EmptyTasks from "../../components/EmptyTasks";
import { useRef, useState } from "react";
import { TaskDTO } from "../../dtos/TaskDTO";
import { uuid } from "../../utils/uuid";
import { Task } from "../../components/Task";

export default function Home() {
    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [newtask, setNewtask] = useState('')
    const newTaskInputRef = useRef<TextInput>(null)

    function handleTaskAdd() {
		if (newtask !== '' && newtask.length >= 5) {
			setTasks((tasks) => [
				...tasks,
				{ id: uuid(), isCompleted: false, title: newtask.trim() },
			])

			setNewtask('')

			newTaskInputRef.current?.blur()
		}
	}

    function handleTaskDone(id: string) {
		setTasks((task) =>
			task.map((task) => {
				task.id === id ? (task.isCompleted = !task.isCompleted) : null
				return task
			}),
		)
    }

    function handleTaskDeleted(id: string) {
        Alert.alert('Excluir tarefa', 'Deseja excluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () => 
                    setTasks((tasks) => tasks.filter((task) => task.id !== id)),
            },
            {
                text: 'Não',
                style: 'cancel'
            },

        ])
    }

    const totalTasksCreated = tasks.length
    const totalTasksCompleted = tasks.filter(
        ({ isCompleted  }) => isCompleted,
    ).length


    return (
        <View style={styles.container}>
            <Header />
            <Input
                inputRef={newTaskInputRef}
                task={newtask}
                onChangeText={setNewtask}
                onPress={handleTaskAdd}
             />
            <TasksInfo totalTasksCreated={totalTasksCreated} totalTasksCompleted={totalTasksCompleted} />
            <View  style={styles.tasksContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 60 }} 
                    data={tasks}
                    keyExtractor={(tasks) => tasks.id}
                    renderItem={({item}) => (
                        <Task 
                            key={item.id}
                            onTaskDone={() => handleTaskDone(item.id)}
                            onTaskDeleted={() => handleTaskDeleted(item.id)}
                            {...item}
                        />
                    )}
                    ListEmptyComponent={<EmptyTasks />}
                />      
            </View>     
        </View>
    )
}