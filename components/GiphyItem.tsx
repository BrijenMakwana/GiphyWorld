import { StyleSheet, Text, Image, Dimensions, SafeAreaView, Pressable, Share } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View } from './Themed';

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

    // share the URL
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: props.giphs.images.original.url
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

   
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{props.giphs.title}</Text>
        <View style={styles.imageContaiber}>
            <Image
                source={{
                    uri: props.giphs.images.original.url
                }}
                style={styles.image}
            />
            <Pressable style={styles.share} onPress={onShare}>
                <FontAwesome name="share" size={24} color="#fff" />
            </Pressable>
        </View>
        
        
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
        marginTop: 50,
        shadowOpacity: 0.5,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    image:{
        height: 300,
        width: 300,
        
    },
    share:{
        position: "absolute",
        top: -15,
        right: 10,
        backgroundColor: "#E94560",
        padding: 10,
        borderRadius: 10
    }
});
