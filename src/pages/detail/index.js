import { useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  Modal,
  Share,
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

export default function Detail() {
  const route = useRoute();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    //Verificando se o item está favoritado ou não
    async function getStatusFavorite(){
      const productFavorite = await isFavorite(route.params?.data)
      setFavorite(productFavorite)
    }
    getStatusFavorite()

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
          <Text style={styles.ingredientsText}>
            Preço: R${route.params?.data.price},00 | Disponivéis: {route.params?.data.stock}
          </Text>
        </View>

        {/* Botão de compartilhar */}
        <Pressable onPress={shareProduct}>
          <Feather name="share-2" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.instructionArea}>
        <Text style={styles.instructionText}>{route.params?.data.discountPercentage}% OFF</Text>
      </View>
        <Instruction key={route.params?.data.id} data={route.params?.data.description} />
     

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
