import { useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import Instruction from "../../components/Instruction";
import VideoView from "../../components/Video";
import {
  isFavorite,
  saveFavorites,
  removeFavorites,
} from "../../utils/storage";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/minicartSlice";

export default function Detail() {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const product = route?.params.data;

  useLayoutEffect(() => {
    //Verificando se o item está favoritado ou não
    async function getStatusFavorite() {
      const productFavorite = await isFavorite(route.params?.data);
      setFavorite(productFavorite);
    }
    getStatusFavorite();

    // Pegando o nome da receita e setando no header
    navigation.setOptions({
      title: route.params?.data.title,
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteProduct(route.params?.data)}>
          {favorite ? (
            <Entypo name="heart" size={28} color="#FF4141" />
          ) : (
            <Entypo name="heart-outlined" size={28} color="#FF4141" />
          )}
        </Pressable>
      ),
    });
  }, [route.params?.data, navigation, favorite]);

  function handleOpenVideo() {
    setShowVideo(true);
  }

  function handleAddToCart(data) {
    dispatch(addToCart(data));
    alert("Adicionado ao carrinho")
  }

  async function shareProduct() {
    try {
      await Share.share({
        url: "https://expo.dev",
        message: `Receita: ${route.params?.data.title}`,
      });
    } catch (error) {
      alert(error);
    }
  }

  async function handleFavoriteProduct(receipe) {
    if (favorite) {
      await removeFavorites(receipe.id);
      setFavorite(false);
    } else {
      await saveFavorites("@firstapp", receipe);
      setFavorite(true);
    }
  }
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 15 }}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={48} color="#FAFAFA" />
        </View>
        <Image
          source={{ uri: route.params?.data.thumbnail }}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.title}</Text>
          <Text style={styles.price}>
            Preço: R${route.params?.data.price},00
          </Text>
          <Text style={styles.priceText}>
            {route.params?.data.stock} unidades disponiveis
          </Text>
        </View>

        {/* Botão de compartilhar */}
        <Pressable onPress={shareProduct}>
          <Feather name="share-2" size={24} color="#262626" />
        </Pressable>
      </View>

      <View style={styles.instructionArea}>
        <Text style={styles.instructionText}>
          {route.params?.data.discountPercentage.toFixed(0)}% OFF
        </Text>
      </View>
      <Instruction
        key={route.params?.data.id}
        data={route.params?.data.description}
      />
      <TouchableOpacity
        onPress={() => handleAddToCart(product)}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>
      {/* MODAL DE VIDEO */}
      <Modal visible={showVideo} animationType="slide">
        <VideoView
          handleClose={() => setShowVideo(false)}
          videoURL={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  );
}
