import {useState} from 'react'
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from "./screens/GameScreen";
import Colors from './constants/colors'
import {useFonts} from "expo-font"

export default function App() {
  const [userNumber, setUserNumber]= useState();
  const [isGameOver, setIsGameOver]= useState(true);

  useFonts();

 const pickedNumberHandler = (pickedNumber)=> {
  setUserNumber(pickedNumber);
  setIsGameOver(false);
 }

 const gameOverHandler = ()=> {
  setIsGameOver(true);
 }

 let screen = <StartGameScreen onPickedNumber ={pickedNumberHandler}/>
 if(userNumber){
   screen = <GameScreen userNumber={userNumber} onGameOver ={gameOverHandler}/>
 }
 if(isGameOver && userNumber){
  screen =  <GameOverScreen/>
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
