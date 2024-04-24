import { TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

type InputProps = {
    task: string
    inputRef: React.RefObject<TextInput>
    onChangeText: (task: string) => void
    onPress: () => void
}

export function Input({task, inputRef, onChangeText, onPress}: InputProps) {
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.inputFocus : styles.input;


    return (
        <View style={styles.form}>
            <TextInput 
             style={customStyle} placeholder="Adicione uma nova tarefa"
             placeholderTextColor={"#808080"}
             onFocus={() => setFocus(true)}
             value={task}
             onChangeText={onChangeText}
             ref={inputRef}
             autoCorrect={false}
             onSubmitEditing={onPress}
             returnKeyType="done"
            />
            <TouchableOpacity style={styles.button} onPress={onPress}>
					<MaterialCommunityIcons
						name="plus-circle-outline"
						size={22}
						color="#F2F2F2"
					/>
				</TouchableOpacity>
        </View>
    )
        
}