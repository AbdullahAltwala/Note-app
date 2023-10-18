import * as React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import FetchQuestion from '../hooks/fetching';
import styles from '../styles/homeScreen';
import Card from '../hooks/card';
const HomeScreen = ( {items} ) => {

    
    return (

        <SafeAreaView style={styles.container}>
            <FetchQuestion/>
        </SafeAreaView>
      
    );
}

export default HomeScreen;

