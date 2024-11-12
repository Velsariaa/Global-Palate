import React, { useState, useEffect, useContext } from "react";
import {TouchableOpacity, TextInput, View, Text, Image, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Swiper from 'react-native-swiper';
import Draggable from "react-native-draggable";
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { formatDistanceToNow } from 'date-fns';
import { ValuesContext } from './Values';
import { ThemeContext } from './Theme';
import { storeComment, getAllComments, toggleFavorite, isFavorite as chechkIfFavorite } from "./AsyncStorage";


const Main = ({route}) => {

    const CommentInput = ({ username, dish }) => {
        const [comment, setComment] = useState('');
        const [comments, setComments] = useState([]);   
      
        const handleAddComment = async () => {
        if (comment.trim() !== ''){
          await storeComment(username, dish, comment);
          await fetchComments();
          setComment('');
        }
        };

        const fetchComments = async () => {
            const allComments = await getAllComments(dish);
            if (allComments.length > 0) {
                setComments(allComments);
            }
        };

        useEffect(() => {
            fetchComments();
        }, []);

        return (
            <View style={styleTheme.container2}>
            <Text style={{fontSize: 25, fontWeight: "bold", color: themeValues.theme.textColor, marginTop: -80}}>Reviews</Text>
              <TextInput 
                style={styleTheme.input}
                color = {themeValues.theme.textColor} 
                placeholder=" Enter your comment here..."
                placeholderTextColor={themeValues.theme.textColor}
                value={comment} 
                multiline={true}
                onChangeText={setComment} 
              />
            <TouchableOpacity
            style={{
                backgroundColor: "rgb(255, 195, 0)", 
                padding: 10,
                borderRadius: 25,
                marginBottom: 30,
            }}
            onPress={handleAddComment}
            >
            <Text style={{color: themeValues.theme.textColor}}>Add Comment</Text>
            </TouchableOpacity>
            {comments.map((item, index) => (
                <View key={index} style = {styleTheme.comment}>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                        source={require('./assets/profile.png')} 
                        style={{width: 30, height: 30, borderRadius: 20, marginRight: 10}} 
                    />
                    <Text style={styleTheme.comment_user}>{item.comment.username}</Text> 
                </View>
                <Text style={styleTheme.comment_txt}>{item.comment.text}</Text>
                    {item.comment.date && <Text style={styleTheme.comment_date}>{formatDistanceToNow(new Date(item.comment.date), 'eeee')} ago</Text>}
            </View>
            ))}
            </View>
        );
    };

    const { username } = route.params;
    const dish = route.params.recipes;
    const navigation = useNavigation();
    const values = useContext(ValuesContext)
    const themeValues = useContext(ThemeContext)

    const [foodPic, setFoodPic] = useState('');
    
    const [foodTitle, setFoodTitle] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [timeTotal, setTimeTotal] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [servings, setServings] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instruction, setInstruction] = useState('');
    const [video, setVideo] = useState('');

    useEffect(() => {
            if (values[dish]) {
                setFoodPic(values[dish][0]);
                setFoodTitle(values[dish][1]);
                setCuisineType(values[dish][2]);
                setTimeTotal(values[dish][3]);
                setDifficulty(values[dish][4]);
                setServings(values[dish][5]);
                setIngredients(values[dish][6]);
                setInstruction(values[dish][7]);
                setVideo(values[dish][8]);
                return;
            }
          }, []);

    const getStyles = () => ({ 
        container: {
            flex:1,
            backgroundColor: themeValues.theme.backgroundColor
        },
        container1:{
            flex:1,
            flexDirection: "row",
        },
        pic:{
            width: 540,
            height: 300,
            borderRadius: 30,
            alignSelf: "center"  
        },
        pic1:{
            width: 50,
            height: 50,
            alignSelf: "center",
            marginTop: 15
        },
        txt1: {
            fontSize: 35,
            fontWeight: "bold",
            color: themeValues.theme.textColor,
            paddingLeft: 20,
            paddingTop: 20
        },
        txt2: {
            fontSize: 18,
            color: "gray",
            paddingLeft: 20,
            paddingBottom: 10,
        },
        txt3:{
            textAlign: "center",
            paddingTop: 10,
            fontSize: 20,
            fontWeight: "bold",
            color: themeValues.theme.textColor,
            
        },
        txt4:{
            textAlign: "center",
            fontSize: 14,
            color: themeValues.theme.textColor,
            
        },
        txt5:{
            fontSize: 25,
            fontWeight: "bold",
            color: themeValues.theme.textColor,
            paddingLeft: 20,
            paddingTop: 20,
            marginTop: -10,
        },
        txt6: {
            fontSize: 18,
            padding: 15,
            color: themeValues.theme.textColor,
        },
        likod: { 
            flex: 1,
            backgroundColor: "rgb(255, 195, 0)",
            width: 100,
            height: 160,
            margin: 10, 
            borderRadius: 30
        },
        container2:{
            flex: 1,
            margin: 10,
            marginBottom: 30,
        },
        input: {
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 10,
            padding: 5,
            borderRadius: 25,
        },
        comment: {
            flexDirection: 'column', 
            marginBottom: 20
          
        },
        comment_user: {
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 4,
            color: themeValues.theme.textColor
        },
        comment_txt: {
            fontSize: 16,
            marginLeft: 40,
            marginTop: -8,
            marginBottom: 0,
            color: themeValues.theme.textColor,
        },
        comment_date: {
            fontSize: 12,
            color: 'gray',
            marginLeft: 40,
            marginBottom: 10,       
        }
    });
    const styleTheme = getStyles();

    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavoriteStatus = async () => {
        await toggleFavorite(username, dish);
        setIsFavorite(!isFavorite);
    };

    const checkFavorite = async () => {
        const favorite = await chechkIfFavorite(username, dish); 
        setIsFavorite(favorite);
    };

    useEffect(() => {
        checkFavorite();
    }, [username, dish]);
        

    const getTintColor = () => {
        if (isFavorite) {
          return '#ff1e6c';
        } else {
          return themeValues.theme.backgroundColor === 'white' ? 'black' : 'white';
        }
    };

    useEffect(() => {
        const update = navigation.addListener('focus', () => {
            checkFavorite();
        });
    
        return update;
    }, [navigation]);

    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [isStopwatchVisible, setIsStopwatchVisible] = useState(false);

    const stopwatchStyle = {
        container: {
          backgroundColor: "rgb(255, 195, 0)",
          padding: 5,
          borderRadius: 5,
          width: 220,
        },
        text: {
          fontSize: 30,
          color: themeValues.theme.textColor,
          marginLeft: 7,
        }
      };

    return(
        <View style={styleTheme.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Swiper showsButtons={false} style={{height:300}} 
                    activeDot={<View style={{backgroundColor:"rgb(255, 195, 0)", width: 8, height: 8,  borderRadius: 4, marginLeft: 6,}}/>}
                    dot={<View style={{backgroundColor:'rgb(0,0,0)', width: 8, height: 8,  borderRadius: 4, marginLeft: 6,}}/>}>
                    {foodPic ? <Image source={foodPic} style={styleTheme.pic} /> : null}
                    <View style={{ left: 120, width: 300, height: 300, justifyContent: 'center', alignItems: 'center', marginLeft: 30 }}>
                    <YoutubePlayer
                        width={530}
                        height={400}
                        play={true}
                        videoId={video}
                    />  
                    </View>
                </Swiper>
           
                <Text style={styleTheme.txt1}>{foodTitle}</Text>
                <Text style={styleTheme.txt2}>{cuisineType}</Text>

                <TouchableOpacity onPress={toggleFavoriteStatus}>
                <Image style={{ width: 40, height: 40, marginLeft: 20, tintColor: getTintColor()}}
                source= {require('./assets/favorite.png')}/>
                </TouchableOpacity>

                <View style={styleTheme.container1}>
                    <View style={styleTheme.likod}>
                        <Image style={styleTheme.pic1}
                            source={require('./assets/time.png')}/>
                        <Text style ={styleTheme.txt3}>{timeTotal}</Text>
                        <Text style ={styleTheme.txt4}>Minutes</Text>
                    </View>

                    <View style={styleTheme.likod}>
                        <Image style={styleTheme.pic1}
                            source={require('./assets/level.png')}/>
                        <Text style ={styleTheme.txt3}>{difficulty}</Text>
                        <Text style ={styleTheme.txt4}>Difficulty</Text>
                    </View>

                    <View style={styleTheme.likod}>
                        <Image style={styleTheme.pic1}
                            source={require('./assets/serve.png')}/>
                        <Text style ={styleTheme.txt3}>{servings}</Text>
                        <Text style ={styleTheme.txt4}> Serves</Text>
                    </View>
                    </View>  

                    <TouchableOpacity onPress={() => setIsStopwatchVisible(!isStopwatchVisible)}>
                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                            <Image style={{ width: 30, height: 30, marginLeft: 20, tintColor: themeValues.theme.textColor}} source={require('./assets/stopwatch.png')}/>
                            <Text style={{ marginLeft: 10, color: themeValues.theme.textColor}}>{isStopwatchVisible ? 'Close Stopwatch' : 'Open Stopwatch'}</Text>
                        </View>
                    </TouchableOpacity>

                <Text style={styleTheme.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={styleTheme.txt6}>{ingredients}</Text>
                </View>

                <Text style={styleTheme.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={styleTheme.txt6}>{instruction}</Text>
                </View>

                <CommentInput username={username} dish={dish} />                       
            
            </ScrollView>    

                {isStopwatchVisible && 
                <Draggable>
                    <Stopwatch 
                        start={isStopwatchStart}
                        reset={resetStopwatch}
                        options={stopwatchStyle}
                    />
                    <View>
                    <TouchableOpacity onPress={() => {setIsStopwatchStart(!isStopwatchStart); setResetStopwatch(false);}}>
                        <Text style={{color: themeValues.theme.textColor}}>{!isStopwatchStart ? "START" : "STOP"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setIsStopwatchStart(false); setResetStopwatch(true);}}>
                        <Text style={{color: themeValues.theme.textColor}}>RESET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsStopwatchVisible(false)}>
                        <Text style={{color: themeValues.theme.textColor}}>CLOSE</Text>
                    </TouchableOpacity>
                    </View>
                </Draggable>
                }

        </View>
    )  

};

export default Main    