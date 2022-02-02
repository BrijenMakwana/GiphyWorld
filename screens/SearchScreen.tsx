import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet,FlatList, Dimensions,SafeAreaView } from 'react-native';

import GiphyItem from '../components/GiphyItem';
import SearchBar from '../components/SearchBar';


export default function SearchScreen() {
  const [giphs,setGiphs] = useState([]);
  const [searchText,setSearchText] = useState("");

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

  const clearSearch = () => {
    setSearchText("");
    setGiphs([]);
  }
  
  return (
    <SafeAreaView style={styles.container}>
       <FlatList
        data={giphs}
        renderItem={({item})=> <GiphyItem giphs={item}/>}
        keyExtractor={item=>item.id}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <SearchBar 
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
    width: "100%",
    backgroundColor: "#fff",
    
  }
});
