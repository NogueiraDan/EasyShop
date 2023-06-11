import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#400d10",
    paddingTop: 15,
    paddingEnd: 15,
    paddingStart: 15,
    paddingRight: 15,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  cover: {
    height: 200,
    borderRadius: 15,
    width: "100%",
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    fontSize: 24,
    marginTop: 15,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  priceText:{
    marginBottom: 5,
    fontSize: 18,
    color: "#fff"
  },
  price:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5
  },
  headerDetails:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 15  
  },
  instructionArea:{
    backgroundColor:'#095437',
    flexDirection: "row",
    padding: 8,
    width: "50%",
    borderRadius: 5,
    marginBottom: 15,
    justifyContent:"center"
  },
  instructionText:{
    fontSize: 20,
    fontWeight: 500,
    color: "#FFF",
    marginRight: 8
  },
  buyButton:{
    backgroundColor:'#e60000',
    flexDirection: "row",
    padding: 8,
    width: "50%",
    borderRadius: 5,
    marginBottom: 15,
    justifyContent:"center"
  },
  buyButtonText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export { styles };
