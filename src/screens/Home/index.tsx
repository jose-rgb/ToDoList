import { View , Text} from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import TasksInfo from "../../components/TasksInfo";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Input />
            <TasksInfo />
        </View>
    )
}