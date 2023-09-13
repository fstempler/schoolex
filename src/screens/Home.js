import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header title={'Home'}/>
    <Categories />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})