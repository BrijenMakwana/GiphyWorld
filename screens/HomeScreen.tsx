import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet,Dimensions, FlatList, SafeAreaView} from 'react-native';


import GiphyItem from '../components/GiphyItem';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';


export default function HomeScreen() {

  // storing all the giphs
  const [giphs,setGiphs] = useState([]);
  const colorScheme = useColorScheme();
  
  const getGiphs = () => {
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
  }

  useEffect(() => {
    getGiphs();
    }, []);
  
  return (
    <SafeAreaView style={[styles.container,{
      backgroundColor: Colors[colorScheme].background
    }]}>
      {/* liist of giphs from the API */}
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
