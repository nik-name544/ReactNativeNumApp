import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import { sgs, colors } from '../Style'
import { Card } from '../components/Card'
import { Btn } from '../components/Btn'

export const StartGameScreen = ({ onStartGame }) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [value, setValue] = useState("")
    const [num, setNum] = useState()
    const [btnWidth, setBtnWidth] = useState(Dimensions.get("window").width / 5)


    useEffect(() => {
        const updateHandler = () => {
            setBtnWidth(Dimensions.get("window").width / 5)
            // console.log(btnWidth)
        }

        Dimensions.addEventListener('change', updateHandler)
        return () => {
            Dimensions.removeEventListener('change', updateHandler)
        }
    }, [])



    const numInputHadler = (inpTxt) => {
        setValue(inpTxt.replace(/[^0-9]/g, ''))
    }
    let resetHandler = () => {
        setValue('')
        setIsConfirmed(false)
    }

    let confirmHandler = () => {
        const newNum = parseInt(value)
        if (isNaN(newNum) ||
            newNum <= 0 ||
            newNum > 99
        ) {
            Alert.alert(
                "invalid num. ",
                "num has to be a num between 1 and 99. ",
                [
                    {
                        text: "ok",
                        style: "destructive",
                        onPress: resetHandler
                    }
                ])
            return
        }
        setIsConfirmed(true)
        setNum(newNum)
        setValue("")
        Keyboard.dismiss()
    }
    let confirmedOutput
    if (isConfirmed) {
        confirmedOutput = <>
            <Text style={sgs.title}>Your num is: {num} </Text>
            <Btn onPress={() => onStartGame(num)} >start game</Btn>
        </>
    }

    return (
        <>
            <ScrollView>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            Keyboard.dismiss()
                        }}
                    >
                        <View style={sgs.screen}>
                            <Text style={sgs.title}>
                                start new game!
                            </Text>
                            <Card style={sgs.inputComponent}>
                                <Text style={sgs.text}>
                                    Select num. 
                                </Text>
                                <TextInput
                                    style={sgs.input}
                                    blurOnSubmit
                                    keyboardType="number-pad"
                                    maxLength={2}
                                    onChangeText={numInputHadler}
                                    value={value}
                                />
                                <View style={sgs.btnWrapper}>
                                    <View style={sgs.btn}>
                                        <Button
                                            title="Reset"
                                            onPress={resetHandler}
                                            color={colors.purple}
                                        />
                                    </View>
                                    <View style={sgs.btn}>
                                        <Button
                                            title="Confirm"
                                            onPress={confirmHandler}
                                            color={colors.pink}
                                        />
                                    </View>
                                </View>
                            </Card>
                            {confirmedOutput}
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
}