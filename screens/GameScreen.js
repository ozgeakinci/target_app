import { Text, View, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Oppenets's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +
        _ */}
      </View>
      <View>

      </View>
      <Text>Log Rounds</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 24,

    }
})