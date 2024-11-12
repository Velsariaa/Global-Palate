import React from 'react'
import {View, StyleSheet, Button, Text, Image, ScrollView} from 'react-native'

const Food4Japanese = ({navigation}) => {
    return(
        <View style={style.container}>
            <ScrollView style={{paddingTop: 30, flex:1}}>
                <Image style={style.pic}
                                    source={require('./assets/tinola.jpg')}/>
                <Text style={style.txt1}>Spicy Edamame (スパイシー枝豆)</Text>
                <Text style={style.txt2}>Japanese Cuisine Appetizer Dish</Text>
    
                <View style={style.container1}>
                    <View style={style.likod}>
                        <Image style={style.pic1}
                                            source={require('./assets/time.png')}/>
                        <Text style ={style.txt3}>15</Text>
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
                        <Text style ={style.txt3}>2</Text>
                        <Text style ={style.txt4}>Serves</Text>
                    </View>
                </View>  

                <Text style={style.txt5}>Ingredients</Text>

                <View style={{paddingLeft: 20}}>
                    <Text style={style.txt6}>○ 10-14 oz edamame</Text>
                    <Text style={style.txt6}>○ 4 cups of water</Text>
                    <Text style={style.txt6}>○ 1 tbsp</Text>
                    <Text style={style.txt6}>○ For the Spicy Sauce</Text>
                    <Text style={style.txt6}>○ 1 tbsp neutral oil</Text>
                    <Text style={style.txt6}>○ 2 cloves of minced garlic</Text>
                    <Text style={style.txt6}>○ 1 tbsp of Sambal Oelek Chili Paste</Text>
                    <Text style={style.txt6}>○ 1 tsp miso</Text>
                    <Text style={style.txt6}>○ 2 tbsp soy sauce</Text>
                    <Text style={style.txt6}>○ 2 tbsp mirin</Text>
                </View>


                <Text style={style.txt5}>Cook</Text>

                <View style={{paddingLeft: 20,}}>
                    <Text style={style.txt6}>➊ Add 4 cups of water to a pot and bring it to a boil over medium-high heat. Once boiling, add 1 tbsp of diamond crystal kosher salt</Text>
                    <Text style={style.txt6}>➋ Add 10–14 oz edamame (frozen) pods and cook, stirring once in a while, for 4–5 minutes, or until the soybeans are an al dente consistency. (Read the package instructions carefully and check if the soybeans are raw or cooked. Frozen edamame imported from Japan are always precooked, so you only need to boil them for 1 minute to reheat). </Text>
                    <Text style={style.txt6}>➌ If you see foam forming on the surface of the water, remove it with a fine-mesh skimmer because we do not rinse the pods after cooking. When the edamame are done cooking, drain in a colander. DO NOT RINSE, or the edamame will lose their salted flavor. Set aside.</Text>
                    <Text style={style.txt6}>➍ Heat a large frying pan over medium-low to medium heat. When the pan is warm, add 1 Tbsp neutral oil and 2 cloves garlic (minced) and sauté until fragrant. Don‘t burn the garlic.</Text>
                    <Text style={style.txt6}>➎ Add 1 Tbsp Sambal Oelek Chili Paste and 1 tsp miso and stir until combined.</Text>
                    <Text style={style.txt6}>➏ Add 2 Tbsp soy sauce and 2 Tbsp mirin and cook, stirring frequently, until the sauce is thickened a little bit.</Text>
                    <Text style={style.txt6}>➐ Add the cooked edamame pods to the pan and toss to coat them with the sauce. Transfer to a plate and serve warm or at room temperature. To eat, remove the soybeans from their inedible pods and enjoy. {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
        
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

export default Food4Japanese
