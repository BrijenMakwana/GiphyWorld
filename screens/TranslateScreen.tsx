import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiphyItem from '../components/GiphyItem';
import SearchBar from '../components/SearchBar';

const TranslateScreen = () => {
    const [id,setId] = useState("");
    const [title,setTitle] = useState("");
    const [url,setUrl] = useState("");


    const [translateText,setTranslateText] = useState("");

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

    
    const clearSearch = () => {
      setTranslateText("");
      setId("");
      setTitle("");
      setUrl("");
    }

  return (
    <SafeAreaView style={styles.container}>
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
      backgroundColor: "#fff",
      flex: 1
      },
});
