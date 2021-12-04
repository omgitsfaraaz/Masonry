import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const LandingScreen = ({ navigation }) => {
    console.log('from landing screen')
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('MASONRY')}>
            <View style={{ backgroundColor: 'aqua', width: 70, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }}>
                <Text style={{ textAlign: 'center', textTransform:'uppercase', fontFamily: 'monospace', fontSize: 20, fontWeight: 'bold' }}>open</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default LandingScreen
