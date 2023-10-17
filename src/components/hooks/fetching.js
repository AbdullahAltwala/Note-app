import  React,{useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View } from 'react-native';


export default function fetchMoives() {
    

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
  
    const getMovies = async () => {
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        setData(json.movies);
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
     <View >
        {isLoading ? (<ActivityIndicator />) : 
        (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
               {item.id}, {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )
      }
     </View>
      
    
    );
  
}

