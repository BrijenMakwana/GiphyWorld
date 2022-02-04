import axios from 'axios';
import { useState } from 'react';
import { StyleSheet,FlatList, Dimensions,SafeAreaView } from 'react-native';

import GiphyItem from '../components/GiphyItem';
import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';


export default function SearchScreen() {
  // storing all the giphs
  const [giphs,setGiphs] = useState([]);
  // search text by user
  const [searchText,setSearchText] = useState("");

  const colorScheme = useColorScheme();

  const getSearchGiphs = () => {
    axios.get('',{
      params:{
        q: searchText,
        limit: 50,
        offset: 0,
        rating: "g",
        lang: "en"
      }
    })
    .then((response)=> {
      // console.log(response.data.data);
      setGiphs(response.data.data);
      
      })
    .catch(function (error) {
    // handle error
    console.log(error);
      })
    .then(function () {
    // always executed
    });
  }

  // clear the search and state
  const clearSearch = () => {
    setSearchText("");
    setGiphs([]);
  }
  
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor: Colors[colorScheme].background
    }]}>
      {/* list of giphs based on user search */}
       <FlatList
        data={giphs}
        renderItem={({item})=> <GiphyItem giphs={item}/>}
        keyExtractor={item=>item.id}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
        // search bar
        ListHeaderComponent={
          <SearchBar 
            placeholder="search here"
            value={searchText} 
            onChangeText={(text) => setSearchText(text)} 
            onSubmit={getSearchGiphs}
            onClear={clearSearch}
          />
        }
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
