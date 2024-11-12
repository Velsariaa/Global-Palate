
import  React, { useState, useEffect, useContext } from 'react';
import {Pressable, ScrollView, View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';   
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from './Theme';
import { ValuesContext } from './Values';
import { getCurrentUser } from './AsyncStorage';

const Home = ({navigation, route}) => {

    const { username } = route.params;
    const [searchTerm, setSearchTerm] = useState('')
    const navigateTo = (route, param) => navigation.navigate(route, param);

    const themeValues = useContext(ThemeContext)
    const getStyles = () => ({
        container: {
            flex: 1,
            backgroundColor: themeValues.theme.backgroundColor,
        },
        searchxbtn:{
            tintColor: themeValues.theme.textColor,
            bottom: 49,
            height: 15,
            width: 15,
            left: 255,
        },
        txt_title: {
            color: themeValues.theme.textColor,
            marginTop: -20,
            marginLeft: 25,
            fontSize: 40,
            color: "white",
            fontWeight: "bold"
        },
        txt_title2: {
            color: themeValues.theme.textColor,
            marginLeft: 25,
            fontSize: 16,
            color: "white",
            fontWeight: "bold",
        },
        txt: {  
            fontSize: 24,
            paddingTop: 10,
            paddingLeft: 20   
        },
        txt1: { 
            color: "gray",
            fontSize: 15,
            paddingLeft: 22
        },
        searchBox:{
            paddingHorizontal:15, 
            paddingVertical: 15, 
            borderColor:'white',
            borderWidth: 2,
            borderRadius: 25,
            margin: 10,
            backgroundColor: themeValues.theme.backgroundColor,
            shadowColor: "black",
            shadowOffset:{width:0,height:5},
            shadowRadius:5,
            shadowOpacity:0.3,
            elevation: 5,
        },
        gradient: {
            flex:1,
            justifyContent: "center",
            width: "auto",
            height: 225,
            borderRadius: 30,
            marginHorizontal: 15,
            marginTop: 15
        },
        txt_title:{
            marginTop: -20,
            marginLeft: 25,
            fontSize: 40,
            color: "white",
            fontWeight: "bold",
        },
        txt_title2:{
            marginLeft: 25,
            fontSize: 16,
            color: "white",
            fontWeight: "bold",
        },
        img_1: {
            height:80,
            width:80,
            position:"absolute",
            marginLeft: 450,
            marginTop: 50,
        },
        img_2:{
            height:70,
            width:70,
            position:"absolute",
            marginLeft: 500,
            marginTop: 100
        },
        img_3:{
            height:90, 
            width:90, 
            position:"absolute", 
            marginLeft: 400, 
            marginTop: 90
        },
        view_search:{
                height: 300,
                width: 300 ,
                position:"absolute", 
                top: 200,
                alignSelf: "center"
        },
        img_box:{
            shadowColor: "black",
            shadowOffset:{width:1,height:5},
            shadowRadius:5,
            shadowOpacity:0.3,
            paddingBottom: 10,
            elevation:0
        },
        txt_country:{
            position: "absolute",
            fontSize: 35, 
            fontWeight:"bold", 
            color: "white", 
            textAlign: 'justify', 
            padding: 30, 
            paddingTop: 240,
            marginTop: -10
        },
        txt_food:{
            position: "absolute", 
            fontSize: 20, 
            fontWeight:"bold", 
            color: "white", 
            textAlign: 'justify', 
            padding: 30, 
            paddingTop: 270
        },
        bck2:{
            backgroundColor:"Yellow"
        },
        text: { // header
            color: "gray",
            fontSize: 30,
            fontWeight: "bold",
            padding: 20,
            paddingRight: 270  
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
        container1:{ //yung spacing ng box
            flex:1,
            flexDirection: "row",
        },
        pic: { //picture
            width: '100%',
            height: 285,
            backgroundColor: "white",
            borderRadius: 35,
            
        },
        container1:{ //yung spacing ng box
            flexDirection: "row", 
            justifyContent: "space-between",
            flex:1,
            paddingLeft: 10,
            paddingRight: 10,
            padding: 10
        },
        categories: {
            width: 100,
            height: 50,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent:"center",
            borderRadius: 15,
            borderWidth: 2,
            borderColor:"rgb(255, 195, 0)"
        },
        categories_1:{
            fontSize: 20,
            color: "rgb(255, 195, 0)",   
        },
        box: {
            flex:1,
            width:250,
            height:300,
            padding: 10,
            margin: 10,
            borderRadius: 30,
            backgroundColor: "black",
          },
          text: {
            alignSelf:"center",
            fontSize: 35,
            fontWeight: "bold",
            color: "white"
          },
          box1: {
            justifyContent:"center",
            flex:1,
            width:150,
            height:150,
            backgroundColor: "black",
            padding: 10,
            marginLeft: 20,
            borderRadius:40,
        
          },
      });
    const styleTheme = getStyles();

    const values = useContext(ValuesContext)

    const handleSearch = (text) => {
        setSearchTerm(text.toString());    
    };

    const clearInput = () => {
        setSearchTerm('');
    };

    const CurrentUserComponent = () => {
        const [currentUser, setCurrentUser] = useState(null);
      
        useEffect(() => {
          const fetchCurrentUser = async () => {
            const user = await getCurrentUser();
            setCurrentUser(user);
          };
      
          fetchCurrentUser();
        }, []);

    }


    let filteredValues = Object.keys(values);
    if (searchTerm) {
        filteredValues = filteredValues.filter((key) =>
            values[key].some(value => 
                Array.isArray(value) ? value.some(ingredient => ingredient.split('\n\n').some(line => line.replace(/○ /g, '').toLowerCase().includes(searchTerm.toLowerCase())))
                : typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }

    const dishesByCountry = {};
    Object.keys(values).forEach((dish) => { 
        const country = values[dish][2]; 
        if (!dishesByCountry[country]) {
            dishesByCountry[country] = []; 
        }
        dishesByCountry[country].push(dish); 
    });
    const countries = Object.keys(dishesByCountry);

    const top3 = ['Dish7', 'Dish6', 'Dish3'];

    const categoryImages = {
        Chinese: require('./assets/china.jpg'),
        Filipino: require('./assets/ph.jpg'),
        Italian: require('./assets/italy.jpg'),
        Japanese: require('./assets/japan.jpg'),
    };

    const top3Images = {
        Dish7: require('./assets/pannacota2.jpg'),
        Dish6: require('./assets/scallionpancakes.jpg'),
        Dish3: require('./assets/top-carbo.png'),
    }
   
    return(
        <SafeAreaView  style={styleTheme.container}>  
            <ScrollView showsVerticalScrollIndicator={false}> 
                <LinearGradient style={styleTheme.gradient} colors={["#FF5F6D","#FFC371"]} start={{x:1 , y: 1}} end={{x: 0, y: 0}}>
                    <Text style={styleTheme.txt_title}>The Art of Flavor,</Text>
                    <Text style={styleTheme.txt_title2}>in your<Text style={{color: "yellow"}}> Pocket</Text></Text>   
                </LinearGradient>
                <Image style={styleTheme.img_1} source={require('./assets/burger.png')}/>
                <Image style={styleTheme.img_2} source={require('./assets/tako.png')}/>
                <Image style={styleTheme.img_3} source={require('./assets/ramen.png')}/>
            
                <View style={styleTheme.view_search}>
                    <TextInput placeholder='Search' 
                    color = {themeValues.theme.textColor} 
                    placeholderTextColor={themeValues.theme.textColor} 
                    clearButtonMode="always" 
                    style={styleTheme.searchBox} 
                    autoCapitalize="none" 
                    autoCorrect={false}     
                    value = {searchTerm}
                    onChangeText = {handleSearch}/>
                    {searchTerm ? (
                    <Pressable onPress={clearInput}>
                        <Image style={styleTheme.searchxbtn} source={require('./assets/remove.png')}/>
                    </Pressable>
                    ) : null}
                </View>

                {!searchTerm && (
                <>
                <Text style={{fontSize: 35, color: themeValues.theme.textColor , fontWeight: "bold",paddingTop: 20, paddingLeft: 15, marginTop: 20}}>Categories</Text>
                <View style={{flex:1,flexDirection:"row", marginHorizontal: 20,}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {countries.map((country, index) => (
                        <View key={index} style={styleTheme.img_box}>
                            <TouchableOpacity onPress={() => navigateTo("CountryDishes", { dishes: dishesByCountry[country], username: username})} title='next'>  
                                <Image style={styleTheme.box} source={categoryImages[country]}/>
                                <Text style={styleTheme.txt_country}>{country}</Text>
                                <Text style={styleTheme.txt_food}>Food</Text>
                            </TouchableOpacity>
                        </View>
                        ))}
                    </ScrollView>
                </View>

                <Text style={{fontSize: 35, color: themeValues.theme.textColor, fontWeight: "bold",paddingTop: 20, paddingLeft: 15, marginTop: -20}}>Top 3 Choices</Text>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                {top3.map((dishKey, index) => {
                    const topname = values[dishKey];
                    const topdishImage = top3Images[dishKey];
                    return (
                        <View key={index} style={{paddingLeft:50,flex:1,flexDirection:"row", marginHorizontal: 10, marginTop:10}}>
                        <TouchableOpacity onPress={() => navigateTo('Dish', { recipes: dishKey, username: username})} title='next'> 
                            <LinearGradient style={{backgroundColor: "white", width: 350, height: 200, justifyContent: "center",borderRadius: 20}}
                            colors={["#8E0E00","#1F1C18"]}
                            start={{x:1 , y: 1}}
                            end={{x: 0, y: 0}}
                            >
                            <Text style={{fontSize: 24, fontWeight: "bold", color: "white", textAlign: "center", left: 60, flexWrap: 'wrap'}}>{topname[1]}</Text>       
                            <Image style={{left: 225, width: 25, height: 25, position: "absolute", bottom: 38}} source={require('./assets/btn_next.png')}/>
                            </LinearGradient>
                            <Image  style={{
                            width: 160, 
                            height: 160,
                            borderRadius: 100,
                            resizeMode: 'contain', 
                            position: "absolute", 
                            left:-45,
                            shadowColor: "black",
                            shadowOffset:{width:3,height:2},
                            shadowRadius:3,
                            shadowOpacity:0.3,
                            marginTop: 19}} 
                            source={topdishImage}/>   
                        </TouchableOpacity>
                        </View>
                    );
                })}
                </ScrollView> 
                </>  
                )} 

                <Text style={{fontSize: 35, color: themeValues.theme.textColor, fontWeight: "bold",paddingTop: 20, paddingLeft: 15, marginTop: searchTerm ? 20 : 0}}>Recipes</Text>                 
                {filteredValues.map((dishKey, index) => {
                    const recipes = values[dishKey];
                    return (
                        <View key={index} style={styleTheme.likod}>
                            <Pressable onPress={() => navigateTo('Dish', { recipes: dishKey, username: username })} title='next'>
                                <Image style={styleTheme.pic} source={recipes[0]}/>
                                <Text style={styleTheme.txt}>{recipes[1]}</Text>
                                <Text style={styleTheme.txt1}>{recipes[2] + ' Dish'}</Text>
                            </Pressable>                    
                        </View>
                    );
                    })} 
        </ScrollView>  
    </SafeAreaView>              
    ) 

    
}

export default Home


