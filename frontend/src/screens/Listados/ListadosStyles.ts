import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },


  flatListContainer: {
    paddingBottom: 20,
  },

  buttonContainerListados:{
    marginTop: "3%",
    alignItems: "center",
  },

    buttonListados: {
      alignItems: "center", // Centraliza o texto no eixo horizontal
      justifyContent: "center", // Centraliza o texto no eixo vertical
      backgroundColor: "#7C7CF4",
      height: 50,
      width: 170,
      borderRadius: 40,
      //alignSelf: "center", pra que serve isso?
      margin: 20,
    },

    buttonTextListados: {
      color: "#fff",

    }
  
});