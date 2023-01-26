import React, { useRef, useState } from 'react'
import { Button, Linking, StyleSheet, Text, TextInput, View } from 'react-native'
import HomeButton from '../homepage/HomeButton'
import WebView from 'react-native-webview';

const BirthCertificate = () => {
    return (
        <View>
            <HomeButton/>
            <WebView
                source={{
                uri: 'https://www.vitalrecordsonline.com/faqs/birth-certificates/how-to-order-a-birth-certificate-online#:~:text=If%20you%E2%80%99re%20ready%20to%20order%20a%20certified%20copy,a%20certified%20copy%20of%20a%20birth%20certificate%E2%80%9D%20button.',
                }}
                startInLoadingState={true}
                scalesPageToFit={true}
                style={{
                    width: 320,
                    height: 300,
                }}
            />
        </View>

    )
}

export default BirthCertificate

const styles = StyleSheet.create({

});