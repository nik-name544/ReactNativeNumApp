import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { mp } from "./Style";
import { Header } from './components/Header';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
  })
}

export default function App() {
  const [userNum, setUserNum] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNum(null)
  }

  const startGameHandler = (selectedNum) => {
    setUserNum(selectedNum)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds)
  }

  // let content = <GameOverScreen numOfRounds={guessRounds} userNum={userNum} onRestart={configureNewGameHandler} />
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen numOfRounds={guessRounds} userNum={userNum} onRestart={configureNewGameHandler} />
  }

  return (
    <SafeAreaView style={mp.container}>
      <View>
        <Header title="guess a num" />
        {content}
      </View>
    </SafeAreaView>
  );
}

