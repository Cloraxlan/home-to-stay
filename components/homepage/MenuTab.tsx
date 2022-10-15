import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import {v4} from "uuid"
export interface Menu {
    name: string,
    link: string,
}
interface Props  {
    menus : Array<Menu>
} 
const MenuTab = (props: Props) => {
    return (
        <View>
            {props.menus.map((menu: Menu)=>{
                return(
                    <Link key={menu.link} to={menu.link}>
                        <Text  style={styles.menuTab}>{menu.name}</Text>
                    </Link>
                )
            })}
        </View>
    )
}

export default MenuTab

const styles = StyleSheet.create({
    menuTab : {
        color : "red", 
        margin: 20,
        fontSize: 50,
        textAlign: "center",
        borderTopWidth: 3,
        borderTopColor: "black",
        borderBottomWidth: 3,
        borderBottomColor: "black"
    }
})
