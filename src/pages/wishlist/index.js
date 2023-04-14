import { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { styles } from "./style";
import {getFavorites} from "../../utils/storage"
import { useIsFocused } from "@react-navigation/native";
import Productlist from "../../components/Productlist"

export default function Wishlist() {
  const [products, setProducts] = useState([]);
  // Verificando se esta com foco na tela
  const isFocused = useIsFocused();

  useEffect(()=>{
    let isActive = true;
    
    if(isActive){
      getProducts()   
     }

    async function getProducts(){
      const result  = await getFavorites("@firstapp");
      if(isActive){
        setProducts(result)
      }
    }  

    // Toda vez que desmontar o componente, ou seja sair da tela, seta o valor da variavel
    return ()=>{
      isActive = false;
    }
  },[isFocused])



  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.title}>Produtos Favoritos</Text>
       {products.length === 0 && (
        <Text style={styles.description}>Você nao tem produtos favoritados...</Text>
       )}
       <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: 15}}
        data={products}
        keyExtractor={(item)=>String(item.id)}
        renderItem={({item})=><Productlist data={item}/>}
       />
    </SafeAreaView>
  );
}
