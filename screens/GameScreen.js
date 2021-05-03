import React, { useEffect, useRef, useState } from 'react'
import { Button, Text, View, Alert, ScrollView } from 'react-native'
import { Card } from '../components/Card'
import { sgs, colors, gs } from '../Style'
import { Ionicons } from '@expo/vector-icons'
import { Btn } from '../components/Btn'
import * as ScreenOrientation from 'expo-screen-orientation';

let generateRandomNum = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomNum(min, max, exclude)
    } else {
        return rndNum
    }
}

export const GameScreen = ({ userChoice, onGameOver }) => {
    const initialGuess = generateRandomNum(1, 100, userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const low = useRef(1)
    const high = useRef(100)
    const [rounds, setRounds] = useState(0)
    const [pastGuesses, setPastGuesses] = useState([initialGuess])

    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = (direction) => {
        if (
            (
                direction === 'lower' &&
                currentGuess < userChoice
            ) || (
                direction === 'greater' &&
                currentGuess > userChoice
            )
        ) {
            Alert.alert(
                "vrat ploho",
                [
                    {
                        text: "ok",
                        style: "cancel"
                    }
                ]
            )
            return
        }

        if (direction === 'lower') {
            high.current = currentGuess
        } else {
            low.current = currentGuess
        }
        const nextNum = generateRandomNum(low.current, high.current, currentGuess)
        setCurrentGuess(nextNum)
        // setRounds(curRounds => curRounds + 1)
        setPastGuesses(current => [nextNum, ...current])
    }

    return (
        <>
            <View style={sgs.screen}>
                <Text style={sgs.text}>
                    Opponent's Guess
                </Text>
                <Text style={sgs.title}>{currentGuess}</Text>
                <Card style={sgs.btnWrapper}>
                    <Btn onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color={colors.white} />
                    </Btn>
                    <Btn onPress={nextGuessHandler.bind(this, 'greater')} >
                        <Ionicons name="md-add" size={24} color={colors.white} />
                    </Btn>
                </Card>
                <ScrollView>
                    {pastGuesses.map((item, i) => {
                        return (
                            <View key={i} style={gs.listItems}>
                                <Text style={sgs.text}>
                                    {item}
                                </Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </>
    )
}