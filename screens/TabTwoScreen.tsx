import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  const [giphs,setGiphs] = useState([]);
  const [searchText,setSearchText] = useState("");


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
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
