import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, SafeAreaView } from 'react-native';
import Card from '../hooks/card';

export default function fetchMoives() {



  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      dd =json.movies[0]
      
      setData(json.movies);
      console.log(dd)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // use Effect runs at least once without calling it 
  useEffect(() => {

    getMovies();
  }, []);
   
  return (
   
    <SafeAreaView >
      
      {isLoading ? (<ActivityIndicator />) : 
        (
          <FlatList
          data={data} 
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Card question={item.id} answer={item.title} /> 
            
            )}
            />  
            )
          }
    </SafeAreaView>


);

}

