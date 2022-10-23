/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Food from './components/food/Food';
import Homepage from './components/homepage/Homepage';
import Identification from './components/id/Identification';

/*const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text> 
    </View>
  );
};*/

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'; 

  

  return (
    <SafeAreaView >
      <StatusBar
        
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
            <NativeRouter>
                <View
                style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                  <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/id/*" element={<Identification/>} />
                    <Route path="/food/*" element={<Food/>} />
                  </Routes>
              </View>
            </NativeRouter>

        
      </ScrollView> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }, 
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',

  },
});

export default App;
