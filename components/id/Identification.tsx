import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import DriversLicence from './DriverLicence'
import IdHome from './IdHome'
import SocialSecurity from './SocialSecurity'

const Identification = () => {
    return (
        <View>
            <Routes>
                <Route path="" element={<IdHome/>} />
                <Route path="ss" element={<SocialSecurity/>} />
                <Route path="license" element={<DriversLicence/>} />

            </Routes>
        </View>
    )
}

export default Identification

const styles = StyleSheet.create({})
