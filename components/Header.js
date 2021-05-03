import React from 'react'
import { View, Text, Platform } from 'react-native'
import { h, sgs } from "../Style"

export const Header = ({ title }) => {
    return (
        <>
            <View style={h.header}>
                <Text style={sgs.title}>
                    {title}
                </Text>
            </View>
        </>
    )
}