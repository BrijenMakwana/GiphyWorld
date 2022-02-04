import { StyleSheet, Text, Image, Dimensions, SafeAreaView, Pressable, Share } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { View } from './Themed';
import Colors from '../constants/Colors';

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

  const colorScheme = useColorScheme();

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
    <SafeAreaView 
      style={[styles.container,{
        backgroundColor: Colors[colorScheme].background
      }]}
    >
      {/* title of the giph */}
        <Text 
          style={[styles.title,{
            color: Colors[colorScheme].tint
          }]}
        >
          {props.giphs.title}
        </Text>
        {/* iimage container */}
        <View style={[styles.imageContaiber,{
          shadowColor: Colors[colorScheme].shadow
        }]}>
          {/* giph */}
            <Image
                source={{
                    uri: props.giphs.images.original.url
                }}
                style={styles.image}
                resizeMode= 'contain'
            />
            {/* share button */}
            <Pressable 
              style={[styles.share,{
                backgroundColor: Colors[colorScheme].tint
              }]} 
              onPress={onShare}
            >
              <FontAwesome name="share" size={24} color={Colors[colorScheme].background} />
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
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
      },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50,
        marginHorizontal: 10
    },
    imageContaiber:{
        marginTop: 30,
        shadowOpacity: 0.5,
        elevation: 10,
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
        padding: 10,
        borderRadius: 10
    }
});
