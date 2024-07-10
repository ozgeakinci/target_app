import { Text, StyleSheet } from "react-native";
import Colors from '../constants/colors'

const Title = ({ children }) => {
  return <Text style={styles.title}> {children}</Text>;
};

const styles = StyleSheet.create({
  title: { 
    fontSize: 24, 
    color: Colors.accent500, 
    fontWeight: "bold",
    borderWidth:2,
    borderColor: Colors.accent500,
    padding:12,
    textAlign: 'center'
 },
});

export default Title;
