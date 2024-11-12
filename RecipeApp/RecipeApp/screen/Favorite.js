import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Pressable, ScrollView, View, Text, Image, SafeAreaView} from 'react-native';   
import { ValuesContext } from './Values';
import { ThemeContext } from './Theme';
import { getAccount } from './AsyncStorage';

const Favorites = ({ route }) => {
    const {username} = route.params;
    const navigation = useNavigation(); 
    const [favorites, setFavorites] = useState([]);
    const values = useContext(ValuesContext);
    const themeValues = useContext(ThemeContext)

    useEffect(() => {
        const fetchFavorites = async () => {
        const account = await getAccount(username);
        if (account && account.favorites) { 
            setFavorites(account.favorites);
        }
    }

    const update = navigation.addListener('focus', fetchFavorites);

    fetchFavorites();
    return update;
    }, [navigation, username]);


    
    const getStyles = () => ({ 
        container: {
            flex:1,
            backgroundColor: themeValues.theme.backgroundColor
        },
        pic: { //picture
          width: '100%',
          height: 285,
          backgroundColor: "white",
          borderRadius: 35,
        },
        txt: { //Title of food 
            fontSize: 24,
            paddingTop: 10,
            paddingLeft: 20    
        
        },
        txt1: { //Difficulty
            color: "gray",
            fontSize: 15,
            paddingLeft: 22
        },
        likod:{ //background of picture
            alignSelf: 'center',
            height: 381,
            width: '90%',
            backgroundColor: "rgb(255, 195, 0)",
            borderRadius: 35,
            shadowColor: "gray",
            shadowOffset: 2,
            shadowOpacity: 20,
            shadowRadius: 2,
            marginBottom: 30,
            marginTop:20,
            marginHorizontal: 30,
        },   
    });
    const styleTheme = getStyles();

  return (
    <SafeAreaView style={styleTheme.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{fontSize: 35, color: themeValues.theme.textColor, fontWeight: "bold", paddingTop: 20, paddingLeft: 15, marginTop: 0}}>Favorites</Text>
        {favorites.map((dishKey, index) => (
          <View key={index} style={styleTheme.likod}>
            <Pressable onPress={() => navigation.navigate('Dish', { recipes: dishKey, username:username })} title='next'>
              <Image style={styleTheme.pic} source={values[dishKey][0]}/>
              <Text style={styleTheme.txt}>{values[dishKey][1]}</Text>
              <Text style={styleTheme.txt1}>{values[dishKey][2]}</Text>
            </Pressable>                    
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;