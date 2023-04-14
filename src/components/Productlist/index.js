import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles} from "./style";
import {LinearGradient} from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native";

export default function FoodList({data}) {

  const navigation = useNavigation()
  function handleNavigate(){
    navigation.navigate("Detail", {data: data})
  }


  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={handleNavigate}>
      <Image
        source={{uri: data.thumbnail}}
        style={styles.image}
      />
      <View style={styles.info}>
      <Text style={styles.name}>{data.title}</Text>
      <Text style={styles.description}>Preço: R${data.price} | {data.stock} disponiveis</Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={['transparent','rgba(0,0,0,0.70)', 'rgba(0,0,0,0.95)']}
      />
   
    </TouchableOpacity>
  );
}
