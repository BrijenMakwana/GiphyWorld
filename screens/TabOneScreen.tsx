import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet,Dimensions, FlatList, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import GiphyItem from '../components/GiphyItem';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen() {

  const [giphs,setGiphs] = useState([]);


  useEffect(() => {
    axios.get('')
    .then((response)=> {
    
      setGiphs(response.data.data);
      
      })
    .catch(function (error) {
    // handle error
    console.log(error);
      })
    .then(function () {
    // always executed
    });
    }, []);
  
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
      />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
