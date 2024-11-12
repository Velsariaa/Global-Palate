import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food1Chinese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Spring Rolls (春卷)</Text>
                <Text style={style.txt2}>Chinese Cuisine Appetizer</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>45</Text>
                        <Text style ={style.txt4}>Minutes</Text>
                    </View>

                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/level.png')}/>
                        <Text style ={style.txt3}>Easy</Text>
                        <Text style ={style.txt4}>Difficulty</Text>
                    </View>

                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/serve.png')}/>
                        <Text style ={style.txt3}>15 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ For the wrappers</Text>
                    <Text style={style.txt6}>○ 15 large flour-based sprill roll wrappers (25 x 25 cm / 10 x 10 inches)</Text>
                    <Text style={style.txt6}>○ For the filling</Text>
                    <Text style={style.txt6}>○ 200 grams minced pork</Text>
                    <Text style={style.txt6}>○ 120 grams shrimp, shelled and cubed</Text>
                    <Text style={style.txt6}>○ 130 grams bean sprouts</Text>
                    <Text style={style.txt6}>○ 100 grams Chinese chives, cut into sections or finely shredded cabbage</Text>
                    <Text style={style.txt6}>○ 26 shiitake mushrooms - thinly sliced (rehydrate beforehand if using dried ones)</Text>
                    <Text style={style.txt6}>○ 2 stalks scallions, finely chopped</Text>
                    <Text style={style.txt6}>○ 100 g dried mung bean vermicelli, rehydrated and cut into sections</Text>
                    <Text style={style.txt6}>○ 2 eggs</Text>    
                    <Text style={style.txt6}>○ For the seasoning</Text>     
                    <Text style={style.txt6}>○ 2 tablespoon oyster sauce</Text>
                    <Text style={style.txt6}>○ 1 teaspoon sesame oil</Text>
                    <Text style={style.txt6}>○ ½ teaspoon salt</Text>
                    <Text style={style.txt6}>○ ½ teaspoon sugar</Text>
                    <Text style={style.txt6}>○ ¼ teaspoon ground white or black pepper</Text>
                    <Text style={style.txt6}>○ For frying</Text>
                    <Text style={style.txt6}>○ Cooking oil for deep frying or air-frying</Text>
                    <Text style={style.txt6}>○ For the dipping sauce (optional)</Text>
                    <Text style={style.txt6}>○ 2 tablespoon white rice vinegar (or fresh lemon/lime juice)</Text>
                    <Text style={style.txt6}>○ 1 teaspoon light soy sauce</Text>
                    <Text style={style.txt6}>○ 1 pinch sugar</Text>
                    <Text style={style.txt6}>○ 1 clove garlic, minced</Text>
                    <Text style={style.txt6}>○ Fresh chili pepper, finely chopped</Text>               
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Mix the filling. Put all the ingredients for the filling into a large mixing bowl (Note: leave out one egg yolk for brushing the wrappers).</Text>
                    <Text style={style.txt6}>➋ Add all the seasonings. Mix until well combined (It`s best to do so with your hands. Wear kitchen gloves if available).</Text>
                    <Text style={style.txt6}>➌ Assemble the rolls. Gently separate the spring roll wrappers one by one. Remember to always cover them with a clean damp cloth as they dry out easily.</Text>
                    <Text style={style.txt6}>➍ Place one wrapper on a flat surface with one of the four corners facing towards you. Put about 3 tablespoon of the filling above the closest corner (Use a spoon to help shape it into a rectangle).</Text>
                    <Text style={style.txt6}>➎ Lift the closest corner to wrap the filling then roll it to the half-line of the wrapper. Try to wrap it as tight as possible without leaving any air pockets inside. But be gentle during this process to avoid tearing.</Text>
                    <Text style={style.txt6}>➏ Lightly press two ends of the filling then fold the left and right corners of the wrapper towards the middle.</Text>
                    <Text style={style.txt6}>➐ Roll the cylinder until only a triangle is left at the top. Brush a layer of egg yolk over the triangle. Roll again to seal completely. Repeat to assemble all the rolls.</Text>
                    <Text style={style.txt6}>➑ Deep fry the rolls. Heat the oil for deep frying until it reaches 180°C/350°F. Gently slide in the rolls one by one (Do not overcrowd. Fry them in batches if necessary).</Text>
                    <Text style={style.txt6}>➒ Fry over medium heat. Flip over a few times to ensure even browning. When they become golden, transfer out to a tray lined with kitchen paper to absorb excess oil.{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                    
                </View>
            </ScrollView>                        
        </View>
    )  
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    pic:{
        width: 300,
        height: 300,
        borderRadius: 30,
        alignSelf: "center"  
    },
    txt1: {
        fontSize: 35,
        fontWeight: "bold",
        color: "rgb(64, 61, 57)",
        paddingLeft: 20,
        paddingTop: 20
    },
    txt2: {
        fontSize: 18,
        color: "gray",
        paddingLeft: 20,
        paddingBottom: 20,
    },

    //icons
    container1:{ //yung spacing ng box
        flex:1,
        flexDirection: "row",
        
    },
    likod: { //bcground ng info
        flex: 1,
        backgroundColor: "rgb(255, 195, 0)",
        width: 100,
        height: 130,
        margin: 10,  // margin ng bckground
        borderRadius: 30
         
    },
    pic1:{
        width: 50,
        height: 50,
        alignSelf: "center",
        marginTop: 15
        
    },
    txt3:{
        textAlign: "center",
        paddingTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        
    },
    txt4:{
        textAlign: "center",
        fontSize: 14,
        
        color: "white",
        
    },

    //ingredients
    txt5:{
        fontSize: 25,
        fontWeight: "bold",
        color: "rgb(64, 61, 57)",
        paddingLeft: 20,
        paddingTop: 20
    },
    txt6: {
        fontSize: 18,
        padding: 15,
    }
        
    

    
})

export default Food1Chinese