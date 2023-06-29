import React from "react";
import { SafeAreaView, Text, View, Pressable, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../store/minicartSlice";
import { styles } from "./style";

const Minicart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.minicartHeader}>
        <Text style={styles.title}>Minicart</Text>
      </View>
      {cartItems.length > 0 ? (
        <View>
          <ScrollView style={styles.cartContent} showsVerticalScrollIndicator={false}>
            {cartItems.map((item) => (
              <View style={styles.product} key={item.id}>
                <View style={styles.productImageWrapper}>
                  <Image
                    source={{ uri: item.thumbnail }}
                    style={styles.productImage}
                  />
                </View>
                <View style={styles.cartInfo}>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text>{item.quantity} unidades</Text>
                  <Text style={styles.productPrice}>
                    ${item.quantity * item.price}
                  </Text>

                  <View style={styles.quantityControls}>
                    <Pressable onPress={() => handleIncrement(item.id)}>
                      <Text style={styles.incrementQuantity}>+</Text>
                    </Pressable>

                    <Text style={styles.quantity}>{item.quantity}</Text>

                    <Pressable onPress={() => handleDecrement(item.id)}>
                      <Text style={styles.decrementQuantity}>-</Text>
                    </Pressable>
                  </View>

                  <Pressable
                    onPress={() => handleRemove(item.id)}
                    style={styles.cartRemoveButton}
                  >
                    <Text>Remover</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyCartWrapper}>
          <Text style={styles.emptyCartTitle}>Carrinho Vazio</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Minicart;
