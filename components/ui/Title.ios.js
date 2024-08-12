import { Text, StyleSheet, Platform } from "react-native";
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
   //Platform API 2 yöntem var 
    //1. si
    // borderWidth: Platform.OS === 'android' ? 2 :0,
    //2.si
   
    
    padding: 12,
    textAlign: "center",
    maxWidth: "100%",
    marginTop: 24,
  }
});

export default Title;
