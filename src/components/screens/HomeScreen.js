import * as React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import FetchMoives from '../hooks/fetching';
import styles from '../styles/homeScreen';
import Card from '../hooks/card';
const HomeScreen = ( {items} ) => {

      console.log(items)
    return (
        <SafeAreaView style={styles.container}>
            
          <FetchMoives/>

        </SafeAreaView>


    );
}

export default HomeScreen;

