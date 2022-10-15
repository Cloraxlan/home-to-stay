import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

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
                    <Link to={menu.link}>
                        <Text key={menu.link} style={styles.menuTab}>{menu.name}</Text>
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
