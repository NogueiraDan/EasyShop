import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./style";
import { useRoute} from "@react-navigation/native";
import Productlist from "../../components/Productlist"
import axios from "axios"

export default function Search() {
  const route = useRoute();
  const[products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts(){
      axios.get(`https://dummyjson.com/products/search?q=${route.params?.name}`)
      .then(res=>{
        setProducts(res.data.products)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    fetchProducts()
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
