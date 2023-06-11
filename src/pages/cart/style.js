import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#231F20",
    paddingTop: 36,
    paddingStart: 15,
    paddingEnd: 15,
    color: "#fff"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#fff",
  },
  product:{
    flex:1,
    padding: 10,
    height: "auto",
    width:"100%",
    backgroundColor:"red"
  }
});

export { styles };
