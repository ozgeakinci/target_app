import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}> {children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    // fontWeight: "bold",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    textAlign: "center",
    maxWidth: "100%",
    marginTop: 24,
  }
});

export default Title;
