import { SafeAreaView, Text, View, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/minicartSlice";

const Minicart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleRemover = (productId) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minicart</Text>

      <ScrollView>
        {cartItems.map((item) => (
          <View style={styles.product}>
            <Text key={item.id}>{item.title}</Text>
            <Pressable
              key={item.id}
              onPress={() => handleRemover(item.id)}
              style={({ pressed }) => [
                { backgroundColor: pressed ? "lightgray" : "transparent" },
              ]}
            >
              <Text>Remover</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Minicart;
