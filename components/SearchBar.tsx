import { Platform, Pressable, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export type SearchBarProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
    onClear: () => void;
}

const SearchBar = (props: SearchBarProps) => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={[styles.searchContainer,{
      backgroundColor: Colors[colorScheme].background,
      borderColor: Colors[colorScheme].tint
    }]}>
        {/* search icon */}
        <Feather name="search" size={24} color={Colors[colorScheme].tint}/>
        {/* search input */}
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.input}
          onSubmitEditing={props.onSubmit}
        />
        {/* clear button */}
        <Pressable onPress={props.onClear} style={styles.clear}>
          <MaterialIcons name="clear" size={24} color="#FF0000" />
        </Pressable>
        
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: "center",
    marginHorizontal: 10,
    marginTop: Platform.OS === "android" ? 50 : 0,
    
  },
  input: {
    flex: 1,
    marginLeft: 10
  },
  clear:{
    padding: 5
  }
});
