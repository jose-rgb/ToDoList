import { View, Text } from "react-native";
import { style } from "./styles";

type TasksInfoProps = {
    totalTasksCreated: number,
    totalTasksCompleted: number
}

export default function TasksInfo({totalTasksCreated, totalTasksCompleted}:TasksInfoProps) {
    return(
        <View style = {style.container}>

            <View style = {style.createdTasks}>
                <Text style = {style.textCreated}>Criadas</Text>
                <View style = {style.counterContainer}>
                    <Text style = {style.counter}>{totalTasksCreated}</Text>
                </View>
            </View>

            <View style = {style.completedTasks}>
                <Text style = {style.textCompleted}>Concluídas</Text>
                <View style = {style.counterContainer}>
                    <Text style = {style.counter}>{totalTasksCompleted}</Text>
                </View>
            </View>

        </View>
    )
}