import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { sgs } from '../Style'
import { Btn } from '../components/Btn'

export const GameOverScreen = ({ numOfRounds, userNum, onRestart }) => {
    return (
        <>
            <ScrollView>
                <View style={sgs.screen}>
                    <Text style={sgs.title}>Mashini snova pobedili.</Text>
                    <Image source={require('../assets/success.png')} style={sgs.img} />
                    <Text style={sgs.text}>Number Of rounds: {numOfRounds}</Text>
                    <Text style={sgs.text}>Number was: {userNum}</Text>
                    <Btn onPress={onRestart}>new game</Btn>
                    {/* <Button title="new game" onPress={onRestart} /> */}
                </View>
            </ScrollView>
        </>
    )
}