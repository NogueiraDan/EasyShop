import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    paddingTop: 36,
    paddingStart: 15,
    paddingEnd: 15,

  },
  titulo:{
    fontSize: 26,
    fontWeight:"bold",
    alignSelf:"flex-start",
    color: "#000"
  },
  form:{
    backgroundColor: "#FFF",
    width: '100%',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between"

  },
  input:{
    width: "90%",
    maxWidth: "90%",
    height: 55
  },
  receita: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,

  },
});

export { styles };
