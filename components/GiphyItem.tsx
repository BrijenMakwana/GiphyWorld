import { StyleSheet, Text, Image, Dimensions, SafeAreaView, Pressable } from 'react-native';
import React from 'react';


export type GiphyItemProps ={
    giphs:{
        id: string;
        title: string;
        images:{
            original:{
                url: string;
            }
        }
    }
}


const GiphyItem = (props: GiphyItemProps) => {

   
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{props.giphs.title}</Text>
        <Pressable style={styles.imageContaiber}>
            <Image
                source={{
                    uri: props.giphs.images.original.url
                }}
                style={styles.image}
            />
        </Pressable>
        
    </SafeAreaView>
  );
};

export default GiphyItem;

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        backgroundColor: "#fff",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        
        
        
    },
    title:{
        fontSize: 40,
        fontWeight: "bold",
        color: "#E94560",
        marginTop: 50
    },
    imageContaiber:{
        marginTop: 20,
        shadowOpacity: 0.5,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        alignItems: "center",
        justifyContent: "center"
    },
    image:{
        height: 300,
        width: 300,
        
    }
});
