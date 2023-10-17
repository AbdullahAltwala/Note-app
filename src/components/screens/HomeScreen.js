import * as React from 'react';
import {SafeAreaView} from 'react-native';
import FetchMoives from '../hooks/fetching';
import styles from '../styles/homeScreen';

export default function HomeScreen() {
    
  
    return (
     <SafeAreaView style={styles.container}>
         <FetchMoives/>
     </SafeAreaView>
      
    
    );
  
}
