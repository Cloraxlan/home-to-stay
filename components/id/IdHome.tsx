import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuTab from '../homepage/MenuTab'

const IdHome = () => {
    return (
        <View>
            <MenuTab menus={[{name: "Social Security", link: "/id/ss"}]}/>
            <MenuTab menus={[{name: "Drivers Licence", link: "/id/license"}]}/>

        </View>
    )
}

export default IdHome

const styles = StyleSheet.create({})
