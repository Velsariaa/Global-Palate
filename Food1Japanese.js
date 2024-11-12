import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food1Japanese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('(di ko alam mag lagay jpg)')}/>
                <Text style={style.txt1}>Gyudon (牛丼)</Text>
                <Text style={style.txt2}>Japanese Cuisine Main Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>20 Minutes</Text>
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
                        <Text style ={style.txt3}>2 people</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ ½ onion</Text>
                    <Text style={style.txt6}>○ 1 green onion/scallion</Text>
                    <Text style={style.txt6}>○ ½ lbs thinly sliced beef (chuck or ribeye)</Text>
                    <Text style={style.txt6}>○ For The Sauce:</Text>
                    <Text style={style.txt6}>○ ½ cup of dashi (Japanese soup stock)</Text>
                    <Text style={style.txt6}>○ 2 tbsp of sake</Text>
                    <Text style={style.txt6}>○ 2 tbsp of mirin</Text>
                    <Text style={style.txt6}>○ 3 tbsp of soy sauce</Text>
                    <Text style={style.txt6}>○ 1 tbsp of sugar</Text>
                   <Text style={style.txt6}>○ For Serving:</Text>
                   <Text style={style.txt6}>○ 2 servings of cooked Japanese short grain rice</Text>
                   <Text style={style.txt6}>○ Pickled red ginger</Text>
                </View>

                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Before you start: </Text>
                    <Text style={style.txt6}>➋ For the steamed rice, please note that 1½ cups (300 g, 2 rice cooker cups) of uncooked Japanese short-grain rice yield 4⅓ cups (660 g) of cooked rice, enough for 2 donburi servings (3⅓ cups, 500 g). </Text>
                    <Text style={style.txt6}>➌ Gather all the ingredients. I usually put the thinly sliced beef in the freezer for 10 minutes because it‘s a lot easier to cut semi-frozen meat.</Text>
                    <Text style={style.txt6}>➍ First, thinly slice ½ onion.</Text>
                    <Text style={style.txt6}>➎ Next, cut 1 green onions/scallions diagonally into thin slices. Set aside.</Text>
                    <Text style={style.txt6}>➏ Then, take out ½ lb thinly sliced beef (chuck or ribeye) from the freezer. Cut the semi-frozen sliced meat into pieces 3 inches (7.6 cm) wide.</Text>
                    <Text style={style.txt6}>➐ In a large frying pan (do not turn on the heat yet), add ½ cup dashi (Japanese soup stock), 2 Tbsp sake, 2 Tbsp mirin, 3 Tbsp soy sauce, and 1 Tbsp sugar. Mix to combine. </Text>
                    <Text style={style.txt6}>➑ Next, add the onion slices and spread them throughout the pan, separating the onion layers.</Text>
                    <Text style={style.txt6}>➒ Then, add the meat on top of the onions. Separate the thin slices of beef so the meat covers the onions. </Text>
                    <Text style={style.txt6}>➓ To Cook:</Text>
                    <Text style={style.txt6}>➊➊ Cover the pan with a lid. Now, turn on the heat to medium and start cooking.</Text>
                    <Text style={style.txt6}>➊➋ When the meat has browned, skim off the scum and fat from the broth with a fine-mesh skimmer. Turn down the heat to a simmer and continue cooking, covered, for 3–4 minutes.</Text>
                    <Text style={style.txt6}>➊➌ Sprinkle the green onions on top and cook covered for another minute.</Text>
                    <Text style={style.txt6}>➊➍ To Serve:</Text>
                    <Text style={style.txt6}>➊➎ Divide 2 servings cooked Japanese short-grain rice into large donburi bowls. Then, drizzle some of the pan sauce on top of the rice.</Text>
                    <Text style={style.txt6}>➊➏ Put the beef and onion mixture on top of the rice. If you’d like, drizzle additional remaining sauce on top. Top the Gyudon with pickled red ginger{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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
export default Food1Japanese
