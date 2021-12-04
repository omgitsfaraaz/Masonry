import React from 'react'
import { View, Text } from 'react-native';
// React-Masonry
import MasonryList from "react-native-masonry-list";
// images
import { masonryImages } from './masonryData';

const MasonryScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <MasonryList 
                images={masonryImages}
                columns={3}
            />
        </View>
    )
}

export default MasonryScreen
