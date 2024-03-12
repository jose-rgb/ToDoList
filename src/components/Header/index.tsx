import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import  logoImage  from "../../assets/logo.png"

export function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logoImage} width={100}/>
        </View>
    )
}