import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    styleName: {
        color: 'blue'
        fontSize:"40"
    }
})
export default function Country({country}) {
    const {name,description,price,img} = country;
    return (
        <View>
            <Image
          source={img}
          style={{ width: 200, height: 200 }}
        />

            <Text style={Styles.styleName}>Name:{name}</Text>
            <Text>Description:{description}</Text>
            <Text>Price:{price}</Text>
        </View>
    )
}
