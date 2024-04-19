import { View, Text } from "react-native";
import { style } from "./styles";

export default function TasksInfo() {
    return(
        <View style = {style.container}>

            <View style = {style.createdTasks}>
                <Text style = {style.textCreated}>Criadas</Text>
                <View style = {style.counterContainer}>
                    <Text style = {style.counter}>0</Text>
                </View>
            </View>

            <View style = {style.completedTasks}>
                <Text style = {style.textCompleted}>Concluídas</Text>
                <View style = {style.counterContainer}>
                    <Text style = {style.counter}>0</Text>
                </View>
            </View>

        </View>
    )
}