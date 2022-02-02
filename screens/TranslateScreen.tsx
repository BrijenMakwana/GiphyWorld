import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiphyItem from '../components/GiphyItem';

const TranslateScreen = () => {
    const [giphs,setGiphs] = useState([]);
    const [translateText,setTranslateText] = useState("hello");

    const getTranslatedGiphs = () => {
        axios.get('https://api.giphy.com/v1/gifs/translate?api_key=iajFOqHz9Mmyf3vZU4pKTE4KBZ4AqtC1&s=hello')
            .then((response)=> {
            // console.log(response.data.data.title);
            setGiphs(response.data.data);
            console.log(giphs)
            
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });
    }

    useEffect(() => {
      getTranslatedGiphs();
    }, []);
    

  return (
    <View style={styles.container}>
      <FlatList
        data={giphs}
        renderItem={({item})=><GiphyItem giphs={item}/>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};

export default TranslateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: "center"
        
      },
});
