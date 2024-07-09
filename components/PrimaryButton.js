import { View, Text, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  return (
    <Pressable onPress={()=> {
        console.log('hey')
    }}>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
