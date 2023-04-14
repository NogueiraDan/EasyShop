import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./style";
import Logo from "../../components/Logo";
import Productlist from "../../components/Productlist";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../services/api";
import axios from "axios"
import { useNavigation } from "@react-navigation/native";
import {Text as MotiText} from "moti"

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fecthApi() {
      axios.get("https://dummyjson.com/products")
      .then(response=>{
        setProducts(response.data.products);
      })
      .catch(err=>{
        console.log(err)
      })
    }
    fecthApi();
  }, []);

  function handleSearch() {
    if (!inputValue) return;

    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", { name: input });
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <Logo />
      <MotiText
        from={{opacity: 0, translateY: 15,  }}
        animate={{opacity: 1, translateY: 0}} 
        transition={{
          delay: 100,
          type: "timing",
          duration: 650
        }}
        style={styles.titulo}>
          Confira nosso catálogo de produtos para encomenda!
      </MotiText>
      
      <View style={styles.form}>
        <TextInput
          placeholder="Digite a receita que quer..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={28} color="#46BD6A" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Productlist data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
