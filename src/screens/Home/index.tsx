import { View , Text} from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import TasksInfo from "../../components/TasksInfo";
import EmptyTasks from "../../components/EmptyTasks";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Input />
            <TasksInfo />
            <EmptyTasks />
        </View>
    )
}