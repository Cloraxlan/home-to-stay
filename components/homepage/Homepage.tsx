import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuTab from './MenuTab'

const Homepage = () => {
    return (
        <View>
            <MenuTab menus={[{name:"Identification", link:"/id"}, {name:"Food", link:"/food"}]}/>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({})
