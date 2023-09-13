import { Pressable, StyleSheet, Text, View } from 'react-native'
import Card from './Card'
import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={ () => console.log(`Este es el curso ${category}`)}>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 30,
        marginVertical: 10, 
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})