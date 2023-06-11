import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./style";
import { useRoute} from "@react-navigation/native";
import Productlist from "../../components/Productlist"
import api from "../../../services/api"

export default function Search() {
  const route = useRoute();
  const[products, setProducts] = useState([])

  useEffect(()=>{
    async function fecthApi() {
      try {
        const response = await api.get(`/search?q=${route.params?.name}`); 
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fecthApi();
  },[route.params?.name])

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Resultados para: "{route.params?.name}"</Text>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><Productlist data={item}/>}
       />
    </View>
  );
}
