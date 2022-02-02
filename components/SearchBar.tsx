import { Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export type SearchBarProps = {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
    onClear: () => void;
}

const SearchBar = (props: SearchBarProps) => {
  return (
    <SafeAreaView style={styles.searchContainer}>
        <Feather name="search" size={24} color="#E94560"/>
        <TextInput
          placeholder='search here'
          value={props.value}
          onChangeText={props.onChangeText}
          style={styles.input}
          onSubmitEditing={props.onSubmit}
        />
        <Pressable onPress={props.onClear}>
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E94560",
    borderRadius: 50,
    alignSelf: "center",
    flex: 1,
    marginHorizontal: 10,
    marginTop: Platform.OS === "android" ? 50 : 0,
    
  },
  input: {
    flex: 1,
    marginLeft: 10
  },
});
