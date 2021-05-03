import React from 'react'
import { View } from 'react-native'
import { c } from '../Style'

export const Card = ({ children, style }) => {
    return (
        <>
            <View style={{ ...c.card, ...style }}>
                {children}
            </View>
        </>
    )
}