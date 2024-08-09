import { useState} from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from "./screens/GameScreen";
import Colors from './constants/colors';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber]= useState();
  const [isGameOver, setIsGameOver]= useState(true);
  const [guessNumber, setGuessNumber]= useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

 const pickedNumberHandler = (pickedNumber)=> {
  setUserNumber(pickedNumber);
  setIsGameOver(false);
 }

 const gameOverHandler = (gueslenght)=> {
  setIsGameOver(true);
  setGuessNumber(gueslenght)
 }

 const startNewGameHandler = ()=> {
    setUserNumber (null);
     setGuessNumber(0);
 }



 let screen = <StartGameScreen onPickedNumber ={pickedNumberHandler}/>
 if(userNumber){
   screen = <GameScreen userNumber={userNumber} onGameOver ={gameOverHandler}/>
 }
 if(isGameOver && userNumber){
  screen =  <GameOverScreen userNumber={userNumber} roundsNumber={guessNumber} onStartNewGame={startNewGameHandler}/>
 }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
       
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,

  },
  backgroundImage: {
    opacity: 0.15,
  },
});
