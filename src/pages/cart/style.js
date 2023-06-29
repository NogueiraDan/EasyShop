import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    paddingStart: 15,
    paddingEnd: 15,
    paddingTop: 60,
    color: "#fff",
  },
  minicartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginStart: 5,
    marginEnd: 5,
  },
  emptyCartWrapper: {
    paddingTop: 10,
  },
  emptyCartTitle: {
    fontSize: 35,
    fontWeight: "500",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
  },
  product: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    height: "auto",
    width: "100%",
    backgroundColor: "#f7f8f9",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productImage: {
    height: "100%",
    borderRadius: 15,
    resizeMode: "contain",
  },
  productImageWrapper: {
    minWidth: "40%",
  },
  cartInfo: {
    padding: 10,
    minWidth: "50%",
    height: "auto",
  },
  cartContent:{
    marginBottom: 65,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "500",
  },
  cartRemoveButton: {
    backgroundColor: "#ff6666",
    width: "60%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  quantityControls: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  incrementQuantity: {
    fontSize: 18,
    margin: 5,
  },
  decrementQuantity: {
    fontSize: 18,
    margin: 5,
  },
  quantity: {
    fontSize: 18,
    margin: 5,
  },
});

export { styles };
