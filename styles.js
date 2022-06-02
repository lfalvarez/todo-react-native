import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 40,
        marginHorizontal: 20
    },
    input: {
        borderBottomWidth: 10,
        borderBottomColor: "white",
        color: "green",
        flex: 0.85},
    list: {
      marginHorizontal: 20,
        },
    modalTitle: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#ccc",
      color: "white",
      fontSize: 18,
      alignItems: "center"
    },
    modalMessage: {
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    modalButton: {
      marginTop: 15,
    },
    modalItem: {},
    deleteButton: {
      backgroundColor: "blue",
      paddingVertical: 10,
      paddingHorizontal: 18,
      justifyContent: "center",
      alignItems: "center"
    },
    deleteButtonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
    },
  },
  
  );