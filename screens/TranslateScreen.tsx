import { SafeAreaView, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import GiphyItem from '../components/GiphyItem';
import SearchBar from '../components/SearchBar';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const TranslateScreen = () => {
    // id of a giph
    const [id,setId] = useState("");
    // title of a giph
    const [title,setTitle] = useState("");
    // image url of a giph
    const [url,setUrl] = useState("");
    // user iinput
    const [translateText,setTranslateText] = useState("");

    const colorScheme = useColorScheme();


    const getTranslatedGiphs = () => {
        axios.get('',{
          params:{
            s: translateText
          }
        })
            .then((response)=> {
            console.log(response.data.data.images.original.url);
            // setGiphs(response.data.data);
            // console.log(giphs.id)
            setId(response.data.data.id);
            setTitle(response.data.data.title);
            setUrl(response.data.data.images.original.url);
            console.log(url);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });
    }

    // clear the user input and states
    const clearSearch = () => {
      setTranslateText("");
      setId("");
      setTitle("");
      setUrl("");
    }

  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor: Colors[colorScheme].background
    }]}>
      {/* search bar */}
      <SearchBar 
        placeholder="translate here"
        value={translateText} 
        onChangeText={(text)=>setTranslateText(text)} 
        onSubmit={getTranslatedGiphs} 
        onClear={clearSearch}
      />
      {
        url !== "" ? (
          <GiphyItem giphs={{
            id: id,
            title: title,
            images: {
              original: {
                url: url
              }
            }
          }}        
          />
        ):
        null
      }
     
    </SafeAreaView>
  );
};

export default TranslateScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});
