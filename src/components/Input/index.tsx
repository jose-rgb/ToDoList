import { TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export function Input() {
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.inputFocus : styles.input;


    return (
        <View style={styles.form}>
            <TextInput 
             style={customStyle} placeholder="Adicione uma nova tarefa"
             onFocus={() => setFocus(true)}
            />
            <TouchableOpacity style={styles.button}>
					<MaterialCommunityIcons
						name="plus-circle-outline"
						size={22}
						color="#F2F2F2"
					/>
				</TouchableOpacity>
        </View>
    )
        
}