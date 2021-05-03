import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { sgs, btn } from '../Style'

export const Btn = ({ children, onPress }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={btn.btn}>
                    <Text style={btn.btnText}>{children}</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}