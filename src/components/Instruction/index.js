import { View, Text } from "react-native";
import { styles } from "./style";

export default function Instruction({data }){
    return(
        <View style={styles.container}> 
            <Text style={styles.text}>{data}</Text>
        </View>
    )
}