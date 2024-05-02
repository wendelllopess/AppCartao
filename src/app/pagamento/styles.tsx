import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    marginVertical: 30
  },
  button: {
    alignItems: "center",
    marginVertical: 40,
    flexDirection: "row",
    gap: 12,
    justifyContent: "center"
  },
  textButton: {
    fontSize: 22,
    color: "#FFFF"
  },
  form: {
    gap:12
  },
  inputAdicional:{
    flexDirection: "row",
    gap: 20,
  },
  smallInput:{
    width: 90
  }
});