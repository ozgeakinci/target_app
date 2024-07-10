import { TextInput, View, StyleSheet , Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react"
import Colors from "../constants/colors"

const StartGameScreen = ({onPickedNumber}) => {
    const [enteredNumber, setEnteredNumber]= useState('');
    
    const numberInputHandler = (enteredText)=> {
        setEnteredNumber(enteredText)

    }

    const resetInputHandler = ()=> {
        setEnteredNumber('');
    }
    const confirmInputHandler = ()=> {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99){

            Alert.alert(
            'Invalid number',
            'Number has to be a number between 1 and 99.',
            [{text: 'Okay', style: 'destructive', onPress:resetInputHandler}]
            );
            return;
        } 
        onPickedNumber(chosenNumber);
    }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor:Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
